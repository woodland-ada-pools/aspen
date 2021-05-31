import styles from "./HeroUnit.module.scss";
import Particles from "react-tsparticles";
import {HashLink} from "react-router-hash-link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";

export function HeroUnit() {
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
