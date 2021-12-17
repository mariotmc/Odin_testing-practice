import { expect } from "@jest/globals";
import calculator from "../code/calculator";

test("1 + 1 = 2", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("10 - 5 = 5", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("5 * 5 = 25", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test("100 / 50 = 2", () => {
  expect(calculator.divide(100, 50)).toBe(2);
});
