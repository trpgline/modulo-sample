import {describe, expect, test} from '@jest/globals';
import { modThree } from '../src/lib/modulo';

describe("modThree FSM", () => {
  test("examples from the exercise", () => {
    expect(modThree("1101")).toBe(1); // 13 % 3 = 1
    expect(modThree("1110")).toBe(2); // 14 % 3 = 2
    expect(modThree("1111")).toBe(0); // 15 % 3 = 0
  });

  test("single bits", () => {
    expect(modThree("0")).toBe(0);
    expect(modThree("1")).toBe(1);
  });

  test("empty string -> should return error", () => {
    expect(() => modThree('')).toThrow();
  });

  test("String contain non 0/1 -> should return error", () => {
    expect(() => modThree('123456789')).toThrow();
    expect(() => modThree('ABCDEFG')).toThrow();
  });
  test("Input is not string -> should return error", () => {
    // @ts-ignore
    expect(() => modThree(101010)).toThrow();
    // @ts-ignore
    expect(() => modThree([])).toThrow();
    // @ts-ignore
    expect(() => modThree({})).toThrow();
    // @ts-ignore
    expect(() => modThree(null)).toThrow();
  });

  test("long number random sanity check equals native BigInt mod 3", () => {
    const bin = "101011001010111010001011101010111000101010111000101011"; // arbitrary
    // convert with BigInt for comparison
    const expected = Number(BigInt("0b" + bin) % BigInt(3));
    expect(modThree(bin)).toBe(expected);
  });
});
