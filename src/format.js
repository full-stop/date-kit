import toDate from "./utils/toDate";
import get from "./utils/get";
import padStart from "./utils/padStart";
import { REGEXP_FORMAT, defaultFormat } from "./constant";

function getZoneStr(d) {
  //fix FF24 timezone offset value and rounding problem.
  //eg: at FF24 -59.58333333 => -59;
  const offset = Math.round(d.getTimezoneOffset() / 15) * 15;
  const absOffsetMinutes = Math.abs(offset);
  const mintues = absOffsetMinutes % 60;
  //因为已经是正数了，对于小时直接向下取整即可（效果类似与 ParseInt）。
  const hours = Math.floor(absOffsetMinutes / 60);
  return (
    (offset <= 0 ? "+" : "-") +
    padStart(hours, "0", 2) +
    ":" +
    padStart(mintues, "0", 2)
  );
}

function format(date, format) {
  const d = toDate(date);
  const formatString = format || defaultFormat;
  const { $Y, $M, $D, $H, $m, $s, $ms } = get(d);
  const zoneStr = getZoneStr(d);
  const result = {
    YYYY: String($Y),
    YY: String($Y).slice(-2),
    MM: padStart($M + 1, "0", 2),
    M: String($M + 1),
    DD: padStart($D, "0", 2),
    D: String($D),
    HH: padStart($H, "0", 2),
    H: String($H),
    hh: padStart($H % 12 || 12, "0", 2), //取模 12，可以得到 12 进制的小时
    h: String($H % 12 || 12),
    mm: padStart($m, "0", 2),
    m: String($m),
    ss: padStart($s, "0", 2),
    s: String($s),
    SSS: padStart($ms, "0", 3),
    Z: zoneStr,
  };
  return formatString.replace(REGEXP_FORMAT, (match) => result[match]);
}

export default format;
