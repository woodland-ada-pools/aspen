export function sigFigs(n, sig) {
	if (n === 0) {
		return n;
	}

	const mult = Math.pow(10, sig - Math.floor(Math.log(n) / Math.LN10) - 1);
	return Math.round(n * mult) / mult;
}
