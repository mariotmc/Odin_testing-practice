import { expect } from "@jest/globals";
import reverseString from "../code/reverseString";

test("one word string reversed", () => {
  expect(reverseString("peter")).toBe("retep");
});
