import { reverseWords } from "./index";

describe('Rectangle', () => {
  it("the sky is blue", () => {
    expect(reverseWords("the sky is blue")).toBe("blue is sky the");
  });

  it("  hello world  ", () => {
    expect(reverseWords("  hello world  ")).toBe("world hello");
  });

  it("a good   example", () => {
    expect(reverseWords("a good   example")).toBe("example good a");
  });

});