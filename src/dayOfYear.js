import { units } from "./constant";
import startOf from "./startOf";
import toDate from "./utils/toDate";

function dayOfYear(d) {
  const date = toDate(d);
  //用当前日期减去今年年初日期，得到的时间戳再转换为天数。
  //该计算方法会减去年初的第一天，所以最后还要 +1。
  return (
    Math.round((startOf(date, units.D) - startOf(date, units.Y)) / 864e5) + 1
  );
}

export default dayOfYear;
