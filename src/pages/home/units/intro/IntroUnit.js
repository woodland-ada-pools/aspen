import styles from "./IntroUnit.module.scss";

export function IntroUnit() {
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
									<li>A passion for educating the Cardano community</li>
									<li>A YouTube channel dedicated to Cardano Education</li>
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
									<li>And Staking rewards every 5 days 💪🏻</li>
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
