import {round} from 'lodash';

const decodeElement = document.createElement('div');

export function decodeHTMLEntities(str) {
	if (str && typeof str === 'string') {
		// strip script/html tags
		str                       = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
		str                       = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
		decodeElement.innerHTML   = str;
		str                       = decodeElement.textContent;
		decodeElement.textContent = '';
	}

	return str;
}

export function lovelaceToAda(lovelace, roundResult = false, precision = 1) {
	const adaValue = parseFloat(lovelace) / 1000000;

	return roundResult ? round(adaValue, precision) : adaValue;
}

export function adaToLovelace(ada, roundResult = false, precision = 1) {
	const lovelaceValue = parseFloat(ada) * 1000000;

	return roundResult ? round(lovelaceValue, precision) : lovelaceValue;
}

export function formatAdaValue(adaValue, small = false) {
	const formattedNumber = parseInt(adaValue).toLocaleString();

	return <span><span className={`adaSign${small ? ' small': ''}`}>₳</span>{formattedNumber}</span>;
}
