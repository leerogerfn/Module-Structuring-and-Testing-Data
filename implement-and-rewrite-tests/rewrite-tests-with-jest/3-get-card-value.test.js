import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
test(`Should return 7 when given an seven card`, () => {
  expect(getCardValue("7♥")).toEqual(7);
});
//   Face Cards (J, Q, K)
test(`Should return 10 when given J/Q/K`, () => {
  expect(getCardValue("J♦")).toEqual(10);
  expect(getCardValue("Q♣")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
});
//   Invalid Cards
test(`Expected a number followed by a suit, but got invalid`, () => {
  expect(() => getCardValue("10")).toThrow(
    `Expected a number or face followed by a suit, but got "invalid"`
  );
});

test(`Expected a number followed by a suit, but got invalid`, () => {
  expect(() => getCardValue("")).toThrow(
    `Expected a number or face followed by a suit, but got "invalid"`
  );
});

test(`Expected a number followed by a suit, but got invalid`, () => {
  expect(() => getCardValue("♥")).toThrow(
    `Expected a number or face followed by a suit, but got "invalid"`
  );
});

test(`Expected a number followed by a suit, but got invalid`, () => {
  expect(() => getCardValue("♥10")).toThrow(
    `Expected a number or face followed by a suit, but got "invalid"`
  );
});

test(`Valid rank: 2-10, A, J, Q, K only`, () => {
  expect(() => getCardValue("12♥")).toThrow(
    `Valid rank: 2-10, A, J, Q, K only`
  );
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
