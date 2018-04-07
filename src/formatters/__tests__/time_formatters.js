// @flow
import {
  formatRailsTimeToYYYYMMDD,
} from '../time_formatters';

describe('time_formatters', () => {
  describe('formatRailsTimeToYYYYMMDD', () => {
    it('converts 2018-03-21T12:05:59.954Z to 2018/03/21', () => {
      expect(formatRailsTimeToYYYYMMDD('2018-03-21T12:05:59.954Z')).toEqual('2018/03/21');
    });
  });
});
