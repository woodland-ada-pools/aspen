import {Component} from "react";
import styles from './Header.module.scss';
import {ReactComponent as LogoNoText} from '../../../static/logo_no_text.svg';
import {ReactComponent as LogoText} from '../../../static/logo_text.svg';
import {ReactComponent as Tagline} from '../../../static/tagline.svg';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

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
							<li><HashLink to="/#home" smooth>HOME</HashLink></li>
							<li><HashLink to="/#delegate" smooth>DELEGATE</HashLink></li>
							<li><HashLink to="/#channel" smooth>CHANNEL</HashLink></li>
							<li><Link to="/tools">TOOLS</Link></li>
							<li><Link to="/faq">FAQs</Link></li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}
