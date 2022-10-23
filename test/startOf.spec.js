import startOf from "../src/startOf";
import endOf from "../src/endOf";
import dayjs from "dayjs";

import quarterOfYear from "dayjs/plugin/quarterOfYear";

dayjs.extend(quarterOfYear);

describe("StartOf And EndOf Unit Testing", () => {
  it("StartOf EndOf Year ... with s and upper case", () => {
    const testArr = [
      "Year",
      "year",
      "quarter",
      "YearS",
      "month",
      "day",
      "date",
      "hour",
      "minute",
      "second",
    ];
    testArr.forEach((d) => {
      expect(startOf('2022/02/01', d).valueOf()).toBe(
        dayjs('2022/02/01').startOf(d).valueOf()
      );
      expect(endOf('2022/02/01', d).valueOf()).toBe(
        dayjs('2022/02/01').endOf(d).valueOf()
      );
    });
  });

  it("StartOf EndOf Other -> no change", () => {
    expect(startOf('2022/02/01', "otherString").valueOf()).toBe(
      dayjs('2022/02/01').startOf("otherString").valueOf()
    );
    expect(endOf('2022/02/01', "otherString").valueOf()).toBe(
      dayjs('2022/02/01').endOf("otherString").valueOf()
    );
  });

  it("startOf week And endOf week", () => {
    expect(startOf("2022/10/01", "week").toLocaleDateString()).toBe(
      new Date("2022/09/26").toLocaleDateString()
    );
  });
});
