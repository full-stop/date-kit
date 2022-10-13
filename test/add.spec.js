import add from "../src/add";
import dayjs from "dayjs";

describe("Add Unit Testing", () => {
  it("add year", () => {
    expect(add("1999/02/28", 0, "year").valueOf()).toBe(
      dayjs("1999/02/28").add(0, "year").valueOf()
    );

    expect(add("1999/02/28", 1, "year").valueOf()).toBe(
      dayjs("1999/02/28").add(1, "year").valueOf()
    );

    expect(add("2000/02/29", 1, "year").valueOf()).toBe(
      dayjs("2000/02/29").add(1, "year").valueOf()
    );

    expect(add("2000/02/29", 4, "year").valueOf()).toBe(
      dayjs("2000/02/29").add(4, "year").valueOf()
    );
  });

  it("add month", () => {
    expect(add("1999/02/28", 0, "month").valueOf()).toBe(
      dayjs("1999/02/28").add(0, "month").valueOf()
    );

    expect(add("1999/02/28", 1, "month").valueOf()).toBe(
      dayjs("1999/02/28").add(1, "month").valueOf()
    );

    expect(add("1999/01/30", 1, "month").valueOf()).toBe(
      dayjs("1999/01/30").add(1, "month").valueOf()
    );

    expect(add("1999/01/31", 2, "month").valueOf()).toBe(
      dayjs("1999/01/31").add(2, "month").valueOf()
    );
  });

  it("add week", () => {
    expect(add("1999/03/01", 1, "week").valueOf()).toBe(
      dayjs("1999/03/01").add(1, "week").valueOf()
    );
  });

  it("add date", () => {
    expect(add("1999/03/01", 0, "date").valueOf()).toBe(
      dayjs("1999/03/01").add(0, "day").valueOf()
    );

    expect(add("1999/03/01", 1, "date").valueOf()).toBe(
      dayjs("1999/03/01").add(1, "day").valueOf()
    );

    expect(add("1999/02/28", 1, "date").valueOf()).toBe(
      dayjs("1999/02/28").add(1, "day").valueOf()
    );

    expect(add("2000/02/29", 1, "date").valueOf()).toBe(
      dayjs("2000/02/29").add(1, "day").valueOf()
    );
  });

  it("add hour, mintue, second", () => {
    expect(add("1999/03/01 12:30:01", 1, "hour").valueOf()).toBe(
      dayjs("1999/03/01 12:30:01").add("1", "hour").valueOf()
    );

    expect(add("1999/03/01 12:30:01", 0.5, "hour").valueOf()).toBe(
      dayjs("1999/03/01 12:30:01").add(0.5, "hour").valueOf()
    );

    expect(add("1999/03/01 12:30:01", 1, "minute").valueOf()).toBe(
      dayjs("1999/03/01 12:30:01").add(1, "minute").valueOf()
    );

    expect(add("1999/03/01 12:30:01", 1, "second").valueOf()).toBe(
      dayjs("1999/03/01 12:30:01").add(1, "second").valueOf()
    );
  });

  it("add milliseconds", () => {
    expect(add("1999/03/01 12:30:01", 500).valueOf()).toBe(
      dayjs("1999/03/01 12:30:01").add(500).valueOf()
    );
  });

  it("add time with decimal", () => {
    expect(add("1999/03/01", 0.5, "year").valueOf()).toBe(
      dayjs("1999/03/01").valueOf()
    );

    expect(add("1999/03/01", 0.1, "month").valueOf()).toBe(
      dayjs("1999/03/01").valueOf()
    );

    expect(add("1999/03/01", 0.6, "date").valueOf()).toBe(
      dayjs("1999/03/01").valueOf()
    );

    expect(add("1999/03/01", 0.9, "week").valueOf()).toBe(
      dayjs("1999/03/01")
        .add(0.9 * 7, "day")
        .valueOf()
    );
  });
});
