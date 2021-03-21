import config from '../config/config.json';

export function findPoolsByTicker(ticker) {
	return fetch(`${config.wpApiUrl}/pool/search?ticker=${ticker}`, {
		method: 'GET'
	})
		.then(response => response.json());
}
