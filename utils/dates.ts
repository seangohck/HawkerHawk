import { HawkerAPIRecord } from '@interfaces/hawkerCentre';

type Quarter = 1 | 2 | 3 | 4;
const dayInMS = 86400000;

/**
 * Gets the current quarter
 *
 * @returns {Number} - The current quarter
 */
const getQuarter = (): Quarter => {
	const today = new Date();
	const quarter = Math.floor((today.getMonth() + 3) / 3) as Quarter;

	return quarter;
};

/**
 *
 * Gets the closed date of a hawker centre in the current quarter
 *
 * @param {HawkerAPIRercord} hawkerCentre - The hawker center to check for
 * @param {Number} quarter - The quarter to check for
 * @returns - The closed dates and any remarks
 */
const getClosedDates = (hawkerCentre: HawkerAPIRecord, quarter: Quarter) => {
	const cleaningStartDate = hawkerCentre[`q${quarter}_cleaningstartdate`];
	const cleaningEndDate = hawkerCentre[`q${quarter}_cleaningenddate`];
	const remarksCleaning = hawkerCentre[`remarks_q${quarter}`];
	const worksStartDate = hawkerCentre['other_works_startdate'];
	const worksEndDate = hawkerCentre['other_works_enddate'];
	const worksRemarks = hawkerCentre['remarks_other_works'];

	return { cleaningEndDate, cleaningStartDate, remarksCleaning, worksStartDate, worksEndDate, worksRemarks };
};

/**
 * Formats a date from ddmmyy to Date Objec
 *
 * @param {string} dateString
 * @returns {Date} - The formatted date
 */
const formatDate = (dateString: string): Date => {
	const [date, month, year] = dateString.split('/');
	const dateObject = new Date(+year, +month - 1, +date);
	return dateObject;
};

/**
 * Checks whether the current date is between the two given dates
 *
 * @param {string} cleaningStartDate
 * @param {string} cleaningEndDate
 * @returns {boolean} - whether the date is between
 */
const dateBetween = (cleaningStartDate: string, cleaningEndDate: string): boolean => {
	const todayTime = new Date().getTime();
	const startTime = formatDate(cleaningStartDate).getTime();
	const endTime = formatDate(cleaningEndDate).getTime() + dayInMS - 1;

	return todayTime >= startTime && todayTime <= endTime;
};

/**
 * Checks if a hawker centre is open
 *
 * @param {HawkerAPIRecord} hawkerCentre - The hawker centre to check for
 * @param {Number} quarter - The quarter to check for
 * @returns - The open status and remarks if it exists
 */
const isCentreOpen = (hawkerCentre: HawkerAPIRecord, quarter: Quarter) => {
	const { cleaningStartDate, cleaningEndDate, remarksCleaning, worksStartDate, worksEndDate, worksRemarks } = getClosedDates(hawkerCentre, quarter);

	if (dateBetween(cleaningStartDate, cleaningEndDate)) {
		return { open: false, remarks: `${remarksCleaning} from ${cleaningStartDate} to ${cleaningEndDate}` };
	}

	if (dateBetween(worksStartDate, worksEndDate)) {
		return { open: false, remarks: `${worksRemarks} from ${worksStartDate} to ${worksEndDate}` };
	}

	return { open: true };
};

export { getQuarter, isCentreOpen };
