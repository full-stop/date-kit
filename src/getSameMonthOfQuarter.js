import toDate from "./utils/toDate";
import get from "./utils/get";

// 该方法用于获取不同季度中同等位置索引的月份。
// 算法：用当前日期所在季度的位置索引加上一个固定的步长值（指定季度的总月数）便可以计算出指定季度中相同索引位置的月份。

function getSameMonthOfQuarter(date, quarter) {
  const d = toDate(date);
  const q = Number(quarter);
  const { $M } = get(d);

  // 3 个月为一个季度，用月份取模 3 ，便可以计算出该月所处季度的位置索引
  // 在 Date 对象中，月的取值范围为 0 ~ 11 。 模 0 表示月初、模 1 表示月中、模 2 表示月末
  const monthIndex = $M % 3;
    
  // 计算固定的步长值（指定季度的总月数），指定季度的总月数一定是指定的季度减去 1 再乘以 3，否则便会得到指定季度的下一个季度的月份，从而计算不准确。
  // 例如第一个季度的月份应该从 0 开始，第二个月份应该从 3 开始，第三个季度从 6 开始。如果不减去 1，那么第一个季度就是从 3 开始，第二个季度从 6 开始，依次类推。
  const monthsInQuarters = (q - 1) * 3;

  d.setMonth(monthIndex + monthsInQuarters)

  return d;
}

export default getSameMonthOfQuarter;
