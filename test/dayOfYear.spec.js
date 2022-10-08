import dayOfYear from "../src/dayOfYear";
import endOf from "../src/endOf";
import startOf from "../src/startOf";

describe("dayOfYear Unit Testing", () => {
  it("the first day", () => {
    expect(dayOfYear(startOf(new Date(), "year"))).toBe(1);
  });

  it("281 days", () => {
    expect(dayOfYear("2022/10/08")).toBe(281);
  });

  it("the last day", () => {
    expect(dayOfYear(endOf(new Date(2022, 0, 0), "year"))).toBe(365);
  });
});
