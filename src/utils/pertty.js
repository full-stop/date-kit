import { units } from "../constant";

function pertty(unit) {
  return (
    units[unit] ||
    String(unit || "")
      .toLowerCase()
      .replace(/s$/, "")
  );
}

export default pertty;
