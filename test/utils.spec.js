import padStart from "../src/utils/padStart";
import rounding from "../src/utils/rounding";

describe("Utils Unit Testing", () => {
    
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
