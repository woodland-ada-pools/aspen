import './App.scss';
import {Background, Parallax} from "react-parallax";
import {Component} from "react/cjs/react.production.min";
import LogoSvg from './static/logo_no_text.svg';
import LogoTextSvg from './static/logo_text.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-regular-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'

function getRecentVideos() {
	const apiKey = 'AIzaSyD1qVHQsFzoKHFjTchBZ0Kr1aPSI4Mr2pk';

	return fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UCuJTfA0vHfG3Fy4_VtFrpYw&part=snippet,id&order=date&maxResults=3`)
		.then(response => response.json())
		.then(response => {
			return (response.items || [])
				.filter(item => item.id.kind === 'youtube#video');
		})
		.then(videos => {
			return videos;
		});
}

function ExternalLink({href, children}) {
	return (
		<span className="externalLink">
			<a href={href} rel="noreferrer noopener" target="_blank">
				{children}
			</a>
		</span>
	)
}

function Card({children}) {
	return (
		<div className="card">
			<div className="card-content">
				{children}
			</div>
		</div>
	)
}

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
			</div>
		</header>
	)
}

class PoolID extends Component {
	poolID = 'pool1qku2yhky7sv4dfjfv42uyvauhehuqevk25aw952d7ulzqzx3jcu';

	state = {
		copied: false
	}

	onCopy() {
		this.setState({copied: true});

		setTimeout(() => this.setState({copied: false}), 7000);
	}

	render() {
		const {copied} = this.state;

		return <span className={`poolID ${copied ? 'copied' : ''}`}>
			<CopyToClipboard text={this.poolID}
			                 onCopy={() => this.onCopy()}>
				<span>
					{this.poolID}

					<span className="copyPoolID">
						{copied ? <span className="copied">Copied!</span> : <FontAwesomeIcon icon={faCopy}/>}
					</span>
				</span>
			</CopyToClipboard>
		</span>
	}
}

function Hero() {
	return (
		<Parallax strength={300}>
			<Background className="hero" blue={{min: 1, max: 3}}>
				<img src="img/background.png"/>
			</Background>
			<div className="heroDelegationInfo">
				<h2>Curious about staking?</h2>

				<p>Not sure where to begin? Have a look at our series of videos on staking with <ExternalLink
					href="https://www.youtube.com/watch?v=8u7ba3FIwi0">Adalite</ExternalLink>,&nbsp;
					<ExternalLink href="https://www.youtube.com/watch?v=Q1ZJS7KvwGc">Yoroi</ExternalLink>,
					or <ExternalLink href="https://www.youtube.com/watch?v=nbYvXnfPiSM">Daedalus</ExternalLink>!</p>

				<p>
					Feel free to check us out on <ExternalLink
					href="https://pooltool.io/pool/05b8a25ec4f41956a6496555c233bcbe6fc06596553ae2d14df73e20">PoolTool.io</ExternalLink> or <ExternalLink
					href="https://adapools.org/pool/05b8a25ec4f41956a6496555c233bcbe6fc06596553ae2d14df73e20">ADApools.org</ExternalLink> for more detailed information about our stake pool.
				</p>

				<div className="poolIDWrapper">
					Ready to get started? You'll need our pool ID! <PoolID/>
				</div>
			</div>
		</Parallax>
	)
}

function Bullet() {
	return (
		<img className="bullet" src="img/bullet.png" />
	)
}

class YoutubeChannel extends Component {
	state = {
		videos: [],
		attempted: false
	};

	componentDidMount() {
		getRecentVideos()
			.then(videos => {
				this.setState({
					videos,
					attempted: true
				});
			});
	}

	render() {
		const {videos, attempted} = this.state;

		return (
			<>
				<h2><Bullet />Our Channel</h2>

				<div className="ytChannelInfo">
					<div className="columns">
						<div className="column">
							<iframe width="100%" height="315"
							        src="https://www.youtube-nocookie.com/embed/o-kZHX7JRGw"
							        frameBorder="0"
							        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							        allowFullScreen/>
						</div>
						<div className="column">
							<h3>Recent Videos</h3>

							{videos.length > 0 && (
								<ul>
									{videos.map(video => (
										<li>
											<div className="columns">
												<div className="column is-narrow">
													<img src={video.snippet.thumbnails.default.url}/>
												</div>
												<div className="column">
													<div className="videoTitle">
														<a href={`https://www.youtube.com/v/${video.id.videoId}`}
														   target="_blank" rel="noreferrer noopener">
															{video.snippet.title}
														</a>
													</div>
													<div className="videoDesc">
														{video.snippet.description}
													</div>
												</div>
											</div>
										</li>
									))}
								</ul>
							)}

							{attempted && videos.length === 0 && (
								<>
									<p>Whoops! Looks like there was a problem loading these videos. Never fear, you can visit our channel directly by clicking the button below!</p>

									<button className="button">
										<ExternalLink href="https://www.youtube.com/channel/UCuJTfA0vHfG3Fy4_VtFrpYw">
											<FontAwesomeIcon icon={faYoutube}/> Woodland Pools Channel
										</ExternalLink>
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			</>
		)
	}
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
								<h2><Bullet />About Us</h2>

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
