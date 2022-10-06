import padStart from "../src/utils/padStart";
import rounding from "../src/utils/rounding";
import isValid from "../src/utils/isValid";
import toDate from "../src/utils/toDate";

describe("Utils Unit Testing", () => {
  const date = toDate();
  const dateAndString = toDate("2022/10/06");
  const dateAndNumber = toDate(Date.now());
  const dateAndUndefined = toDate(undefined);
  const dateAndNull = toDate(null);

  it("toDate", () => {
    expect(date).toBeInstanceOf(Date);
    expect(dateAndString).toBeInstanceOf(Date);
    expect(dateAndNumber).toBeInstanceOf(Date);
    expect(dateAndUndefined).toBeInstanceOf(Date);
    expect(dateAndNull.toString()).toBe("Invalid Date");
    expect(toDate("").toString()).toBe("Invalid Date");
  });

  it("Rounding", () => {
    expect(rounding(-0)).toBe(0);
    expect(rounding(-1.2)).toBe(-1);
    expect(rounding(2.2)).toBe(2);
    expect(rounding(0)).toBe(0);
  });

  it("PadStart", () => {
    expect(padStart("1", "0", 2)).toBe("01");
    expect(padStart("1", "0", 3)).toBe("001");
    expect(padStart("001", "0", 2)).toBe("001");
    expect(padStart("", "0", 2)).toBe("");
    expect(padStart("1", "*", 2)).toBe("*1");
  });
});
