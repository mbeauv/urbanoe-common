// @flow

import _ from 'lodash';

const UNKNOWN = 'Unknown';

/**
 * Creates a concatenated string of `name, country`.  If the state name
 * is not present, only the country is returned.  The countryName should always
 * be present.
 */
export function formatStateCountryNames(stateName: string, countryName: string) : string {
  return stateName ? `${stateName}, ${countryName}` : countryName;
}

/**
 * Prefixes the name of the street with `near`.  If the street name is not
 * provided, `Unknown` is returned.
 */
export function formatStreetName(streetName: string) : string {
  return streetName === null ? UNKNOWN : `Near ${streetName.toString()}`;
}

/**
 * Returns a rounded value for the accuracy. If the accuracy is not provided
 * the `Unknown` is returned.
 */
export function formatAccuracy(accuracy : number) : string {
  if (accuracy) {
    return _.round(accuracy).toString();
  }
  return UNKNOWN;
}

/**
 * Converts a property type name to something more suitable for reading. It
 * will remove the underscores and capitalize first letter of string.
 */
export function formatPropertyType(propertyType: string) : string {
  return _.startCase(propertyType);
}

/**
 * Converts a property value to something more suitable for reading.  It will
 * remove underscors and capitalize first letter of string.
 */
export function formatPropertyValue(propertyValue: string) : string {
  return _.startCase(propertyValue);
}

/**
 * Given an issue type value, this method will convert it to a string.  If
 * the capitalize value is true, the first letter of the type will be
 * capitalized.
 */
export function findIssueType(issueType : string, capitalize?: bool) {
  const value = issueType.replace(/_/g, ' ');
  return capitalize ? _.startCase(value) : value;
}
