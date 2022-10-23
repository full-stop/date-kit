import toDate from "./utils/toDate";
import get from "./utils/get";

// 一年有 12 个月 ，每 3 个月为一个季度，总共 4 个季度，月份与季度之间便建立了以 3 为倍数的关系。所以用月数除以 3，取得的余数，便是该月所处的季度。

function quarter(date) {
  const d = toDate(date);
  const { $M } = get(d);
  return Math.ceil(($M + 1) / 3);
}

export default quarter;
