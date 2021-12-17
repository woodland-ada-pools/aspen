import {Component} from "react";
import styles from './Header.module.scss';
import {ReactComponent as LogoNoText} from '../../../static/logo_no_text.svg';
import {ReactComponent as LogoText} from '../../../static/logo_text.svg';
import {ReactComponent as Tagline} from '../../../static/tagline.svg';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";

const handleDelegate = () => {
    let pool_id = '05b8a25ec4f41956a6496555c233bcbe6fc06596553ae2d14df73e20'
    let blockfrost_project_id = 'Y824jTL95pWKA2HAkDTCyCw7XkHsP7NH'
    let link = 'https://armada-alliance.com/delegation-widget?pool_id=' + pool_id + '&blockfrost_project_id=' + blockfrost_project_id
    let width = 600
    let height = Math.min(800, parseInt(window.outerHeight, 10))
    let left = (parseInt(window.outerWidth, 10) / 2) - (width / 2)
    let top = (parseInt(window.outerHeight, 10) - height) / 2
    window.open(link, 'Delegate', 'width=' + width + ',height=' + height + ',toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1,left=' + left + ',top=' + top);
}

export class Header extends Component {
    render() {
        return (
            <header className={styles.Header}>
                <div className={styles.logoContainer}>
                    <div className={styles.logoIconContainer}>
                        <LogoNoText className={styles.logoIcon}/>
                    </div>

                    <div className={styles.logoTextContainer}>
                        <LogoText className={styles.logoText}/>
                        <Tagline className={styles.tagline}/>
                    </div>
                </div>

                <div className={styles.navContainer}>
                    <nav className={styles.headerNav}>
                        <ul>
                            <li><HashLink to="/#home" smooth>HOME</HashLink></li>
                            <li><HashLink to="/#delegate" smooth>DELEGATE</HashLink></li>
                            <li><HashLink to="/#channel" smooth>CHANNEL</HashLink></li>
                            <li><Link to="/tools">TOOLS</Link></li>
                            <li>
                                <a href="https://twitter.com/WoodlandPools">
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/c/WoodlandPools">
                                    <FontAwesomeIcon icon={faYoutube}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/WoodlandPools">
                                    <FontAwesomeIcon icon={faTelegram}/>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.namiDelegateContainer}>
                        <div className={styles.delegateButton}
                             onClick={handleDelegate}
                        >
                            <div>Delegate to ASPEN</div>
                        </div>
                    </div>
                </div>

            </header>
        );
    }
}
