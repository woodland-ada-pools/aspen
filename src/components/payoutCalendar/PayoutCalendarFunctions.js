const {add} = require('date-fns');

export const startEpochDate      = new Date(Date.UTC(2020, 6, 29, 21, 44, 51, 0)), //new Date('2020-07-29T21:44:51+0000'),
             startEpochTimestamp = startEpochDate.getTime(),
             startEpochNumber    = 208,
             oneDayInMillis      = 86400000,
             fiveDaysInMillis    = 432000000;

export function timestampIsOnEpochBoundary(timestamp) {
	const differenceInMillis = timestamp - startEpochTimestamp;

	return differenceInMillis % fiveDaysInMillis === 0;
}

export function dateIsOnEpochBoundary(date) {
	return timestampIsOnEpochBoundary(date.getTime());
}

export function getEpochNumber(date) {
	if (!dateIsOnEpochBoundary(date)) {
		date = findNearestEpochBoundaryFromDate(date);
	}

	return ((date.getTime() - startEpochTimestamp) / fiveDaysInMillis) + startEpochNumber;
}

export function findNearestEpochBoundaryFromDate(date) {
	date = normalizeDateToBoundary(date);

	if (dateIsOnEpochBoundary(date)) {
		return date;
	}

	for (let x = 1; x < 5; x++) {
		const nextDate = new Date(date.getTime() - (oneDayInMillis * x));

		if (timestampIsOnEpochBoundary(nextDate)) {
			console.log(`Found epoch boundary at ${nextDate.toISOString()}`, `Epoch number is ${getEpochNumber(nextDate)}`);
			return nextDate;
		}
	}
}

export function getNextFourEpochsFromDate(date) {
	date = normalizeDateToBoundary(date);

	if (!dateIsOnEpochBoundary(date)) {
		date = findNearestEpochBoundaryFromDate(date);
	}

	const epochs = [{
		date,
		number: getEpochNumber(date)
	}];

	for (let x = 0; x < 4; x++) {
		date = add(date, {
			days: 5
		});

		epochs.push({
			date:   date,
			number: getEpochNumber(date)
		});
	}

	return epochs;
}

export function findPayoutFromStakingDate(date) {
	const fiveEpochs = getNextFourEpochsFromDate(date);

	return fiveEpochs[fiveEpochs.length - 1];
}

function normalizeDateToBoundary(date) {
	const {year, month, day, hours, minutes, seconds} = {
		year:    date.getFullYear(),
		month:   date.getMonth(),
		day:     date.getDate(),
		hours:   21,
		minutes: 44,
		seconds: 51
	};

	return new Date(Date.UTC(year, month, day, hours, minutes, seconds, 0));
}
