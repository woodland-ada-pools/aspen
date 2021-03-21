import './App.scss';
import {Component} from "react/cjs/react.production.min";
import LogoSvg from './static/logo_no_text.svg';
import LogoTextSvg from './static/logo_text.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-regular-svg-icons/faCopy';
import {faCalendar} from '@fortawesome/free-regular-svg-icons/faCalendar';
import {faYoutube} from '@fortawesome/free-brands-svg-icons/faYoutube';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import YoutubeChannel from './components/youtubeChannel/YoutubeChannel';
import {ExternalLink} from "./components/CommonComponent";
import {PayoutCalendar} from "./components/payoutCalendar/PayoutCalendar";
import {EpochRewardsEstimator} from "./components/epochRewardsEstimator/EpochRewardsEstimator";

const {youtubeUrl, twitterUrl, poolID} = require('./config/config.json');

function Logo() {
	return (
		<img src={LogoSvg} className="logo"/>
	)
}

function LogoText() {
	return (
		<img src={LogoTextSvg} className="logoText"/>
	)
}

function Header() {
	return (
		<header>
			<div className="columns">
				<div className="column logoColumn">
					<Logo/>
				</div>
				<div className="column logoTextColumn">
					<LogoText/>
				</div>
				<div className="column socialColumn is-hidden-mobile">
					<div className="columns">
						<div className="column youtube">
							<ExternalLink href={youtubeUrl}>
								<FontAwesomeIcon icon={faYoutube}/>
							</ExternalLink>
						</div>
						<div className="column twitter">
							<ExternalLink href={twitterUrl}>
								<FontAwesomeIcon icon={faTwitter}/>
							</ExternalLink>
						</div>
					</div>
				</div>
			</div>

			<div className="mobileSocial is-hidden-tablet is-hidden-desktop is-hidden-fullhd">
				<div className="columns">
					<div className="column youtube">
						<ExternalLink href={youtubeUrl}>
							<FontAwesomeIcon icon={faYoutube}/>
						</ExternalLink>
					</div>
					<div className="column twitter">
						<ExternalLink href={twitterUrl}>
							<FontAwesomeIcon icon={faTwitter}/>
						</ExternalLink>
					</div>
				</div>
			</div>
		</header>
	)
}

class PoolID extends Component {
	state = {
		copied: false
	}

	onCopy() {
		this.setState({copied: true});

		setTimeout(() => this.setState({copied: false}), 7000);
	}

	render() {
		const {copied} = this.state;

		return <div className={`poolID ${copied ? 'copied' : ''}`}>
			<CopyToClipboard text={poolID}
			                 onCopy={() => this.onCopy()}>
				<span className="copyPoolIDBox">
					<span className="copyPoolIDText">
						{poolID}
					</span>

					<span className="copyPoolIDBButton">
						{copied ? <span className="copied">Copied!</span> : <FontAwesomeIcon icon={faCopy}/>}
					</span>
				</span>
			</CopyToClipboard>
		</div>
	}
}

function Footer() {
	return (
		<footer>
			<p>
				<strong>Disclaimer</strong>: No one associated with Woodland Pools is a financial advisor, broker, or
				dealer, and none of the information presented should be construed as financial advice.
				The information presented on our channel, website, and social media is for entertainment and
				informational purposes only, and all community members should
				independently verify and research all information when creating their own investment plans.
			</p>
		</footer>
	)
}

function Navigation({openPayoutCalendar, openEpochRewardsEstimator}) {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div id="navbarMainMenu" className="navbar-menu is-active">
				<div className="navbar-start">
					<a className="navbar-item">
						Home
					</a>

					<a className="navbar-item">
						FAQ
					</a>

					<div className="navbar-item has-dropdown is-hoverable">
						<a className="navbar-link">
							Tools
						</a>

						<div className="navbar-dropdown">
							<a className="navbar-item" onClick={openPayoutCalendar}>
								Payout Date Estimator
							</a>
							<a className="navbar-item" onClick={openEpochRewardsEstimator}>
								Epoch Rewards Calculator
							</a>
						</div>
					</div>
				</div>
				<div className="navbar-end">

				</div>
			</div>
		</nav>
	)
}

class App extends Component {
	state = {
		payoutCalendarOpen:        false,
		epochRewardsEstimatorOpen: false
	};

	openPayoutCalendar() {
		this.setState({
			payoutCalendarOpen:        true,
			epochRewardsEstimatorOpen: false
		});
	}

	openEpochRewardsEstimator() {
		this.setState({
			payoutCalendarOpen:        false,
			epochRewardsEstimatorOpen: true
		});
	}

	closeAllModals() {
		this.setState({
			payoutCalendarOpen:        false,
			epochRewardsEstimatorOpen: false
		});
	}

	componentDidUpdate(prevProps, prevState) {
		const {payoutCalendarOpen, epochRewardsEstimatorOpen} = this.state,
		      modalIsOpen                                     = payoutCalendarOpen || epochRewardsEstimatorOpen,
		      modalWasOpen                                    = prevState.payoutCalendarOpen || prevState.epochRewardsEstimatorOpen;

		if (!modalWasOpen && modalIsOpen) {
			document.documentElement.classList.add('modal-open');
		} else if (modalWasOpen && !modalIsOpen) {
			document.documentElement.classList.remove('modal-open');
		}
	}

	render() {
		const {payoutCalendarOpen, epochRewardsEstimatorOpen} = this.state;

		const modalIsOpen = payoutCalendarOpen || epochRewardsEstimatorOpen;

		return (
			<div className={`App${modalIsOpen ? ' modal-open' : ''}`}>
				<Header/>

				<main>
					<div className="mainContentWrapper">
						<div className="mainContent">
							<Navigation
								openPayoutCalendar={() => this.openPayoutCalendar()}
								openEpochRewardsEstimator={() => this.openEpochRewardsEstimator()}
							/>

							<div className="heroBoxes">
								<div className="columns is-multiline">
									<div className="column is-5-fullhd is-12-desktop is-12-tablet is-12-mobile">
										<div className="heroInfoColumn columnContent heroDelegationInfo">
											<h2>Curious about staking?</h2>

											<p>Not sure where to begin? Have a look at our series of videos on staking
												with <ExternalLink
													href="https://www.youtube.com/watch?v=8u7ba3FIwi0">Adalite</ExternalLink>,&nbsp;
												<ExternalLink
													href="https://www.youtube.com/watch?v=Q1ZJS7KvwGc">Yoroi</ExternalLink>,
												or <ExternalLink
													href="https://www.youtube.com/watch?v=nbYvXnfPiSM">Daedalus</ExternalLink>!
											</p>

											<p>
												Feel free to check us out on <ExternalLink
												href="https://pooltool.io/pool/05b8a25ec4f41956a6496555c233bcbe6fc06596553ae2d14df73e20">PoolTool.io</ExternalLink> or <ExternalLink
												href="https://adapools.org/pool/05b8a25ec4f41956a6496555c233bcbe6fc06596553ae2d14df73e20">ADApools.org</ExternalLink> for
												more detailed information about our stake pool.
											</p>

											<div className="poolIDRow">
												Ready to get started? You'll need our pool ID!

												<div className="poolIDWrapper">
													<PoolID/>
												</div>
											</div>
										</div>
									</div>
									<div className="column is-7-fullhd is-12-desktop is-12-tablet is-12-mobile">
										<div className="heroInfoColumn columnContent payoutInfo">
											<h2>When will I get my rewards?</h2>

											<p>So you've just started delegating to a stake pool (maybe even ours) -
												congratulations!</p>

											<p>Now, when do you get paid? Click the button below to launch our payout
												date estimator and find out!</p>

											<p className="payoutButton">
												<button className="button" onClick={() => this.openPayoutCalendar()}>
													<FontAwesomeIcon icon={faCalendar}/>
													<span>Payout Date Estimator</span>
												</button>
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="columns is-multiline">
								<div className="column is-5-fullhd is-12-desktop is-12-tablet is-12-mobile">
									<div className="columnContent">
										<h2 className="sectionHeader">Our Mission</h2>

										<p>We strive to provide the Cardano community with the latest news, tutorials,
											and the information you need to grow your investment with confidence.</p>

										<p>Check out our <ExternalLink href={youtubeUrl}>Youtube
											channel</ExternalLink> to learn more!</p>

										<h2 className="sectionHeader aboutUsHeader">About Us</h2>

										<p>Our pool is run by two software engineers based in the United States working
											in the
											healthcare industry.</p>

										<p>The Aspen pool is configured with two relay nodes and a core node, continuous
											backups, and 24/7 monitoring.</p>

										<div className="poolInformation is-hidden-mobile">
											<h3>At a Glance</h3>

											<iframe width="100%" height="400" frameBorder="0"
											        src="https://js.adapools.org/widget.html?pool=05b8a25ec4f41956a6496555c233bcbe6fc06596553ae2d14df73e20">
											</iframe>
										</div>
									</div>
								</div>
								<div className="column rightColumn is-7-fullhd is-12-desktop is-12-tablet is-12-mobile">
									<div className="columnContent">
										<YoutubeChannel/>
									</div>
								</div>
							</div>

							<Footer/>

						</div>
					</div>
				</main>

				<PayoutCalendar
					isOpen={payoutCalendarOpen}
					close={() => this.closeAllModals()}
				/>

				<EpochRewardsEstimator
					isOpen={epochRewardsEstimatorOpen}
					close={() => this.closeAllModals()}
				/>
			</div>
		);
	}
}

export default App;
