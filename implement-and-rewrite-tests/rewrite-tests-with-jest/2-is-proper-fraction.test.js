import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual("false");
});

test(`should return true when denominator is more than numerator`, () => {
  expect(isProperFraction(1, 4)).toEqual("true");
});

test(`should return false when denominator is less than numerator`, () => {
  expect(isProperFraction(4, 1)).toEqual("false");
});

test(`should true when denominator and numerator are negative`, () => {
  expect(isProperFraction(-5, -2)).toEqual("true");
});