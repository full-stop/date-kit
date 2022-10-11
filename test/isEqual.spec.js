import isEqual from "../src/isEqual";
import { units } from "../src/constant";

const startDate = "2022/10/01 21:48:30.100";
const endDate = "2022/10/01 13:48:50.900";
describe("IsEqual Unit Testing", () => {
  it("equal", () => {
    expect(isEqual(startDate, endDate, units.Y)).toBeTruthy();
    expect(isEqual(startDate, endDate, units.M)).toBeTruthy();
    expect(isEqual(startDate, endDate, units.D)).toBeTruthy();
    expect(isEqual(startDate, endDate, units.W)).toBeTruthy();
  });

  it("no equal", () => {
    expect(isEqual(startDate, endDate)).toBeFalsy();
    expect(isEqual(startDate, endDate, units.H)).toBeFalsy();
    expect(isEqual(startDate, endDate, units.m)).toBeFalsy();
    expect(isEqual(startDate, endDate, units.s)).toBeFalsy();
    expect(isEqual(startDate, endDate, units.ms)).toBeFalsy();
  });
});
