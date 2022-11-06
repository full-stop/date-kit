import format from "../src/format";

const date = "2022/11/11 18:59:23.234";

describe("format Unit Testing", () => {
  it("YYYY/MM/DD", () => {
    expect(format(date, "YYYY/MM/DD")).toBe("2022/11/11");
  });

  it("YYYY/MM/DD HH:mm:ss", () => {
    expect(format(date, "YYYY/MM/DD HH:mm:ss")).toBe("2022/11/11 18:59:23");
  });

  it("YYYY/MM/DD HH:mm:ss.SSS", () => {
    expect(format(date, "YYYY/MM/DD HH:mm:ss.SSS")).toBe("2022/11/11 18:59:23.234");
  });

  it("YYYY/MM/DD HH:mm:ss.SSSZ", () => {
    expect(format(date, "YYYY/MM/DD HH:mm:ss.SSSZ")).toBe("2022/11/11 18:59:23.234+08:00");
  });
});
