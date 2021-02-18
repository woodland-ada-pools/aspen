const {add, sub, set} = require('date-fns');

const startEpochDate   = new Date('2020-07-29T21:44:51+0000'),
      startEpochTimestamp = startEpochDate.getTime(),
      startEpochNumber = 208,
      fiveDaysInMillis = 432000000;

export function dateIsOnEpochBoundary(date) {
	const timestamp = date.getTime(),
	      differenceInMillis = timestamp - startEpochTimestamp;

	return differenceInMillis % fiveDaysInMillis === 0;
}

export function getEpochNumber(date) {
	if (!dateIsOnEpochBoundary(date)) {
		date = findNearestEpochBoundaryFromDate(date);
	}

	return ((date.getTime() - startEpochTimestamp) / fiveDaysInMillis) + startEpochNumber;
}

export function findNearestEpochBoundaryFromDate(date) {
	date = set(date, {
		hours:   startEpochDate.getHours()-1,
		minutes: startEpochDate.getMinutes(),
		seconds: startEpochDate.getSeconds(),
		milliseconds: 0
	});

	if (dateIsOnEpochBoundary(date)) {
		return date;
	}

	for (let x = 0; x < 5; x++) {
		date = sub(date, {
			days: 1
		});

		if (dateIsOnEpochBoundary(date)) {
			return date;
		}
	}
}

export function getNextFourEpochsFromDate(date) {
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
			date: date,
			number: getEpochNumber(date)
		});
	}

	return epochs;
}

export function findPayoutFromStakingDate(date) {
	const fiveEpochs = getNextFourEpochsFromDate(date);

	return fiveEpochs[fiveEpochs.length - 1];
}
/*

const today = new Date('2020-12-25T23:44:51+0000');

console.log(findNearestEpochBoundaryFromDate(today));

console.log(getNextFourEpochsFromDate(today));

const payoutDate = findPayoutFromStakingDate(today);

console.log('If you staked on', today, `(epoch ${getEpochNumber(today)})`, 'you will be paid on', payoutDate.date, `(epoch ${payoutDate.number})`);
*/
