import {Component} from "react";
import {
	fillEpochsBetweenDates,
	findEpochStartDateFromEpochNumber,
	findPriorNEpochsFromDate,
	startEpochDate
} from '../payoutCalendarByDate/PayoutCalendarFunctions';
import {format, isAfter} from 'date-fns';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";
import '../payoutCalendarByDate/PayoutCalendar.scss';
import './ReversePayoutCalendar.scss';
import {faCalendar} from "@fortawesome/free-regular-svg-icons/faCalendar";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons/faAngleDown";
import {orderBy} from 'lodash';
import enUS from 'date-fns/locale/en-US';
import enGB from 'date-fns/locale/en-GB';
import enCA from 'date-fns/locale/en-CA';
import enIN from 'date-fns/locale/en-IN';
import zhCN from 'date-fns/locale/zh-CN';
import zhTW from 'date-fns/locale/zh-TW';
import ru from 'date-fns/locale/ru';
import fr from 'date-fns/locale/fr';
import es from 'date-fns/locale/es';
import de from 'date-fns/locale/de';
import ptBR from 'date-fns/locale/pt-BR';
import pt from 'date-fns/locale/pt';
import it from 'date-fns/locale/it';
import ja from 'date-fns/locale/ja';
import {registerLocale} from "react-datepicker";

const supportedLocales = {
	'zh-CN': zhCN,
	'zh-TW': zhTW,
	'zh':    zhCN,
	'ru-RU': ru,
	'ru':    ru,
	'fr-FR': fr,
	'fr':    fr,
	'es-ES': es,
	'es-MX': es,
	'es':    es,
	'en-US': enUS,
	'en-GB': enGB,
	'en-IN': enIN,
	'en-CA': enCA,
	'en':    enUS,
	'de-DE': de,
	'de':    de,
	'pt-BR': ptBR,
	'pt':    pt,
	'it-IT': it,
	'it':    it,
	'ja-JP': ja,
	'ja':    ja
};

Object.entries(supportedLocales).forEach(async ([localeCode, locale]) => {
	registerLocale(localeCode, locale);
});

const EPOCH_DATE_FORMAT      = 'PP';
const EPOCH_DATE_TIME_FORMAT = `Pp`;

export class ReversePayoutCalendar extends Component {
	state = {
		payoutEpoch:        null,
		stakeDate:          null,
		formattedStakeDate: null,
		result:             [],
		epochDropdownOpen:  false,
		loading:            false,
		localeString:       'en-US',
		locale:             enUS
	};

	componentDidMount() {
		if (navigator.languages !== undefined) {
			const localeString = navigator.languages[0];

			if (!!localeString && supportedLocales[localeString]) {
				try {
					this.setState({
						locale: supportedLocales[localeString],
						localeString
					});

					console.log(`Locale was set to ${localeString}`);
				} catch (e) {
					console.log('Locale does not exist in date-fns', localeString);
				}
			} else {
				console.log('Locale not supported: ' + localeString);
			}
		}
	}

	updateStakeDate() {
		const {payoutEpoch} = this.state;

		const payoutEpochDate = findEpochStartDateFromEpochNumber(payoutEpoch);

		const priorFourEpochs = findPriorNEpochsFromDate(payoutEpochDate, 4);

		const epochs = [
			...priorFourEpochs.reverse()
		];

		this.setState({loading: true});

		this.setState({
			loading:            true,
			stakeDate:          epochs[0].date,
			formattedStakeDate: this.formatEpochDateAndTime(epochs[4].date),
			result:             epochs
		});

		setTimeout(() => {
			this.setState({loading: false})
		}, 500);
	}

	onEpochDropdownItemClick(event, epochNumber) {
		event.preventDefault();

		this.setState({
			payoutEpoch: epochNumber
		}, () => this.updateStakeDate());

		this.closeEpochDropdown();
	}

	formatEpochDate(date) {
		const {locale} = this.state;

		return format(date, EPOCH_DATE_FORMAT, {locale});
	}

	formatEpochDateAndTime(date) {
		const {locale} = this.state;

		return format(date, EPOCH_DATE_TIME_FORMAT, {locale});
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

	renderEpochRow(epoch, index) {
		const {result, payoutEpoch, formattedStakeDate} = this.state;

		const formattedDate = this.formatEpochDateAndTime(epoch.date),
		      isFuture      = isAfter(epoch.date, new Date());

		const text = {
			4: {
				past:   `You need to have been delegated before ${formattedStakeDate} to have received rewards during epoch ${payoutEpoch}`,
				future: `You need to start delegating before ${formattedStakeDate} to receive rewards during epoch ${payoutEpoch}`
			},
			3: {
				past:   `A snapshot of the stake pool was taken at the start of this epoch`,
				future: `A snapshot of the stake pool will be taken at the start of this epoch`,
			},
			2: {
				past:   `Blocks may have been produced during this epoch`,
				future: `Blocks may be produced during this epoch`
			},
			1: {
				past:   `Rewards were calculated at the start of this epoch based on the blocks produced in the previous epoch, if any`,
				future: `Rewards will be calculated at the start of this epoch based on the blocks produced in the previous epoch, if any`
			},
			0: {
				past:   `If any blocks were produced by your stake pool in epoch ${result[2].number} and you delegated before ${formattedStakeDate}, your rewards payout should have occurred at the start of this epoch!`,
				future: `If any blocks were produced by your stake pool in epoch ${result[2].number} and you delegated before ${formattedStakeDate}, your rewards payout should occur at the start of this epoch!`,
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
						{index === 0 && (
							<FontAwesomeIcon icon={faStar}/>
						)} {text[index][isFuture ? 'future' : 'past']}
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
					Select an epoch above to get started
				</div>
			</div>
		)
	}

	render() {
		const {result, loading, epochDropdownOpen, payoutEpoch} = this.state;

		const allEpochs = orderBy(fillEpochsBetweenDates(startEpochDate, new Date()), epoch => epoch.number, ['desc']);

		return (
			<div id="reversePayoutCalculator" className="payoutCalculator reversePayoutCalculator">
				<div className="informationSection">
					<div className="disclaimer">
						This tool provides a "best guess" as to when you need to have begun staking in order to have
						received rewards for
						the selected epoch.
						The estimate provided here is not guaranteed to be accurate nor a guarantee of any
						rewards. None of this information should be considered financial or investment advice.
					</div>

					<div className="dateInput">
						<h4>Rewards Epoch</h4>
						<small>In which epoch were rewards paid out?</small>

						<div className="columns is-mobile">
							<div className="column is-narrow">
								<div className={`dropdown${epochDropdownOpen ? ' is-active' : ''} epochDropdown`}>
									<div className="dropdown-trigger">
										<button className="button" aria-haspopup="true" aria-controls="dropdown-menu"
										        onClick={() => this.toggleEpochDropdown()}>
											<strong>{payoutEpoch ? `Epoch ${payoutEpoch}` : 'Select an Epoch'}</strong>
											<span className="icon is-small">
												<FontAwesomeIcon icon={faAngleDown}/>
											</span>
										</button>
									</div>
									<div className="dropdown-menu" id="dropdown-menu" role="menu">
										<div className="dropdown-content">
											{allEpochs.map(({number, date}) => {
												return (
													<a href="#" className="dropdown-item"
													   onClick={(event) => this.onEpochDropdownItemClick(event, number)}>
														Epoch {number} - {this.formatEpochDate(date)}
													</a>
												)
											})}
										</div>
									</div>
								</div>
							</div>
							<div className="column">
								<button className="button is-info"
								        onClick={() => this.updateStakeDate()}
								        disabled={loading}
								>Go
								</button>
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
								<FontAwesomeIcon icon={faSpinner}/>
							</div>
						</div>
					)}
				</div>
			</div>
		)
	}
}
