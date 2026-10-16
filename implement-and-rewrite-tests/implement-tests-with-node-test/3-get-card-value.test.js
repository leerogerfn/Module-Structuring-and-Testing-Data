import { getCardValue } from "../implement/3-get-card-value.js";
import assert from "node:assert";
import test from "node:test";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid number card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Valid face card", () => {
  assert.equal(getCardValue("K♦"), 10);
});

test("Valid ace card", () => {
  assert.equal(getCardValue("A♥"), 11);
});

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("10"),
    /Expected a number or face followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
  assert.throws(
    () => getCardValue("♥"),
    /Expected a number or face followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
  assert.throws(
    () => getCardValue(""),
    /Expected a number or face followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
  assert.throws(
    () => getCardValue("♥10"),
    /Expected a number or face followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});

test("Invalid Rank", () => {
  assert.throws(
    () => getCardValue("12♥"),
    /Valid rank: 2-10, A, J, Q, K only/,
    "Expected clear error"
  );
});

// TODO: What other invalid card cases can you think of?
