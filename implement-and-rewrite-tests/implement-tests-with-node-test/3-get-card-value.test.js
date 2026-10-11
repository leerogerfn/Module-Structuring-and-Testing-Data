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
    () => getCardValue("invalid"),
    /Expected a number followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});

// TODO: What other invalid card cases can you think of?
