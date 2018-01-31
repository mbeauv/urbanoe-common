import {
  formatStateCountryNames,
  formatStreetName,
  formatAccuracy,
  formatPropertyType,
  formatPropertyValue,
  findIssueType,
} from '../model_formatters';

describe('model_formatters', () => {
  describe('formatStateCountryNames', () => {
    it('returns country and state names', () => {
      expect(formatStateCountryNames('state', 'country')).toEqual('state, country');
    });

    it('returns country name when state is null', () => {
      expect(formatStateCountryNames(null, 'country')).toEqual('country');
    });
  });

  describe('formatStreetName', () => {
    it('returns street name if provided', () => {
      expect(formatStreetName('street')).toEqual('Near street');
    });

    it('returns unknown if not provided', () => {
      expect(formatStreetName(null)).toEqual('Unknown');
    });
  });

  describe('formatAccuracy', () => {
    it('returns rounded accuracy (lower bound)', () => {
      expect(formatAccuracy({ accuracy: 22.32 })).toEqual('22');
    });

    it('returns rounded accuracy', () => {
      expect(formatAccuracy({ accuracy: 22.62 })).toEqual('23');
    });

    it('returns unknown accuracy', () => {
      expect(formatAccuracy({ accuracy: null })).toEqual('Unknown');
    });
  });

  describe('formatPropertyType', () => {
    it('returns a non formatted property type', () => {
      expect(formatPropertyType('Property')).toEqual('Property');
    });

    it('returns a formatted property type', () => {
      expect(formatPropertyType('property')).toEqual('Property');
    });
  });

  describe('formatPropertyValue', () => {
    it('returns a non formatted property value', () => {
      expect(formatPropertyValue('Propertyvalue')).toEqual('Propertyvalue');
    });

    it('returns a formatted property value', () => {
      expect(formatPropertyValue('propertyValue')).toEqual('Property Value');
    });
  });

  describe('findIssueType', () => {
    it('returns a string version of issue type, capitalize false', () => {
      expect(findIssueType('pothole')).toEqual('pothole');
    });

    it('returns a string version of issue type (broken_light), capitalize false', () => {
      expect(findIssueType('broken_light')).toEqual('broken light');
    });

    it('returns a string version of issue type, capitalize true', () => {
      expect(findIssueType('pothole', true)).toEqual('Pothole');
    });

    it('returns a string version of issue type (broken_light), capitalize true', () => {
      expect(findIssueType('broken_light', true)).toEqual('Broken Light');
    });
  });
});
