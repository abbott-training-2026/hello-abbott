import { test } from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/greeting.js";

test("greets a named person", () => {
  assert.equal(greet("Abbott"), "Hello, Abbott!");
});

test("falls back when no name is given", () => {
  assert.equal(greet(""), "Hello, there!");
});
