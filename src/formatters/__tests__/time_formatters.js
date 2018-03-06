import {
  formatDateYYYYMMDD,
  convertEpochToDate,
} from '../time_formatters';

const TEST_DATE = new Date(2016, 2, 22);

describe('time_formatters', () => {
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
