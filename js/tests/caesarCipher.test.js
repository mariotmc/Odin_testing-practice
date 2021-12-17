import { expect } from "@jest/globals";
import caesarCipher from "../code/caesarCipher";

test("alphabet shift", () => {
  expect(caesarCipher("SERR CVMMN!")).toBe("FREE PIZZA!");
});
