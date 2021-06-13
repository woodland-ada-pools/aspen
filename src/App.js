import './App.scss';
import {Component} from "react/cjs/react.production.min";
import {Header} from "./components/common/header/Header";
import {Home} from "./pages/home/Home";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {Tools} from "./pages/tools/Tools";

/*function Header() {
	return (
		<header>
			<div className="columns">
				<div className="column logoColumn">
					<Logo/>
				</div>
				<div className="column logoTextColumn">
					<LogoText/>
				</div>
				<div className="column socialColumn is-hidden-mobile">
					<div className="columns">
						<div className="column youtube">
							<ExternalLink href={youtubeUrl}>
								<FontAwesomeIcon icon={faYoutube}/>
							</ExternalLink>
						</div>
						<div className="column twitter">
							<ExternalLink href={twitterUrl}>
								<FontAwesomeIcon icon={faTwitter}/>
							</ExternalLink>
						</div>
					</div>
				</div>
			</div>

			<div className="mobileSocial is-hidden-tablet is-hidden-desktop is-hidden-fullhd">
				<div className="columns">
					<div className="column youtube">
						<ExternalLink href={youtubeUrl}>
							<FontAwesomeIcon icon={faYoutube}/>
						</ExternalLink>
					</div>
					<div className="column twitter">
						<ExternalLink href={twitterUrl}>
							<FontAwesomeIcon icon={faTwitter}/>
						</ExternalLink>
					</div>
				</div>
			</div>
		</header>
	)
}*/

function Footer() {
	return (
		<footer>
			<p>
				<strong>Disclaimer</strong>: No one associated with Woodland Pools is a financial advisor, broker, or
				dealer, and none of the information presented should be construed as financial advice.
				The information presented on our channel, website, and social media is for entertainment and
				informational purposes only, and all community members should
				independently verify and research all information when creating their own investment plans.
			</p>
		</footer>
	)
}

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<main>
						<div className="mainContentWrapper">
							<Header/>

							<Switch>
								<Route path="/tools">
									<Tools />
								</Route>

								<Route path="/">
									<Home />
								</Route>
							</Switch>
						</div>
					</main>
				</div>
			</Router>
		);
	}
}

export default App;
