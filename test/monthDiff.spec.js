import monthDiff from "../src/monthDiff";
import dayjs from "dayjs";

describe("month diff unit testing", () => {
  it("month diff is Number", () => {
    expect(monthDiff("2022/10/15", "2021/10/05", true)).toBe(
      dayjs("2022/10/15").diff("2021/10/05", "month", true)
    );
    expect(monthDiff("2022/10/05", "2021/10/15", true)).toBe(
      dayjs("2022/10/05").diff("2021/10/15", "month", true)
    );
    expect(monthDiff("2022/10/05 18:00:00", "2021/10/15 17:00:00", true)).toBe(
        dayjs("2022/10/05 18:00:00").diff("2021/10/15 17:00:00", "month", true)
      );
  });

  it("month diff is Object",()=>{
    expect(monthDiff("2022/10/15", "2021/10/05")).toMatchObject({"M": -12, "d": -10, "h": 0, "m": 0, "ms": 0, "s": 0})
  })
});
