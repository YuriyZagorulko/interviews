import { findBiggestRectangle } from ".";

describe('Rectangle', () => {
  it("last image case", () => {
    expect(findBiggestRectangle([80, 20], [35])).toBe(2100);
  });

  it("custom case 1", () => {
    expect(findBiggestRectangle([80, 20], [35, 55])).toBe(2100);
  });

  it("custom case 2", () => {
    expect(findBiggestRectangle([80, 20], [35, 15])).toBe(2100);
  });

  it("second image case", () => {
    expect(findBiggestRectangle([], [35])).toBe(3500);
  });
});