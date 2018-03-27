// @flow

import moment from 'moment';

/**
 * Converts an epoch value to a Date object.
 */
export function convertEpochToDate(epoch: number) : Date {
  return new Date(epoch);
}

/**
 * Converts a Date object to a `YYYY/MM/DD` form.  For example, March 2 2016
 * would be expressed as `2016/03/02`.
 */
export function formatDateYYYYMMDD(date: Date) : string {
  return moment(date).format('YYYY/MM/DD');
}

export function formatRailsTimeToYYYYMMDD(dateString: string) : string {
  return moment(dateString).format('YYYY/MM/DD');
}

export function formatRailsTimeToYYYYMMDDHHmm(dateString: string) : string {
  return moment(dateString).format('YYYY/MM/DD HH:mm:ss');
}
