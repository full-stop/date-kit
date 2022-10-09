import isLeapYear from "../src/isLeapYear";

describe("IsLeapYear Unit Testing", () => {
  it("is leap year", () => {
    expect(isLeapYear(new Date(2000, 1, 0, 0))).toBeTruthy();
    expect(isLeapYear(new Date(1900, 1, 0, 0))).toBeFalsy();
  });
});
