import add from "./add";

function subtract(date, value, unit) {
  return add(date, value * -1, unit);
}

export default subtract;