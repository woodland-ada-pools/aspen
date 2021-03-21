import {Component} from "react";
import {CSSTransition} from "react-transition-group";
import {findPoolsByTicker} from "../../api/WoodlandPoolsApi";
import Autocomplete from "../common/autocomplete/Autocomplete";
import './EpochRewardsEstimator.scss';
import {debounce} from 'lodash';

export class EpochRewardsEstimator extends Component {
	state = {
		poolResults: []
	};

	constructor(props) {
		super(props);


		this.searchPoolsByTicker = debounce(this.searchPoolsByTicker, 300);
	}


	async searchPoolsByTicker(ticker) {
		let results = [];

		if (!!ticker) {
			const searchResults = await findPoolsByTicker(ticker);

			if (searchResults.length > 0) {
				results = searchResults.map(pool => ({
					id:    pool.ticker,
					label: `${pool.ticker} - ${pool.name}`
				}));
			}
		}

		this.setState({
			poolResults: results
		});
	}

	render() {
		const {isOpen, close}        = this.props,
		      {loading, poolResults} = this.state;

		return (
			<CSSTransition in={isOpen}
			               timeout={250}
			               classNames="fade"
			               mountOnEnter
			               unmountOnExit>
				<div className={`modal fade is-active`}>
					<div className="modal-background" onClick={close}/>
					<div className="modal-content">
						<button className="modal-close is-large" aria-label="close" onClick={close}/>

						<div id="epochRewardsEstimator" className="epochRewardsEstimator">
							<div className="informationSection">
								<h2 className="sectionHeader">Epoch Rewards Estimator</h2>
								<div className="disclaimer">
									This tool describes how pool fees work on a per-epoch basis and gives you a rough
									estimate, based on your stake amount,
									of the rewards you can expect to earn in a given epoch, utilizing historical data for
									the pool you select. None of this information should be considered financial or investment advice.
								</div>

								<div className="poolInput">
									<Autocomplete
										name="pool"
										label={(
											<>
												<h4>Select Your Pool</h4>
												<small>Type in a ticker (for example, ASPEN) and select your stake pool from the
													results.</small>
											</>
										)}
										placeholder="Begin typing a stake pool ticker"
										matches={poolResults}
										onChange={(searchValue) => this.searchPoolsByTicker(searchValue)}
										onClear={() => this.setState({poolResults: []})}
										width="300px"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</CSSTransition>
		)
	}
}
