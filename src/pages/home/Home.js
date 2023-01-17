import {Component} from "react";
import styles from './Home.module.scss';
import {YoutubeUnit} from "./units/youtube/YoutubeChannelUnit";
import {StakeUnit} from "./units/stake/StakeUnit";
import {IntroUnit} from "./units/intro/IntroUnit";
import {FooterUnit} from "./units/footer/FooterUnit";
import {HeroUnit} from "./units/hero/HeroUnit";

export class Home extends Component {
	render() {
		return (
			<section className={styles.Home}>
				<div id="home" />
				<HeroUnit/>
				<YoutubeUnit/>
				<IntroUnit/>
				<StakeUnit/>
				<FooterUnit />
			</section>
		)
	}
}
