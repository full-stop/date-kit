import startOf from "./startOf";
function endOf(d, unit) {
  return startOf(d, unit, false);
}
export default endOf;
