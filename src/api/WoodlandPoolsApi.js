import config from '../config/config.json';

export function findPoolsByTicker(ticker) {
	return fetch(`${config.wpApiUrl}/pool/search?ticker=${ticker}`, {
		method: 'GET'
	})
		.then(response => response.json());
}

export function getPoolRewardsAndFees(poolID) {
	return fetch(`${config.wpApiUrl}/pool/rewards?poolID=${poolID}`, {
		method: 'GET'
	})
		.then(response => response.json());
}
