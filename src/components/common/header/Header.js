import {Component} from "react";
import styles from './Header.module.scss';
import {ReactComponent as LogoNoText} from '../../../static/logo_no_text.svg';
import {ReactComponent as LogoText} from '../../../static/logo_text.svg';
import {ReactComponent as Tagline} from '../../../static/tagline.svg';

export class Header extends Component {
	render() {
		return (
			<header className={styles.Header}>
				<div className={styles.logoContainer}>
					<div className={styles.logoIconContainer}>
						<LogoNoText className={styles.logoIcon} />
					</div>

					<div className={styles.logoTextContainer}>
						<LogoText className={styles.logoText} />
						<Tagline className={styles.tagline} />
					</div>
				</div>

				<div className={styles.navContainer}>
					<nav className={styles.headerNav}>
						<ul>
							<li>HOME</li>
							<li>TOOLS</li>
							<li>DELEGATE</li>
							<li>FAQs</li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}
