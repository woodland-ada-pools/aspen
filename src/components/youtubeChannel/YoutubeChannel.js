import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {ExternalLink} from '../common/MiscComponents';
import './YoutubeChannel.scss';
import {decodeHTMLEntities} from "../../helpers/stringHelpers";
import config from '../../config/config.json';

const {youtubeUrl} = require('../../config/config.json'),
      isLikelyBot = /bot|crawl|spider|google|baidu|bing|msn|teoma|slurp|yandex/i.test(navigator.userAgent);

function getRecentVideos() {
	if (isLikelyBot) {
		return Promise.reject();
	}

	return fetch(`${config.wpApiUrl}/yt/recent?apiKey=${config.wpApiKey}`)
		.then(response => response.json())
		.then(response => {
			return (response || [])
				.filter(item => item.id.kind === 'youtube#video');
		})
		.then(videos => {
			return videos;
		});
}

export default class YoutubeChannel extends Component {
	state = {
		videos:    [],
		attempted: false
	};

	componentDidMount() {
		getRecentVideos()
			.then(videos => {
				this.setState({
					videos,
					attempted: true
				});
			});
	}

	render() {
		const {videos, attempted} = this.state;

		return (
			<>
				<h2 className="sectionHeader">Our Channel</h2>
				<div className="youtubeChannel">
					<div className="columns">
						<div className="column">
							<iframe width="100%" height="315"
							        src="https://www.youtube-nocookie.com/embed/wF0adviOgSs"
							        frameBorder="0"
							        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							        allowFullScreen/>
						</div>
						<div className="column">
							<h3>Recent Videos</h3>

							{videos.length > 0 && (
								<ul>
									{videos.map(video => (
										<li>
											<div className="columns">
												<div className="column is-narrow">
													<img src={video.snippet.thumbnails.default.url}/>
												</div>
												<div className="column">
													<div className="videoTitle">
														<a href={`https://www.youtube.com/v/${video.id.videoId}`}
														   target="_blank" rel="noreferrer noopener">
															{decodeHTMLEntities(video.snippet.title)}
														</a>
													</div>
													<div className="videoDesc">
														{decodeHTMLEntities(video.snippet.description)}
													</div>
												</div>
											</div>
										</li>
									))}
								</ul>
							)}

							{attempted && videos.length === 0 && (
								<>
									<p>Whoops! Looks like there was a problem loading these videos. Never fear, you can
										visit our channel directly by clicking the button below!</p>

									<button className="button">
										<ExternalLink href={youtubeUrl}>
											<FontAwesomeIcon icon={faYoutube}/> Woodland Pools Channel
										</ExternalLink>
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			</>
		)
	}
}
