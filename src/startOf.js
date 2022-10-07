import get from "./utils/get";
import toDate from "./utils/toDate";
import pertty from "./utils/pertty";
import { units } from "./constant";

function startOf(d, u, isStartOf = true) {
  const unit = pertty(u);
  const date = toDate(d);
  const { $Y, $D, $M, $W } = get(date);

  const setInstanceDate = (m, d) => {
    const cloneDate = toDate(new Date($Y, m, d));
    return isStartOf ? cloneDate : startOf(cloneDate, units.D, false);
  };

  const setInstanceTime = (method, sliceIndex) => {
    const startOfValues = [0, 0, 0, 0];
    const endOfValues = [23, 59, 59, 999];
    const cloneDate = toDate(date);

    cloneDate[method].apply(
      cloneDate,
      (isStartOf ? startOfValues : endOfValues).slice(sliceIndex)
    );

    return cloneDate;
  };

  switch (unit) {
    case units.Y:
      return isStartOf ? setInstanceDate(0, 1) : setInstanceDate(11, 31);
    case units.M:
      return isStartOf ? setInstanceDate($M, 1) : setInstanceDate($M + 1, 0);
    case units.W:
      return isStartOf
        ? setInstanceDate($M, $D - ($W - 1))
        : setInstanceDate($M, $D + (7 - $W));
    case units.D:
    case units.d:
      return setInstanceTime("setHours", 0);
    case units.H:
      return setInstanceTime("setMinutes", 1);
    case units.m:
      return setInstanceTime("setSeconds", 2);
    case units.s:
      return setInstanceTime("setMilliseconds", 3);
    default:
      return toDate(date);
  }
}

export default startOf;
