import toDate from "../src/utils/toDate";
import pertty from "../src/utils/pertty";
import { units } from "../src/constant";
import get from "../src/utils/get";
import daysInMonth from "./daysInMonth";

/**
 * 1. 年、月、日的变更基于原生 API 实现，所以不支持非整数的值（因为不同年月下的日是不同的，所以你无法限定半年是闰年的半年还是平年的半年；半个月也难确定是 15 天还是 14 天），周是例外。
 * 2. 年、月的变更涉及到日期的进位，而日的进位又不是固定的，它又会受平年、闰年、大小月的影响，所以在变更年、月时，会保留当前日，如果当前日大于变更后日期当月的最大日，则取两者最小的值。
 *    也就是说 2000 年 2月 29 日 新增一年后，就是 2001 年 2 月 28 日，不论是增加年还是月，日应该都是不变的，它理应是这个月相同的一天（月初、月末等）。
 * 3. 时、分、秒基于时间戳自动增加，所以支持小数。
 * 4. 如果不指定单位，默认增加毫秒数。
 **/

function add(date, value, unit) {
  const d = toDate(date);
  const u = pertty(unit);
  const n = Number(value);
  const { $Y, $M, $D } = get(d);

  if (u === units.Y || u === units.M || u === units.Q) {
    const method = {
      [units.Y]: ["setFullYear", $Y + n],
      [units.M]: ["setMonth", $M + n],
      [units.Q]: ["setMonth", $M + n * 3],
    }[u];

    d.setDate(1);
    d[method[0]](method[1]);
    d.setDate(Math.min($D, daysInMonth(d)));
    return d;
  } else if (u === units.D || u === units.W) {
    d.setDate($D + n * (u === units.D ? 1 : 7));
    return d;
  } else {
    const timestamp = d.getTime();
    const step =
      {
        [units.s]: 1000,
        [units.m]: 60 * 1000,
        [units.H]: 60 * 60 * 1000,
      }[u] || 1;
    return toDate(timestamp + step * n);
  }
}

export default add;
