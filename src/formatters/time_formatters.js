// @flow

import moment from 'moment';

export function formatRailsTimeToYYYYMMDD(dateString: string) : string {
  return moment(dateString).format('YYYY/MM/DD');
}

export function formatRailsTimeToYYYYMMDDHHmm(dateString: string) : string {
  return moment(dateString).format('YYYY/MM/DD HH:mm:ss');
}
