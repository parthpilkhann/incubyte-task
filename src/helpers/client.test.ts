import { add } from "./client";

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return number when number is provided", () => {
  expect(add("2")).toBe(2);
});

test("should return the sum of two numbers", () => {
  expect(add("1,5")).toBe(6);
});
