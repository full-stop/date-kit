import timestampFormat from "../src/timestampFormat";

describe("timestamp format unit testing", () => {
  it("count down", () => {
    expect(timestampFormat(86230323)).toMatchObject({"d": 0, "h": 23, "m": 57, "ms": 323, "s": 10});
  });
  it("count down is 0", () => {
    expect(timestampFormat(0)).toMatchObject({"d": 0, "h": 0, "m": 0, "ms": 0, "s": 0})
  });
  it("count down has negative", () => {
    expect(timestampFormat(-1000)).toMatchObject({"d": 0, "h": 0, "m": 0, "ms": 0, "s": -1});
  });
});
