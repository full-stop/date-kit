import { units } from "./constant";
import startOf from "./startOf";
import toDate from "./utils/toDate";

function dayOfYear(d) {
  const date = toDate(d);
  return (
    Math.round((startOf(date, units.D) - startOf(date, units.Y)) / 864e5) + 1
  );
}

export default dayOfYear;
