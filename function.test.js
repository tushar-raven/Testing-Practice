import {
  sum,
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./function";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("capitalized string", () => {
  expect(capitalize("writer")).toBe("Writer");
});

test("reversed string", () => {
  expect(reverseString("programmer")).toBe("remmargorp");
});

test("add", () => {
  expect(calculator.add(3, 4)).toBe(7);
});

test("subtract", () => {
  expect(calculator.subtract(3, 4)).toBe(-1);
});

test("multiply", () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test("divide", () => {
  expect(calculator.divide(3, 4)).toBe(0.75);
});

test("cipher", () => {
  expect(caesarCipher("Tushar")).toBe("uvtibs");
});

test("array analysis", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
