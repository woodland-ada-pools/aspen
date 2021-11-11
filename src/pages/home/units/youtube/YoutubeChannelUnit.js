import config from '../../../../config/config.json';
import styles from "./YoutubeUnit.module.scss";
import {decodeHTMLEntities} from "../../../../helpers/stringHelpers";
import TimeAgo from "react-timeago/lib";
import {ExternalLink} from "../../../../components/common/MiscComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {useEffect, useState} from "react";

const isLikelyBot  = /bot|crawl|spider|google|baidu|bing|msn|teoma|slurp|yandex/i.test(navigator.userAgent);

function getVideos() {
	if (isLikelyBot) {
		return Promise.reject();
	}

	return fetch(`${config.wpApiUrl}/yt/videos?apiKey=${config.wpApiKey}`)
		.then(response => response.json())
		.then(response => {
			if (!!response) {
				let {top, recent} = response;

				recent = recent.filter(item => item.id?.kind === 'youtube#video');

				return {top, recent};
			} else {
				throw new Error(`Failed to load YouTube videos!`);
			}
		});
}

function getChannelData() {
	if (isLikelyBot) {
		return Promise.reject();
	}

	return fetch(`${config.wpApiUrl}/yt/data?apiKey=${config.wpApiKey}`)
		.then(response => response.json());
}

export function YoutubeUnit() {
	const [videos, setVideos]                   = useState({top: [], recent: []}),
	      [attemptedVideos, setAttemptedVideos] = useState(false),
	      [channelData, setChannelData]         = useState({
		      statistics: {
			      subscriberCount: 1500
		      }
	      });

	useEffect(() => {
		getVideos()
			.then(({top, recent}) => {
				setVideos(({top, recent}));
			})
			.finally(() => {
				setAttemptedVideos(true);
			})
	}, []);

	useEffect(() => {
		getChannelData()
			.then(channelData => setChannelData(channelData));
	}, []);

	return (
		<div id="channel" className={styles.youtubeUnit}>
			<div className="columns is-mobile">
				<div
					className="column is-flex is-justify-content-center is-flex-direction-column is-narrow is-one-third-mobile">
					<img className={styles.ytChannelLogo} src="img/wp-block-logo.jpg"/>
				</div>
				<div className="column is-flex is-justify-content-center is-flex-direction-column is-two-thirds-mobile">
					<h1>Our Channel</h1>
					<div className={styles.ytSubscribers}>{channelData.statistics.subscriberCount / 1000}k subscribers</div>
				</div>
			</div>

			<div className={styles.youtubeChannel}>
				<div className="columns is-multiline">
					{videos.recent.length > 0 && (
						<div className="column is-one-third-desktop is-full-mobile">
							<iframe width="100%" height="315"
							        src={`https://www.youtube-nocookie.com/embed/${videos.recent[0].id.videoId}`}
							        frameBorder="0"
							        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							        allowFullScreen/>
						</div>
					)}
					<div className="column is-two-thirds-desktop is-full-mobile">
						{videos.top.length > 0 && (
							<div className="columns is-multiline is-mobile">
								{videos.top.map(video => (
									<div className={`column is-flex is-flex-direction-column is-align-items-center ${styles.videoTileColumn}`}>
										<div className={styles.youtubeVideoTile}>
											<a href={`https://www.youtube.com/v/${video.id.videoId}`}
											   target="_blank" rel="noreferrer noopener">
												<img src={video.snippet.thumbnails.medium.url}/>
											</a>

											<div className={styles.videoTitle}>
												<a href={`https://www.youtube.com/v/${video.id.videoId}`}
												   target="_blank" rel="noreferrer noopener">
													{decodeHTMLEntities(video.snippet.title)}
												</a>
											</div>

											<div className={styles.videoStats}>
												<span>{video.statistics.viewCount.toLocaleString()} views</span> • <TimeAgo
												date={video.snippet.publishTime}/>
											</div>
										</div>
									</div>
								))}
							</div>
						)}

						{attemptedVideos && videos.top.length === 0 && (
							<div className="is-flex is-justify-content-center is-flex-direction-column">
								<p>Whoops! Looks like there was a problem loading these videos. Never fear, you can
									visit our channel directly by clicking the button below!</p>

								<button className="button">
									<ExternalLink href={config.youtubeUrl}>
										<FontAwesomeIcon icon={faYoutube}/> Woodland Pools Channel
									</ExternalLink>
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
