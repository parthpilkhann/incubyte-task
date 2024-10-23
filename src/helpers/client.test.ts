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

test("should return the sum of multiple numbers", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});

test("should handle new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("should support different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("should throw an error when negative numbers are provided", () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});
