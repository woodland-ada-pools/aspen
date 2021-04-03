import {Component} from "react";
import {CSSTransition} from "react-transition-group";
import {findPoolsByTicker, getPoolRewardsAndFees} from "../../api/WoodlandPoolsApi";
import Autocomplete from "../common/autocomplete/Autocomplete";
import './EpochRewardsEstimator.scss';
import {debounce} from 'lodash';
import {findEpochStartDateFromEpochNumber} from "../payoutCalendar/PayoutCalendarFunctions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from '@fortawesome/free-solid-svg-icons/faAngleDown';
import format from 'date-fns/format';
import {adaToLovelace, formatAdaValue, lovelaceToAda} from "../../helpers/stringHelpers";
import {orderBy, round} from 'lodash';
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";
import {faCalculator} from "@fortawesome/free-solid-svg-icons/faCalculator";

const EPOCH_DATE_FORMAT = 'PP';

export class EpochRewardsEstimator extends Component {
	state = {
		poolResults:        [],
		selectedPool:       {},
		stakeAmount:        0,
		selectedEpoch:      null,
		currentCalculation: {
			rewards: null,
			fees:    null,
			stake:   null
		},
		results:            null,
		epochDropdownOpen:  false,
		loading:            false,
		loadingSearch:      false
	};

	constructor(props) {
		super(props);


		this.searchPoolsByTicker = debounce(this.searchPoolsByTicker, 300);
	}

	componentDidMount() {
		this.windowClickListener = function(event) {
			const {epochDropdownOpen} = this.state;

			const wasDropdownClick = event.composedPath().some(element => element instanceof Element && element.matches('.epochDropdown'));

			if (epochDropdownOpen && !wasDropdownClick) {
				this.closeEpochDropdown();
			}
		};

		window.addEventListener('click', this.windowClickListener.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('click', this.windowClickListener);
	}

	async searchPoolsByTicker(ticker) {
		let results = [];

		if (!!ticker) {
			this.setState({
				loadingSearch: true
			}, async () => {
				const searchResults = await findPoolsByTicker(ticker);

				if (searchResults.length > 0) {
					results = searchResults.map(pool => ({
						id:    pool.id,
						label: `${pool.ticker} - ${pool.name}`
					}));
				}

				this.setState({
					loadingSearch: false,
					poolResults:   results
				});
			});
		} else {
			this.setState({
				selectedPool:  {},
				poolResults:   [],
				loadingSearch: false
			});
		}
	}

	async getPoolRewardsAndFeesByTicker(ticker) {
		return new Promise((resolve, reject) => {
			if (!ticker) {
				return reject('No pool selected');
			}

			return getPoolRewardsAndFees(ticker)
				.then(results => {
					this.setState({
						results
					}, () => resolve());
				})
				.catch(reject);
		});
	}

	onSelectedPoolCleared() {
		this.setState({
			poolResults:        [],
			selectedPool:       {},
			selectedEpoch:      null,
			currentCalculation: {
				rewards: null,
				fees:    null,
				stake:   null
			},
			results:            null,
			epochDropdownOpen:  false
		});
	}

	onPoolDropdownClosed() {
		this.setState({
			poolResults: []
		});
	}

	onPoolSelected(selectedPool) {
		this.setState({selectedPool});
	}

	onStakeAmountChanged(event) {
		this.setState({
			stakeAmount: event.target.value
		});
	}

	onEpochDropdownItemClick(epochNumber) {
		this.calculateForEpoch(epochNumber);
		this.closeEpochDropdown();
	}

	async calculate() {
		this.setState({
			loading: true
		});

		const {selectedPool} = this.state;

		await this.getPoolRewardsAndFeesByTicker(selectedPool.id);

		const {results} = this.state;

		if (!!results) {
			const sortedEpochs           = Object.keys(results.rewards)
				      .sort((a, b) => a - b),
			      latestEpochWithRewards = sortedEpochs.reverse()[0];

			this.setState({
				currentCalculation: {
					allEpochs: sortedEpochs
				}
			}, () => {
				this.calculateForEpoch(latestEpochWithRewards);
				this.setState({
					loading: false
				});
			});
		}
	}

	getFeesForEpoch(epochNumber) {
		const {results} = this.state;

		const possibleFees = results.feeHistory.filter(event => event.epoch <= epochNumber);

		const sortedFees = orderBy(possibleFees, event => parseInt(event.timestamp), 'desc');

		return sortedFees[0]?.fee || 340;
	}

	getMarginForEpoch(epochNumber) {
		const {results} = this.state;

		const possibleMargins = results.marginHistory.filter(event => event.epoch <= epochNumber);

		const sortedMargins = orderBy(possibleMargins, event => parseInt(event.timestamp), 'desc');

		return sortedMargins[0]?.margin || 0.025;
	}

	calculateForEpoch(epochNumber) {
		const {results, currentCalculation} = this.state;

		const rewards       = parseFloat(results.rewards[epochNumber]),
		      fixedFee      = this.getFeesForEpoch(epochNumber),
		      margin        = this.getMarginForEpoch(epochNumber),
		      stake         = parseFloat(results.stake[epochNumber]),
		      total         = parseFloat(results.rewards[epochNumber] + results.fees[epochNumber]),
		      ros           = Math.pow((rewards / stake) + 1, (365 / 5)) - 1,
		      marginRewards = lovelaceToAda(results.fees[epochNumber] - fixedFee);

		this.setState({
			currentCalculation: {
				...currentCalculation,
				epoch: epochNumber,
				rewards,
				fixedFee,
				margin,
				marginRewards,
				stake,
				total,
				ros
			}
		});
	}

	formatEpochDate(epochNumber) {
		return format(findEpochStartDateFromEpochNumber(epochNumber), EPOCH_DATE_FORMAT);
	}

	closeEpochDropdown() {
		this.setState({
			epochDropdownOpen: false
		});
	}

	toggleEpochDropdown() {
		const {epochDropdownOpen} = this.state;

		this.setState({
			epochDropdownOpen: !epochDropdownOpen
		});
	}

	onClose() {
		const {close} = this.props;

		this.onSelectedPoolCleared();

		close();
	}

	renderPlaceholder() {
		return (
			<div className="placeholder">
				<div className="placeholderIcon">
					<FontAwesomeIcon icon={faCalculator}/>
				</div>
				<div className="placeholderText">
					Select a pool and enter your stake amount to get started
				</div>
			</div>
		)
	}

	renderResults() {
		const {currentCalculation, stakeAmount, epochDropdownOpen} = this.state;

		if (!currentCalculation || !currentCalculation.epoch) {
			return;
		}

		const stakeAmountInLovelace = adaToLovelace(stakeAmount),
		      stakeRatio            = (stakeAmountInLovelace / currentCalculation.stake),
		      approximateRewards    = round(currentCalculation.rewards * stakeRatio, 4);

		return (
			<div className="card">
				<div className="card-content">
					<section>
						<div className="columns is-multiline">
							<div className="column is-half-desktop is-half-tablet is-full-mobile">
								<div className={`dropdown${epochDropdownOpen ? ' is-active' : ''} epochDropdown`}>
									<div className="dropdown-trigger">
										<button className="button" aria-haspopup="true" aria-controls="dropdown-menu"
										        onClick={() => this.toggleEpochDropdown()}>
											<strong>Epoch {currentCalculation.epoch} - {this.formatEpochDate(currentCalculation.epoch)}</strong>
											<span className="icon is-small">
												<FontAwesomeIcon icon={faAngleDown}/>
											</span>
										</button>
									</div>
									<div className="dropdown-menu" id="dropdown-menu" role="menu">
										<div className="dropdown-content">
											{currentCalculation.allEpochs.map(epochNumber => {
												return (
													<a href="#" className="dropdown-item"
													   onClick={() => this.onEpochDropdownItemClick(epochNumber)}>
														Epoch {epochNumber} - {this.formatEpochDate(epochNumber)}
													</a>
												)
											})}
										</div>
									</div>
								</div>
							</div>
							<div className="column is-half-desktop is-half-tablet is-full-mobile">
								<div className="card has-light-shadow feesTable">
									<div className="card-content">
										<div className="columns is-mobile is-multiline">
											<div className="column is-one-third-desktop is-half-mobile">
												<strong>Fixed Fee</strong>
											</div>
											<div className="column is-two-thirds-desktop is-half-mobile">
												{formatAdaValue(lovelaceToAda(currentCalculation.fixedFee))}
											</div>

											<div className="column is-one-third-desktop is-half-mobile">
												<strong>Variable Fee</strong>
											</div>
											<div className="column is-two-thirds-desktop is-half-mobile">
												{round(currentCalculation.margin * 100, 2)}%
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="calculations">
						<div className="calcSection">
							<div className="itemRow totalRow">
								<div className="columns is-mobile">
									<div className="column is-one-third itemHeaderColumn">
										Total live stake for epoch
									</div>
									<div className="column is-two-thirds itemValueColumn">
										<div className="itemValue">
											<div className="sign">=</div>
											<span>
												{formatAdaValue(lovelaceToAda(currentCalculation.stake))}
											</span>
										</div>
										<div className="itemExplanation">
											The total amount of ADA delegated to the pool for this epoch.
										</div>
									</div>
								</div>
							</div>

							<div className="itemRow totalRow">
								<div className="columns is-mobile">
									<div className="column is-one-third itemHeaderColumn">
										Total rewards for epoch
									</div>
									<div className="column is-two-thirds itemValueColumn">
										<div className="itemValue">
											<div className="sign">=</div>
											<span>
												{formatAdaValue(lovelaceToAda(currentCalculation.total))}
											</span>
										</div>
										<div className="itemExplanation">
											The total amount of rewards and fees granted to the stake pool for this
											epoch.
										</div>
									</div>
								</div>
							</div>

							<div className="itemRow feesRow">
								<div className="columns is-mobile">
									<div className="column is-one-third itemHeaderColumn">
										<div className="minus">Pool operation fees</div>
									</div>
									<div className="column is-two-thirds itemValueColumn">
										<div className="itemValue">
											<div className="sign minus">-</div>
											<span className="minus">
												{formatAdaValue(lovelaceToAda(currentCalculation.fixedFee))}
											</span>
										</div>
										<div className="itemExplanation">
											The fixed fee charged by the stake pool -
											typically {formatAdaValue(340, true)}. This fee is intended to cover
											infrastructure costs.
										</div>
									</div>
								</div>
							</div>

							<div className="itemRow feesRow">
								<div className="columns is-mobile">
									<div className="column is-one-third itemHeaderColumn subHeader">
										<div className="minus">Pool operator rewards</div>
									</div>
									<div className="column is-two-thirds itemValueColumn">
										<div className="itemValue">
											<div className="sign minus">-</div>
											<span className="minus">
												{formatAdaValue(currentCalculation.marginRewards)}
											</span>
										</div>
										<div className="itemExplanation">
											The rewards given to the pool operators - fee varies by stake
											pool. The selected pool's variable fee
											is <strong>{currentCalculation.margin * 100}%</strong> (less than 5% is
											typical for non-private pools).
										</div>
									</div>
								</div>
							</div>

							<div className="itemRow totalRewardsRow">
								<div className="columns is-mobile">
									<div className="column is-one-third itemHeaderColumn">
										Total delegator rewards
									</div>
									<div className="column is-two-thirds itemValueColumn">
										<div className="itemValue">
											<div className="sign">=</div>
											<span>
												{formatAdaValue(lovelaceToAda(currentCalculation.rewards))}
											</span>
										</div>
										<div className="itemExplanation">
											The total amount to be distributed to delegators.
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="calcSection">
							<div className="itemRow rewardsRow">
								<div className="columns is-mobile">
									<div className="column is-one-third itemHeaderColumn">
										Your stake
									</div>
									<div className="column is-two-thirds itemValueColumn">
										<div className="itemValue">
											<div className="sign">=</div>
											<span>
												{formatAdaValue(stakeAmount)}
											</span>
										</div>
										<div className="itemExplanation">
											The amount you've delegated to the stake pool.
										</div>
									</div>
								</div>
							</div>

							<div className="itemRow rewardsRow">
								<div className="columns is-mobile">
									<div className="column is-one-third itemHeaderColumn">
										Your stake ratio
									</div>
									<div className="column is-two-thirds itemValueColumn">
										<div className="itemValue">
											<div className="sign">=</div>
											<span>
												{round(stakeRatio, 4)}%
											</span>
										</div>
										<div className="itemExplanation">
											Your stake as a percentage of total live stake.
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="itemRow yourRewardsRow">
							<div className="columns is-mobile">
								<div className="column is-one-third itemHeaderColumn">
									Your estimated rewards
								</div>
								<div className="column is-two-thirds itemValueColumn">
									<div className="itemValue">
										<div className="sign">=</div>
										<span>
											{formatAdaValue(lovelaceToAda(approximateRewards))}
										</span>
									</div>
									<div className="itemExplanation">
										Your stake ratio ({round(stakeRatio, 4)}%) multiplied by the total delegator
										rewards ({formatAdaValue(lovelaceToAda(currentCalculation.rewards))}).
									</div>
								</div>
							</div>

							<div className="columns is-mobile">
								<div className="column is-one-third itemHeaderColumn">
									Your estimated RoS
								</div>
								<div className="column is-two-thirds itemValueColumn">
									<div className="itemValue">
										<div className="sign">=</div>
										<span>
											{round(currentCalculation.ros, 3) * 100}%
										</span>
									</div>
									<div className="itemExplanation">
										Around 5% RoS (Return on Stake) is typical. This is the annualized rate of
										return extrapolated from this epoch's rewards.
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		)
	}

	render() {
		const {isOpen}                                                   = this.props,
		      {loading, poolResults, selectedPool, stakeAmount, results} = this.state;

		return (
			<CSSTransition in={isOpen}
			               timeout={250}
			               classNames="fade"
			               mountOnEnter
			               unmountOnExit>
				<div className={`modal fade is-active epochRewardsEstimatorModal`}>
					<div className="modal-background" onClick={() => this.onClose()}/>
					<div className="modal-content">
						<button className="modal-close is-large" aria-label="close" onClick={() => this.onClose()}/>

						<div id="epochRewardsEstimator" className="epochRewardsEstimator">
							<section className="informationSection">
								<h2 className="sectionHeader">Epoch Rewards Estimator</h2>
								<div className="disclaimer">
									This tool describes how pool fees work on a per-epoch basis and gives you a rough
									estimate, based on your stake amount, of the rewards you can expect to earn in a
									given epoch, utilizing historical data for the pool you select. Your individual
									results may vary. None of this
									information should be considered financial or investment advice.
								</div>
							</section>

							<section className="inputSection">
								<form action="javascript:void(0)" autoComplete="off">
									<section className="poolInput">
										<Autocomplete
											name="pool"
											label={(
												<>
													<h4>Select your pool</h4>
													<small>
														Type in a ticker (for example, ASPEN) and select your stake pool
														from the results.
													</small>
												</>
											)}
											placeholder="Begin typing a stake pool ticker"
											matches={poolResults}
											onChange={(searchValue) => this.searchPoolsByTicker(searchValue)}
											onClear={() => this.onSelectedPoolCleared()}
											onDropdownClose={() => this.onPoolDropdownClosed()}
											onSelect={selectedPool => this.onPoolSelected(selectedPool)}
											width="300px"
										/>
									</section>

									<section className="stakeInput">
										<label className="label">
											<h4>Your stake amount</h4>
											<small>
												This is the amount you might have delegated to the selected stake
												pool.
											</small>
										</label>

										<div className="field">
											<div className="control has-icons-left">
												<i className="icon">₳</i>
												<input
													type="number"
													className="input"
													placeholder="Enter your stake amount"
													onChange={(event) => this.onStakeAmountChanged(event)}
												/>
											</div>
										</div>
									</section>

									<section>
										<button className="button is-info"
										        onClick={() => this.calculate()}
										        disabled={!selectedPool || !stakeAmount}
										>
											Calculate
										</button>
									</section>
								</form>
							</section>

							<section className="resultsSection">
								{!!results && this.renderResults()}

								{!loading && !results && this.renderPlaceholder()}

								{loading && (
									<div className="placeholder">
										<div className="placeholderIcon loading">
											<FontAwesomeIcon icon={faSpinner}/>
										</div>
									</div>
								)}
							</section>

						</div>
					</div>
				</div>
			</CSSTransition>
		)
	}
}
