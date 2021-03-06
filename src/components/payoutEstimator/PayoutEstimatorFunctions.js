/**
 * @param reserve
 * @param fees
 * @param a0 - 0.3
 * @param o - min(pool_stake / total_stake, z0) = z0 for fully saturated pool
 * @param s - pledge / total_stake
 * @param z0 - 1 / k
 * @param k = 150
 * @param rho = 0.0022
 * @param tau = .05
 * R - ((reserve * rho) + fees) * (1 - tau)
 * https://docs.cardano.org/en/latest/explore-cardano/understanding-pledging-and-rewards.html
 * @returns {number}
 */
function calculateMaxPoolRewards(reserve, fees, a0, o, s, z0, k, rho, tau) {
	const R = ((reserve * rho) + fees) * (1 - tau);

	return (R / (1 + a0)) * (o + (s * a0 * ((o - (s * ((z0 - o) / z0))) / z0)));
}
