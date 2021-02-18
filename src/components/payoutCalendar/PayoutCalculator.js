import {Component} from "react/cjs/react.production.min";
import DatePicker from "react-datepicker";
import {getNextFourEpochsFromDate} from './payoutFunctions';
import {format, isAfter} from 'date-fns';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import './PayoutCalculator.scss';

export class PayoutCalculator extends Component {
	state = {
		stakeDate: new Date(),
		result:    []
	};

	updateStakeDate(date) {
		const epochs = getNextFourEpochsFromDate(date);

		this.setState({
			stakeDate: date,
			formattedStakeDate: format(date, 'dd/MM/yyyy'),
			result: epochs
		});
	}

	renderEpochRow(epoch, index) {
		const {formattedStakeDate, result} = this.state;

		const formattedDate = format(epoch.date, `dd/MM/yyyy 'at' H:m:s OOO`),
		      isFuture = isAfter(epoch.date, new Date());

		const text = {
			0: `You started delegating on ${formattedStakeDate}`,
			1: `A snapshot of the stake pool is taken at the start of this epoch`,
			2: `Blocks may be produced during this epoch with your delegation included`,
			3: `Rewards are calculated at the start of this epoch based on the blocks produced in the previous epoch, if any`,
			4: `If any blocks were produced in epoch ${result[2].number}, your rewards payout occurs at the start of this epoch!`
		};

		return (
			<div className="resultRow">
				<div className="resultContent">
					<div className="epochHeader">
						<span className="epochNumber">Epoch {epoch.number}</span> <span className="epochDate">{isFuture ? 'Starts' : 'Started'} on {formattedDate}</span>
					</div>
					<p>
						{index === 4 && (
							<FontAwesomeIcon icon={faStar} />
						)} {text[index]}
					</p>
				</div>
			</div>
		)
	}

	render() {
		const {isOpen, close}     = this.props,
		      {stakeDate, result} = this.state;

		return (
			<div className={`modal ${isOpen ? 'is-active' : ''}`}>
				<div className="modal-background"/>
				<div className="modal-content">
					<div className="payoutCalculator">
						<h2 className="sectionHeader">Payout Date Estimator</h2>
						<div className="disclaimer">
							This tool provides a "best guess" as to when your rewards will be distributed based on the
							date you input.
							The estimate provided here is <i>not</i> a guarantee of any rewards and none of this
							information should be
							considered financial or investment advice.
						</div>

						<div className="estimatorTool">
							<div className="dateInput">
								<h4>Staking Start Date</h4>
								<small>When did you start or intend to start staking?</small>

								<div className="columns">
									<div className="column is-narrow">
										<DatePicker
											selected={stakeDate}
											onChange={date => this.updateStakeDate(date)}
											className="input"
											dateFormat="dd/MM/yyyy"
										/>
									</div>
									<div className="column">
										<button className="button is-info">Go</button>
									</div>
								</div>
							</div>
							<div className="results">
								{result.map((epoch, index) => this.renderEpochRow(epoch, index))}
							</div>
						</div>
					</div>
				</div>
				<button className="modal-close is-large" aria-label="close" onClick={close}/>
			</div>
		)
	}
}
