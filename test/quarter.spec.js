import dayjs from "dayjs";
import quarter from "../src/quarter";
import getSameMonthOfQuarter from '../src/getSameMonthOfQuarter'
import quarterOfYear from "dayjs/plugin/quarterOfYear";

dayjs.extend(quarterOfYear);

describe("Quarter Unit Testing", () => {
  it("current quarter", () => {
    expect(quarter()).toBe(dayjs().quarter());
  });

  it("quarter of date", () => {
    expect(quarter("2022/02/01")).toBe(dayjs("2022/02/28").quarter());
  });
});

describe("getSameMonthOfQuarter Method Unit Testing", () => {
  it("The second month of the same quarter", () => {
    expect(getSameMonthOfQuarter("2022/02/01", 1).valueOf()).toBe(
      dayjs("2022/02/01").quarter(1).valueOf()
    );
  });

  it("The month of the same position in the previous month", () => {
    expect(getSameMonthOfQuarter("2022/04/01", 1).valueOf()).toBe(
      dayjs("2022/04/01").quarter(1).valueOf()
    );
  });
});
