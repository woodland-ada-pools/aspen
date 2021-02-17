import './App.scss';
import {Background, Parallax} from "react-parallax";
import {Component} from "react/cjs/react.production.min";
import LogoSvg from './static/logo_no_text.svg';
import LogoTextSvg from './static/logo_text.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-regular-svg-icons'
import {faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons'
import YoutubeChannel from './components/youtubeChannel/YoutubeChannel';
import {Bullet, Card, ExternalLink} from "./components/CommonComponent";

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

function Hero() {
	return (
		<Parallax strength={300}>
			<Background className="hero" blue={{min: 1, max: 3}}>
				<img src="img/background.png"/>
			</Background>
			<div className="columns">
				<div className="column is-half-fullhd is-two-thirds-desktop is-full-tablet is-full-mobile">
					<div className="heroDelegationInfo">
						<h2>Curious about staking?</h2>

						<p>Not sure where to begin? Have a look at our series of videos on staking with <ExternalLink
							href="https://www.youtube.com/watch?v=8u7ba3FIwi0">Adalite</ExternalLink>,&nbsp;
							<ExternalLink href="https://www.youtube.com/watch?v=Q1ZJS7KvwGc">Yoroi</ExternalLink>,
							or <ExternalLink href="https://www.youtube.com/watch?v=nbYvXnfPiSM">Daedalus</ExternalLink>!
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
			</div>

		</Parallax>
	)
}

function App() {
	return (
		<div className="App">
			<Header/>
			<Hero/>

			<main>
				<div className="mainContent">
					<div className="columns is-multiline">
						<div className="column is-5-fullhd is-12-desktop is-12-tablet is-12-mobile">
							<div className="columnContent">
								<h2 className="sectionHeader">Our Mission</h2>

								<p>We strive to provide the Cardano community with the latest Cardano news, tutorials, and the information you need to grow your investment with confidence.</p>

								<p>Check out our <ExternalLink href={youtubeUrl}>Youtube channel</ExternalLink> to learn more!</p>

								<h2 className="sectionHeader aboutUsHeader">About Us</h2>

								<p>Our pool is run by two software engineers based in the United States working in the
									healthcare industry.</p>

								<p>The Aspen pool is configured with two relay nodes and a core node, and all of our
									servers are located in New York.</p>

								<div className="columns nodeInformation">
									<div className="column">
										<Card>
											<h3>Core Node</h3>
											<ul>
												<li>4 vCPUs</li>
												<li>8GB of RAM</li>
												<li>160GB SSD</li>
												<li>5TB transfer & 1Gbps bandwidth</li>
											</ul>
										</Card>
									</div>
									<div className="column">
										<Card>
											<h3>Relay Nodes</h3>
											<ul>
												<li>1 vCPUs</li>
												<li>4GB of RAM</li>
												<li>80GB SSD</li>
												<li>4TB transfer & 1Gbps bandwidth</li>
											</ul>
										</Card>
									</div>
								</div>

								<div className="poolInformation">
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
				</div>
			</main>
		</div>
	);
}

export default App;
