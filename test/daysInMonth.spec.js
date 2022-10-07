import daysInMonth from "../src/daysInMonth";

describe("daysInMonth Unit Testing", () => {
  it("31days", () => {
    expect(daysInMonth("2022/10/01")).toBe(31);
  });
  it("30days", () => {
    expect(daysInMonth("2022/09/01")).toBe(30);
  });
  it("28days", () => {
    expect(daysInMonth("2022/02/01")).toBe(28);
  });
  it("29days", () => {
    expect(daysInMonth("2000/02/01")).toBe(29);
  });
});
