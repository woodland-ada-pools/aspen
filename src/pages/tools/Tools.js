import {Component} from "react";
import styles from './Tools.module.scss';
import classNames from "classnames";
import {PayoutCalendar} from "./payoutCalendar/PayoutCalendar";

export class Tools extends Component {
	render() {
		const navColumnClasses = classNames('column', 'is-2-desktop', styles.navColumn);

		return (
			<section className={styles.Tools}>
				<div className="columns is-gapless">
					<div className={navColumnClasses}>
						<div className={styles.navInner}>
							<div className={styles.navHeader}>
								<h2>Tools</h2>
							</div>

							<nav>
								<ul>
									<li>Payout Date Estimator</li>
									<li>Epoch Reward Estimator</li>
								</ul>
							</nav>
						</div>
					</div>
					<div className="column is-10-desktop">
						<div className={styles.toolContent}>
							<div className={styles.toolHeader}>
								<div className={styles.toolHeaderInner}>
									<h1>Payout Date Estimator</h1>
								</div>
							</div>

							<div className={styles.toolContentInner}>
								<PayoutCalendar />
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
