import toDate from "./utils/toDate";
import pretty from "./utils/pertty";
import rounding from "./utils/rounding";
import monthDiff from "./monthDiff";
import { units } from "./constant";

function diff(date, diffDate, unit, float = false) {
  const d = toDate(date);
  const diff = toDate(diffDate);
  const u = pretty(unit);
  const diffTimestamp = d - diff;
  const diffMonth = monthDiff(d, diffDate, true);

  let result;
  switch (u) {
    case units.Y:
      result = diffMonth / 12;
      break;
    case units.M:
      result = diffMonth;
      break;
    case units.Q:
      result = diffMonth / 3;
      break;
    case units.W:
      result = diffTimestamp / (7 * 24 * 60 * 60 * 1000);
      break;
    case units.D:
      result = diffTimestamp / (24 * 60 * 60 * 1000);
      break;
    case units.H:
      result = diffTimestamp / (60 * 60 * 1000);
      break;
    case units.m:
      result = diffTimestamp / (60 * 1000);
      break;
    case units.s:
      result = diffTimestamp / 1000;
      break;
    default:
      result = diffTimestamp;
  }

  return float ? result : rounding(result);
}

export default diff;
