import startOf from "../src/startOf";
import endOf from "../src/endOf";
import dayjs from "dayjs";

describe("StartOf And EndOf Unit Testing", () => {
  it("StartOf EndOf Year ... with s and upper case", () => {
    const testArr = [
      "Year",
      "year",
      "YearS",
      "month",
      "day",
      "date",
      "hour",
      "minute",
      "second",
    ];
    testArr.forEach((d) => {
      expect(startOf(dayjs().valueOf(), d).valueOf()).toBe(
        dayjs().startOf(d).valueOf()
      );
      expect(endOf(dayjs().valueOf(), d).valueOf()).toBe(
        dayjs().endOf(d).valueOf()
      );
    });
  });

  it("StartOf EndOf Other -> no change", () => {
    expect(startOf(dayjs().valueOf(), "otherString").valueOf()).toBe(
      dayjs().startOf("otherString").valueOf()
    );
    expect(endOf(dayjs().valueOf(), "otherString").valueOf()).toBe(
      dayjs().endOf("otherString").valueOf()
    );
  });

  it("startOf week And endOf week", () => {
    expect(startOf("2022/10/01", "week").toLocaleDateString()).toBe(
      new Date("2022/09/26").toLocaleDateString()
    );
  });
});
