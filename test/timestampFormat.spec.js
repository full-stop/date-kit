import timestampFormat from "../src/timestampFormat";

describe("timestamp format unit testing", () => {
  it("count down", () => {
    expect(timestampFormat(86230323)).toBeInstanceOf(Object);
  });
  it("count down is 0", () => {
    expect(timestampFormat(0)).toMatchObject({"d": 0, "h": 0, "m": 0, "ms": 0, "s": 0})
  });
  it("count down is 0 too.", () => {
    expect(timestampFormat(-1000)).toMatchObject({"d": 0, "h": 0, "m": 0, "ms": 0, "s": 0});
  });
});
