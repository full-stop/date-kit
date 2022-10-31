import toDate from "./utils/toDate";
import startOf from "./startOf";

/**
 * 1. 并不关心入参的两个参数大小顺序，因为总有个参数会按照指定的单位得到其起始时间与结束时间。
 * 2. 如果另一个日期在这个起始时间和结束时间范围区间之内，则说明这个日期如果按照相同的单位转换，两者的区间是相同的，因此两个日期在某个单位下相等，返回值为 true。
 * 3. (此算法的好处在于无需两个日期都按照固定的单位进行转换，以节省代码量，优化计算)
 */

function isEqual(startDate, endDate, unit) {
  const date1 = toDate(startDate);
  const date2 = toDate(endDate);
  return startOf(date1, unit) <= date2 && startOf(date1, unit, false) >= date2;
}

export default isEqual;
