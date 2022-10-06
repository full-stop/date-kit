import padStart from "../src/utils/padStart";

describe("Utils Unit Testing", () => {
  it("PadStart", () => {
    expect(padStart("1", "0", 2)).toBe("01");
    expect(padStart("1", "0", 3)).toBe("001");
    expect(padStart("001", "0", 2)).toBe("001");
    expect(padStart("", "0", 2)).toBe("");
    expect(padStart("1", "*", 2)).toBe("*1");
  });
});
