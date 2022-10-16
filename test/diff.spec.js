import diff from "../src/diff";
import dayjs from "dayjs";

describe("diff Unite Testing", () => {
  it("diff year month quarter week date", () => {
    expect(diff("2022/10/16", "2021/10/16", "year")).toBe(
      dayjs("2022/10/16").diff("2021/10/16", "year")
    );

    expect(diff("2022/10/16", "2021/10/15", "year")).toBe(
      dayjs("2022/10/16").diff("2021/10/15", "year")
    );

    expect(diff("2022/10/16", "2021/12/01", "month")).toBe(
      dayjs("2022/10/16").diff("2021/12/01", "month")
    );

    expect(diff("2022/10/16", "2021/12/01", "quarter")).toBe(
      dayjs("2022/10/16").diff("2021/12/01", "quarter")
    );

    expect(diff("2022/10/16", "2021/12/01", "week")).toBe(
      dayjs("2022/10/16").diff("2021/12/01", "week")
    );

    expect(diff("2022/10/16", "2021/12/01", "date")).toBe(
      dayjs("2022/10/16").diff("2021/12/01", "day")
    );
  });

  it("diff hour mintue second", () => {
    expect(diff("2022/10/16 11:00:30", "2021/12/01 00:01:00", "hour")).toBe(
      dayjs("2022/10/16 11:00:30").diff("2021/12/01 00:01:00", "hour")
    );

    expect(diff("2022/10/16 11:00:30", "2021/12/01 00:01:00", "minute")).toBe(
      dayjs("2022/10/16 11:00:30").diff("2021/12/01 00:01:00", "minute")
    );

    expect(diff("2022/10/16 11:00:30", "2021/12/01 00:01:00", "second")).toBe(
      dayjs("2022/10/16 11:00:30").diff("2021/12/01 00:01:00", "second")
    );
  });
});
