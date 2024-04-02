/**
 * @file format_date.js
 * Helper function that utilizes the dayjs JavaScript library to format a given Date timestamp 
 */
const dayjs = require('dayjs');

/**
 * @function format_date 
 * Formats Date timestamp to 'MM D, YYYY at HH:mm'
 * @param {*} timestamp 
 * @returns {String} formatted date
 */
function format_date(timestamp) {
	const date = new Date(timestamp);

	const month = dayjs(date).format('MMM');
	const day = dayjs(date).format('D');
	const year = dayjs(date).format('YYYY');
	const time = dayjs(date).format('HH:mm');
	const suffix = getDaySuffix(day);
				
	return `${month} ${day}${suffix}, ${year} at ${time}`
}