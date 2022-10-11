import toDate from "./utils/toDate";
import startOf from "./startOf";

//如果一个日期大于等于另一个日期的起始时间又小于等于其结束时间，那么，这两个日期要么相等，要么具有相等大小的单位。
function isEqual(startDate, endDate, unit) {
  const date1 = toDate(startDate);
  const date2 = toDate(endDate);
  return startOf(date1, unit) <= date2 && startOf(date1, unit, false) >= date2;
}

export default isEqual;
