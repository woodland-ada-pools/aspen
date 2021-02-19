import {Component} from "react/cjs/react.production.min";
import DatePicker, {registerLocale} from "react-datepicker";
import {getNextFourEpochsFromDate, startEpochDate} from './payoutFunctions';
import {format, isAfter} from 'date-fns';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faSpinner} from "@fortawesome/free-solid-svg-icons";
import './PayoutCalculator.scss';
import enUS from 'date-fns/locale/en-US';
import {faCalendar} from "@fortawesome/free-regular-svg-icons";

const maxDate = new Date(Date.UTC(2100, 12, 31));

export class PayoutCalculator extends Component {
	state = {
		stakeDate:    new Date(),
		result:       [],
		localeString: 'en-US',
		locale:       enUS,
		loading:      false
	};

	async componentDidMount() {
		if (navigator.languages !== undefined) {
			const localeString = navigator.languages[0];

			if (!!localeString) {
				try {
					const locale = await import(`date-fns/locale/${localeString}`);

					this.setState({locale, localeString});

					console.log(`Locale was set to ${localeString}`);

					registerLocale(localeString, locale);
				} catch (e) {
					console.log('Locale does not exist in date-fns', localeString);
				}
			}
		}
	}

	updateStakeDate(date) {
		const {stakeDate} = this.state;

		date = date || stakeDate;

		const {locale} = this.state;
		const epochs   = getNextFourEpochsFromDate(date);

		this.setState({loading: true});

		this.setState({
			stakeDate:          date,
			formattedStakeDate: format(date, 'P', {locale}),
			result:             epochs
		});

		setTimeout(() => {
			this.setState({loading: false})
		}, 500);
	}

	renderEpochRow(epoch, index) {
		const {formattedStakeDate, result, locale} = this.state;

		const formattedDate = format(epoch.date, `P 'at' H:m zzzz`, {locale}),
		      isFuture      = isAfter(epoch.date, new Date());

		const text = {
			0: {
				past: `You started delegating on ${formattedStakeDate}`,
				future: `You will start delegating on ${formattedStakeDate}`
			},
			1: {
				past: `A snapshot of the stake pool was taken at the start of this epoch`,
				future: `A snapshot of the stake pool will be taken at the start of this epoch`,
			},
			2: {
				past: `Blocks may have been produced during this epoch with your delegation included`,
				future: `Blocks may be produced during this epoch with your delegation included`
			},
			3: {
				past: `Rewards were calculated at the start of this epoch based on the blocks produced in the previous epoch, if any`,
				future: `Rewards will be calculated at the start of this epoch based on the blocks produced in the previous epoch, if any`
			},
			4: {
				past: `If any blocks were produced by your stake pool in epoch ${result[2].number}, your rewards payout should have occurred at the start of this epoch!`,
				future: `If any blocks were produced by your stake pool in epoch ${result[2].number}, your rewards payout should occur at the start of this epoch!`,
			}
		};

		return (
			<div className="resultRow">
				<div className="epochNumber">
					Epoch {epoch.number}
				</div>
				<div className="resultContent">
					<div className="epochHeader">
						{isFuture ? 'Starts' : 'Started'} on {formattedDate}
					</div>
					<p>
						{index === 4 && (
							<FontAwesomeIcon icon={faStar}/>
						)} {text[index][isFuture ? 'future': 'past']}
					</p>
				</div>
			</div>
		)
	}

	renderPlaceholder() {
		return (
			<div className="placeholder">
				<div className="placeholderIcon">
					<FontAwesomeIcon icon={faCalendar}/>
				</div>
				<div className="placeholderText">
					Select a date above to get started
				</div>
			</div>
		)
	}

	render() {
		const {isOpen, close}                            = this.props,
		      {stakeDate, result, localeString, loading} = this.state;

		return (
			<div className={`modal ${isOpen ? 'is-active' : ''}`}>
				<div className="modal-background"/>
				<div className="modal-content">
					<button className="modal-close is-large" aria-label="close" onClick={close}/>

					<div className="payoutCalculator">
						<div className="informationSection">
							<h2 className="sectionHeader">Payout Date Estimator</h2>
							<div className="disclaimer">
								This tool provides a "best guess" as to when your rewards will be distributed based on
								the date you input.
								The estimate provided here is not guaranteed to be accurate nor a guarantee of any rewards. None of this
								information should be considered financial or investment advice.
							</div>

							<div className="dateInput">
								<h4>Staking Start Date</h4>
								<small>When did you start or intend to start staking?</small>

								<div className="columns is-mobile">
									<div className="column is-narrow">
										<DatePicker
											selected={stakeDate}
											onChange={date => this.updateStakeDate(date)}
											className="input"
											dateFormat="P"
											locale={localeString}
											minDate={startEpochDate}
											maxDate={maxDate}
											utcOffset="0"
											disabled={loading}
										/>
									</div>
									<div className="column">
										<button className="button is-info"
										        onClick={() => this.updateStakeDate()}
										        disabled={loading}
										>Go</button>
									</div>
								</div>
							</div>
						</div>

						<div className="results">
							{!loading && !result.length && this.renderPlaceholder()}
							{!loading && result.map((epoch, index) => this.renderEpochRow(epoch, index))}

							{loading && (
								<div className="placeholder">
									<div className="placeholderIcon loading">
										<FontAwesomeIcon icon={faSpinner} />
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
