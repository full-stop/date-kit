import toDate from "../utils/toDate";
import get from "../utils/get";
import timestampFormat from "../timestamp/timestampFormat";

function monthDiff(a, b, float) {
  const first = toDate(a);
  const last = toDate(b);
  const $first = get(first);
  const $last = get(last);

  if ($first.$D < $last.$D) {
    return -monthDiff(b, a, float);
  }

  let adjust;
  const wholeMonthDiff =
    ($last.$Y - $first.$Y) * 12 + ($last.$M + 1 - ($first.$M + 1));
  const anchor = toDate(first);
  const anchor2 = toDate(first);

  anchor.setMonth($first.$M + wholeMonthDiff);

  if (float) {
    if (last - anchor < 0) {
      anchor2.setMonth($first.$M + (wholeMonthDiff - 1));
      adjust = (last - anchor) / (anchor - anchor2);
    } else {
      anchor2.setMonth($first.$M + (wholeMonthDiff + 1));
      adjust = (last - anchor) / (anchor2 - anchor);
    }
    return -(wholeMonthDiff + adjust) || 0;
  } else {
    const timestamp = Math.abs(last - anchor);
    return [wholeMonthDiff, timestampFormat(timestamp)];
  }
}

export default monthDiff;
