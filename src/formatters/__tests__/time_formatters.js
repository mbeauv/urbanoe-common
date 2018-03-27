// @flow

import {
  formatDateYYYYMMDD,
  formatRailsTimeToYYYYMMDD,
  formatRailsTimeToYYYYMMDDHHmm,
  convertEpochToDate,
} from '../time_formatters';

const TEST_DATE = new Date(2016, 2, 22);

describe('time_formatters', () => {
  describe('formatRailsTimeToYYYYMMDD', () => {
    it('converts 2018-03-21T12:05:59.954Z to 2018/03/21', () => {
      expect(formatRailsTimeToYYYYMMDD('2018-03-21T12:05:59.954Z')).toEqual('2018/03/21');
    });
  });

  describe('formatRailsTimeToYYYYMMDDHHmm', () => {
    it('converts 2018-03-21T12:05:59.954Z to 2018/03/21 12:05:59', () => {
      expect(formatRailsTimeToYYYYMMDDHHmm('2018-03-21T12:05:59.954Z')).toEqual('2018/03/21 08:05:59');
    });
  });

  describe('formatDateYYYYMMDD', () => {
    it('returns formatted date string', () => {
      expect(formatDateYYYYMMDD(TEST_DATE)).toEqual('2016/03/22');
    });
  });

  describe('convertEpochToDate', () => {
    it('returns date for epoch', () => {
      expect(convertEpochToDate(1517173252000)).toEqual(new Date('January 28, 2018 21:00:52Z'));
    });
  });
});
