import {Component} from "react";
import styles from './Home.module.scss';
import Particles from "react-tsparticles";
import classNames from "classnames";

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
							<li>Invest with confidence.</li>
						</ul>
					</div>
					<div className={styles.callToActionButton}>
						Get started
					</div>
				</div>
			</div>
		</div>
	);
}

function IntroUnit() {
	return (
		<div className={styles.introUnit}>
			<div className={styles.introUnitInner}>
				<div className={styles.introUnitInner2}>
					<div className="columns is-gapless">
						<div className="column is-half-desktop is-full-mobile">
							<h1>Why stake with us?</h1>

							<div className={styles.benefits}>
								<h2>We have...</h2>
								<ul>
									<li>15+ years of IT experience</li>
									<li>20 years combined software development experience</li>
									<li>A passion for educating the Cardano community</li>
									<li>A YouTube channel dedicated to Cardano and cryptocurrencies</li>
									<li>The drive to succeed and help you succeed!</li>
								</ul>
							</div>

							<div className={styles.benefits}>
								<h2>You get...</h2>
								<ul>
									<li>New tutorials and cryptocurrency videos on a regular schedule</li>
									<li>Multiple delegator-oriented tools to help you make informed staking decisions</li>
									<li>A community of like-minded rational investors like yourself</li>
									<li>And most importantly, staking rewards!</li>
								</ul>
							</div>
						</div>
						<div className="column is-half-desktop is-full-mobile">
							<h1>What's our mission?</h1>

							<p>At Woodland Pools, we strive to provide you with the latest Cardano news, tutorials, and the information you need to grow your investment with confidence.</p>

							<p>Our passion lies in educating the Cardano community with information about delegation, staking rewards, exchanges, wallets, and other fundamentals. Our goal is to
								help new investors and veterans alike become more confident and continue to make sound long-term investment decisions. Furthermore, we hope to provide delegators with
								data-driven tools that will aid in making more informed choices about staking.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function StakeUnit() {
	const stakingGuideColumnClasses = classNames(styles.stakingGuideColumn, 'column', 'is-half-desktop', 'is-full-mobile');

	return (
		<div className={styles.stakeUnit}>
			<h1>Delegate</h1>

			<p>
				Delegating to a stake pool is one way that individuals such as yourself are able to easily participate in the Cardano ecosystem. When you delegate, the amount in your wallet is a representation of
				your <i>stake</i> within the network and is used to validate transactions on the blockchain.
			</p>

			<p>
				Staking your ADA is completely safe - your coins never leave your wallet, and there are no lock-in periods; you may unstake, withdraw, sell,
				or trade your staked ADA at any time. This flexibility is what gives Cardano an advantage over other proof-of-stake cryptocurrencies.
			</p>


			<div className={styles.stakingGuideContainer}>
				<h2>Where do I start?</h2>

				<div className="columns is-gapless is-multiline">
					<div className={stakingGuideColumnClasses}>
						<div>
							<h2>1</h2>
							<p>
								Download and install <a href="https://daedaluswallet.io/en/download/">Daedalus</a> <u>or</u> <a href="https://yoroi-wallet.com/#/">Yoroi</a>. These are the two major wallets that support staking.
							</p>

							<p>
								<small><a href="https://www.youtube.com/watch?v=pbZx0O4f0uw">Which wallet should I choose?</a></small>
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
								<small><a href="https://www.youtube.com/watch?v=H2iI9huNuzU&list=PL3DtqUjro7uG7O8Oy_dnBrg73Sy8AGd6n">Not sure how exchanges work?</a></small>
							</p>
						</div>
					</div>
					<div className={stakingGuideColumnClasses}>
						<div>
							<h2>3</h2>
							<p>
								In Daedalus, select the "Stake Pools" tab, or in Yoroi, select the "Delegation List" tab. Search for the <strong>ASPEN</strong> stake pool.
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
								<small>Check out our video on <a href="https://www.youtube.com/watch?v=4JT-pX-NjHQ">the delegation cycle</a> to gain a better understanding of timeframes,
								or our video on <a href="https://www.youtube.com/watch?v=jfd2Qg9ZGk0">rewards</a> to get an idea of expected reward amounts.</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export class Home extends Component {
	render() {
		return (
			<section className={styles.Home}>

				<HeroUnit />
				<IntroUnit />
				<StakeUnit />

			</section>
		)
	}
}
