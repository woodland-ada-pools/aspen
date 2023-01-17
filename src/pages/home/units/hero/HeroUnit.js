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
                <div className={styles.upperText}>
                    ASPEN Stake Pool
                </div>

                <div className={styles.lowerText}>
                    <div className={styles.lowerTextWords}>
                        Invest with confidence
                    </div>
                </div>
            </div>
        </div>
    );
}
