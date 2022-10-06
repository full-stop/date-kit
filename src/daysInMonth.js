import get from "./utils/get";
import toDate from "./utils/toDate";

function daysInMonth(d) {
  const $d = toDate(d);
  const { $M } = get($d);
  
  // Get the last day of each month based on carry.
  // Since the value of days is 1 - 31, month should be added by 1.
  
  $d.setMonth($M + 1);
  $d.setDate(0);

  return get($d).$D;
}

export default daysInMonth;
