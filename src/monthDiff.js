import toDate from "./utils/toDate";
import get from "./utils/get";
import timestampFormat from "./timestampFormat";

function monthDiff(a, b, float) {
  const first = toDate(a);
  const last = toDate(b);
  const $first = get(first);
  const $last = get(last);

  //保证小数月差的计算顺序都是从小的天数到大的天数开始计算（不然相同的两个日期，变动参数顺序就会进入不同的分支，从而导致计算的小数月差的结果不一致）。
  //因为变动了参数顺序，所以要将结果的符号取反。
  if ($first.$D < $last.$D) {
    return -monthDiff(b, a, float);
  }

  //计算整数月差
  const wholeMonthDiff =
    ($last.$Y - $first.$Y) * 12 + ($last.$M + 1 - ($first.$M + 1));
  const anchor = toDate(first);
  const anchor2 = toDate(first);

  anchor.setMonth($first.$M + wholeMonthDiff);

  // 计算小数月差
  // 计算方法参考[https://github.com/moment/moment/blob/e96809208c9d1b1bbe22d605e76985770024de42/src/lib/moment/diff.js#L54](moment - monthDiff)
  if (float) {
    let adjust;
    //如果日期天数不相等或者天数相等，但是时间不等则会进入该分支。
    //如果 last 在 [anchor-1, anchor] 区间，则该月线性天数为：(anchor - anchor2)
    if (last - anchor < 0) {
      anchor2.setMonth($first.$M + (wholeMonthDiff - 1));
      adjust = (last - anchor) / (anchor - anchor2);
    } else {
      //如果日期天数相等，且 last 的时、分、秒 大于 anchor，则会进入该分支。
      //如果 last 在 (anchor, anchor+1] 区间，则该月线性天数为：(anchor2 - anchor)
      anchor2.setMonth($first.$M + (wholeMonthDiff + 1));
      adjust = (last - anchor) / (anchor2 - anchor);
    }

    //防止 -0 的存在
    return -(wholeMonthDiff + adjust) || 0;
  } else {
    const timestamp = Math.abs(last - anchor);
    return [wholeMonthDiff, timestampFormat(timestamp)];
  }
}

export default monthDiff;
