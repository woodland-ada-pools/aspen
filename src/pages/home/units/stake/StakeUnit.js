import classNames from "classnames";
import styles from "./StakeUnit.module.scss";

export function StakeUnit() {
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
								Download and install <a href="https://www.youtube.com/watch?v=nbYvXnfPiSM" target="_blank">Daedalus</a> <u>or</u> <a href="https://www.youtube.com/watch?v=Q1ZJS7KvwGc" target="_blank">Yoroi</a>. These are the two major
								wallets that support staking.
							</p>

							<p>
								Using a hardware wallet? Check out <a href="https://www.youtube.com/watch?v=8u7ba3FIwi0" target="_blank">AdaLite</a>!
							</p>

							<p>
								<small>
									<a href="https://www.youtube.com/watch?v=pbZx0O4f0uw" target="_blank">
										Which software wallet should I choose?
									</a>
								</small>
							</p>

							<p>
								<small>
									<a href="https://www.youtube.com/watch?v=Q_tomPEgfxE" target="_blank">
										Which hardware wallet should I buy?
									</a>
								</small>
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
								<small>
									<a href="https://www.youtube.com/watch?v=H2iI9huNuzU&list=PL3DtqUjro7uG7O8Oy_dnBrg73Sy8AGd6n" target="_blank">
										Not sure how exchanges work?
									</a>
								</small>
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
							<p>
								<small>Using AdaLite? You'll need our pool ID: </small>
								<pre>05b8a25ec4f41956a6496555c233bcbe6fc06596553ae2d14df73e20</pre>
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
								<small>Check out our video on <a href="https://www.youtube.com/watch?v=4JT-pX-NjHQ" target="_blank">the
									delegation cycle</a> to gain a better understanding of timeframes,
									or our video on <a href="https://www.youtube.com/watch?v=jfd2Qg9ZGk0" target="_blank">rewards</a> to
									get an idea of expected reward amounts.</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
