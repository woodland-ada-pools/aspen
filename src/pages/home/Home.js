import {Component, useEffect, useState} from "react";
import styles from './Home.module.scss';
import Particles from "react-tsparticles";
import classNames from "classnames";
import {decodeHTMLEntities} from "../../helpers/stringHelpers";
import {ExternalLink} from "../../components/common/MiscComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";
import config from "../../config/config.json";
import TimeAgo from "react-timeago/lib";
import {HashLink} from "react-router-hash-link";

function HeroUnit() {
	return (
		<div className={styles.heroUnit}>
			<div className={styles.heroParticles}>
				<Particles
					url="heroParticles.json"
					canvasClassName={styles.heroParticlesCanvas}>
				</Particles>
			</div>

			<div className={styles.heroUnitInner}>
				<div className={styles.heroUnitBg}/>

				<div className={styles.upperText}>
					ASPEN Stake Pool
				</div>

				<div className={styles.lowerText}>
					<div className={styles.lowerTextWords}>
						<ul>
							<li>Invest with confidence</li>
						</ul>
					</div>
				</div>

				<div className={styles.callToAction}>
					<div className={styles.callToActionButton}>
						<HashLink to="/#about" smooth>Get started</HashLink>
					</div>
					<div className={styles.callToActionArrow}>
						<HashLink to="/#about" smooth><FontAwesomeIcon icon={faAngleDoubleDown}/></HashLink>
					</div>
				</div>
			</div>
		</div>
	);
}

function IntroUnit() {
	return (
		<div id="about" className={styles.introUnit}>
			<div className={styles.introUnitInner}>
				<div className={styles.introUnitInner2}>
					<div className="columns is-gapless">
						<div className="column is-half-desktop is-full-mobile">
							<h1>Why stake with us?</h1>

							<div className={styles.benefits}>
								<h2>We have...</h2>
								<ul>
									<li>15+ years of IT experience and 20 years combined software development experience</li>
									<li>A passion for educating the Cardano community</li>
									<li>An informative YouTube channel dedicated to Cardano and cryptocurrencies</li>
									<li>The drive to succeed and help you succeed!</li>
								</ul>
							</div>

							<div className={styles.benefits}>
								<h2>You get...</h2>
								<ul>
									<li>New tutorials, cryptocurrency videos, and Q&A live streams on a regular schedule</li>
									<li>Multiple delegator-oriented tools to help you make informed staking decisions
									</li>
									<li>A community of like-minded rational investors like yourself</li>
									<li>And most importantly, staking rewards!</li>
								</ul>
							</div>
						</div>
						<div className="column is-half-desktop is-full-mobile">
							<h1>What's our mission?</h1>

							<p>At Woodland Pools, we strive to provide you with the latest Cardano news, tutorials, and
								the information you need to grow your investment with confidence.</p>

							<p>Our passion lies in educating the Cardano community with information about delegation,
								staking rewards, exchanges, wallets, and other fundamentals. Our goal is to
								help new investors and veterans alike become more confident and continue to make sound
								long-term investment decisions. Furthermore, we hope to provide delegators with
								data-driven tools that will aid in making more informed choices about staking.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function StakeUnit() {
	const stakingGuideColumnClasses = classNames(styles.stakingGuideColumn, 'column', 'is-half-desktop', 'is-half-tablet', 'is-full-mobile');

	return (
		<div id="delegate" className={styles.stakeUnit}>
			<h1>Delegate</h1>

			<p>
				Delegating to a stake pool is one way that individuals such as yourself are able to easily participate
				in the Cardano ecosystem. When you delegate, the amount in your wallet is a representation of
				your <i>stake</i> within the network and is used to validate transactions on the blockchain.
			</p>

			<p>
				Staking your ADA from your own wallet is completely safe - your coins never leave your wallet, and there are no lock-in
				periods; you may unstake, withdraw, sell,
				or trade your staked ADA at any time. This flexibility is what gives Cardano an advantage over other
				proof-of-stake cryptocurrencies. No matter the amount of ADA you hold, staking is <i>always</i> worth doing,
				as you gain compound interest and help the Cardano network at the same time. Read on if you'd like to stake with us!
			</p>


			<div className={styles.stakingGuideContainer}>
				<h2>Where do I start?</h2>

				<div className="columns is-gapless is-multiline">
					<div className={stakingGuideColumnClasses}>
						<div>
							<h2>1</h2>
							<p>
								Download and install <a href="https://daedaluswallet.io/en/download/">Daedalus</a> <u>or</u> <a href="https://yoroi-wallet.com/#/">Yoroi</a>. These are the two major
								wallets that support staking.
							</p>

							<p>
								<small><a href="https://www.youtube.com/watch?v=pbZx0O4f0uw">Which wallet should I
									choose?</a></small>
							</p>
						</div>
					</div>
					<div className={stakingGuideColumnClasses}>
						<div>
							<h2>2</h2>
							<p>
								Create a new wallet and fund it from the exchange where you purchased your ADA.
							</p>

							<p>
								<small><a
									href="https://www.youtube.com/watch?v=H2iI9huNuzU&list=PL3DtqUjro7uG7O8Oy_dnBrg73Sy8AGd6n">Not
									sure how exchanges work?</a></small>
							</p>
						</div>
					</div>
					<div className={stakingGuideColumnClasses}>
						<div>
							<h2>3</h2>
							<p>
								In Daedalus, select the "Stake Pools" tab, or in Yoroi, select the "Delegation List"
								tab. Search for the <strong>ASPEN</strong> stake pool.
							</p>
						</div>
					</div>
					<div className={stakingGuideColumnClasses}>
						<div>
							<h2>4</h2>
							<p>
								Click the "Delegate" button and begin earning staking rewards!
							</p>
							<p>
								<small>Check out our video on <a href="https://www.youtube.com/watch?v=4JT-pX-NjHQ">the
									delegation cycle</a> to gain a better understanding of timeframes,
									or our video on <a href="https://www.youtube.com/watch?v=jfd2Qg9ZGk0">rewards</a> to
									get an idea of expected reward amounts.</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const {youtubeUrl} = require('../../config/config.json'),
      isLikelyBot  = /bot|crawl|spider|google|baidu|bing|msn|teoma|slurp|yandex/i.test(navigator.userAgent);

function getRecentVideos() {
	if (isLikelyBot) {
		return Promise.reject();
	}

	return fetch(`${config.wpApiUrl}/yt/recent?apiKey=${config.wpApiKey}`)
		.then(response => response.json())
		.then(response => {
			return (response || [])
				.filter(item => item.id.kind === 'youtube#video');
		})
		.then(videos => {
			return videos;
		});
}

function getChannelData() {
	if (isLikelyBot) {
		return Promise.reject();
	}

	return fetch(`${config.wpApiUrl}/yt/data?apiKey=${config.wpApiKey}`)
		.then(response => response.json());
}

function YoutubeUnit() {
	const [videos, setVideos]                   = useState([]),
	      [attemptedVideos, setAttemptedVideos] = useState(false),
	      [channelData, setChannelData]         = useState({
		      statistics: {
			      subscriberCount: 1500
		      }
	      });

	useEffect(() => {
		getRecentVideos()
			.then(videos => {
				setVideos(videos);
			})
			.finally(() => {
				setAttemptedVideos(true);
			})
	}, []);

	useEffect(() => {
		getChannelData()
			.then(channelData => setChannelData(channelData));
	}, []);

	return (
		<div id="channel" className={styles.youtubeUnit}>
			<div className="columns is-mobile">
				<div
					className="column is-flex is-justify-content-center is-flex-direction-column is-narrow is-one-third-mobile">
					<img className={styles.ytChannelLogo} src="img/wp-block-logo.jpg"/>
				</div>
				<div className="column is-flex is-justify-content-center is-flex-direction-column is-two-thirds-mobile">
					<h1>Our Channel</h1>
					<div className={styles.ytSubscribers}>{channelData.statistics.subscriberCount / 1000}k subscribers</div>
				</div>
			</div>

			<div className={styles.youtubeChannel}>
				<div className="columns is-multiline">
					<div className="column is-one-third-desktop is-full-mobile">
						<iframe width="100%" height="324"
						        src="https://www.youtube-nocookie.com/embed/wF0adviOgSs"
						        frameBorder="0"
						        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						        allowFullScreen/>
					</div>
					<div className="column is-two-thirds-desktop is-full-mobile">
						{videos.length > 0 && (
							<div className="columns is-multiline is-mobile">
								{videos.map(video => (
									<div className="column is-flex is-flex-direction-column is-align-items-center">
										<div className={styles.youtubeVideoTile}>
											<a href={`https://www.youtube.com/v/${video.id.videoId}`}
											   target="_blank" rel="noreferrer noopener">
												<img src={video.snippet.thumbnails.medium.url}/>
											</a>

											<div className={styles.videoTitle}>
												<a href={`https://www.youtube.com/v/${video.id.videoId}`}
												   target="_blank" rel="noreferrer noopener">
													{decodeHTMLEntities(video.snippet.title)}
												</a>
											</div>

											<div className={styles.videoStats}>
												<span>{video.statistics.viewCount} views</span> • <TimeAgo
												date={video.snippet.publishTime}/>
											</div>
										</div>
									</div>
								))}
							</div>
						)}

						{attemptedVideos && videos.length === 0 && (
							<div className="is-flex is-justify-content-center is-flex-direction-column">
								<p>Whoops! Looks like there was a problem loading these videos. Never fear, you can
									visit our channel directly by clicking the button below!</p>

								<button className="button">
									<ExternalLink href={youtubeUrl}>
										<FontAwesomeIcon icon={faYoutube}/> Woodland Pools Channel
									</ExternalLink>
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

function FooterUnit() {
	return (
		<div className={styles.footerUnit}>
			<p>
				<strong>Disclaimer</strong>: No one associated with Woodland Pools is a financial advisor, broker, or dealer, and none of the information presented should be construed as financial advice. The information presented on our channel, website, and social media is for entertainment and informational purposes only, and all community members should independently verify and research all information when creating their own investment plans.
			</p>
		</div>
	)
}

export class Home extends Component {
	render() {
		return (
			<section className={styles.Home}>
				<div id="home" />
				<HeroUnit/>
				<IntroUnit/>
				<StakeUnit/>
				<YoutubeUnit/>
				<FooterUnit />

			</section>
		)
	}
}
