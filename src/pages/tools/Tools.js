import styles from './Tools.module.scss';
import classNames from "classnames";
import {PayoutCalendar} from "./payoutCalendarByDate/PayoutCalendar";
import {Link, Route, Switch} from "react-router-dom";
import {EpochRewardsEstimator} from "./epochRewardsEstimator/EpochRewardsEstimator";
import {useRouteMatch, Redirect} from 'react-router-dom';
import {ReversePayoutCalendar} from "./reversePayoutCalendar/ReversePayoutCalendar";

function ToolsLandingPage() {
	const {url} = useRouteMatch();

	return (
		<div className={styles.toolsLanding}>
			<div className="tile is-ancestor">
				<div className="tile is-parent is-half">
					<div className="tile is-child box">
						<h2>Rewards Payout Date Estimator</h2>

						<p>So you've started staking, and you want to know when you'll get paid? This simple tool will give you an estimated payout date based on the date you started staking.</p>

						<Link to={`${url}/payout-date-estimator`}><button className="button is-info">Open</button></Link>
					</div>
				</div>
				<div className="tile is-parent is-half">
					<div className="tile is-child box">
						<h2>Reverse Payout Calculator</h2>

						<p>You know when rewards were paid out, but why wasn't your stake included? Use this tool to figure out when you needed to have delegated to receive rewards during a given epoch.</p>

						<Link to={`${url}/reverse-payout-calculator`}><button className="button is-info">Open</button></Link>
					</div>
				</div>
				<div className="tile is-parent is-half">
					<div className="tile is-child box">
						<h2>Epoch Rewards Estimator</h2>

						<p>Now that you know <i>when</i> you'll get paid, you might want to know approximately how much. This tool will estimate the rewards you'd receive from the selected stake pool
						with the given stake amount.</p>

						<Link to={`${url}/epoch-rewards-estimator`}><button className="button is-info">Open</button></Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export function Tools() {
	const navColumnClasses = classNames('column', 'is-2-desktop', 'is-full-mobile', styles.navColumn);

	const {path, url} = useRouteMatch();

	return (
		<section className={styles.Tools}>
			<div className="columns is-gapless is-multiline">
				<div className={navColumnClasses}>
					<div className={styles.navInner}>
						<div className={styles.navHeader}>
							<h2>Tools</h2>
						</div>

						<nav>
							<ul>
								<li><Link to={`${url}/payout-date-estimator`}>Rewards Payout Date Estimator</Link></li>
								<li><Link to={`${url}/reverse-payout-calculator`}>Reverse Payout Calculator</Link></li>
								<li><Link to={`${url}/epoch-rewards-estimator`}>Epoch Rewards Estimator</Link></li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="column is-10-desktop is-full-mobile">
					<div className={styles.toolContent}>
						<Switch>
							<Redirect from="/:url*(/+)" to={path} />

							<Route exact path={`${path}/payout-date-estimator`}>
								<div className={styles.toolHeader}>
									<div className={styles.toolHeaderInner}>
										<h1>Rewards Payout Date Estimator</h1>
									</div>
								</div>

								<div className={styles.toolContentInner}>
									<PayoutCalendar/>
								</div>
							</Route>

							<Route exact path={`${path}/reverse-payout-calculator`}>
								<div className={styles.toolHeader}>
									<div className={styles.toolHeaderInner}>
										<h1>Reverse Payout Calculator</h1>
									</div>
								</div>

								<div className={styles.toolContentInner}>
									<ReversePayoutCalendar/>
								</div>
							</Route>

							<Route exact path={`${path}/epoch-rewards-estimator`}>
								<div className={styles.toolHeader}>
									<div className={styles.toolHeaderInner}>
										<h1>Epoch Rewards Estimator</h1>
									</div>
								</div>

								<div className={styles.toolContentInner}>
									<EpochRewardsEstimator/>
								</div>
							</Route>

							<Route path={`${path}`}>
								<div className={styles.toolContentInner}>
									<ToolsLandingPage/>
								</div>
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</section>
	)
}
