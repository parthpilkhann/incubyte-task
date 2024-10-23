import { add } from "./client";

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});
