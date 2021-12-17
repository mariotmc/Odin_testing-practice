import { expect } from "@jest/globals";
import capitalize from "../code/capitalize";

test("one word string capitalized", () => {
  expect(capitalize("peter")).toBe("Peter");
});
