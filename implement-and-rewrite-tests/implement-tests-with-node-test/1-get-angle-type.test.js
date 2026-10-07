import {getAngleType} from '../implement/1-get-angle-type.js';
import assert from "node:assert";
import test from "node:test";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies acute angle", () => {
  assert.equal(getAngleType(45), "acute angle");
});

test("Classifies right angle", () => {
  assert.equal(getAngleType(90), "right angle");
});

test("Classifies obtuse angle", () => {
  assert.equal(getAngleType(120), "obtuse angle");
});

test("Classifies straight angle", () => {
  assert.equal(getAngleType(180), "straight angle");
});

test("Classifies reflex angle", () => {
  assert.equal(getAngleType(200), "reflex angle");
});

test("Classifies boundary and invalid angles", () => {
  assert.equal(getAngleType(365), "invalid angle");
  assert.equal(getAngleType(-10), "invalid angle");
});

