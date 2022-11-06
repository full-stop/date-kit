export const Invalid = "Invalid Date";

export const units = {
  Y: "year",
  Q: "quarter",
  M: "month",
  d: "day",
  D: "date",
  W: "week",
  H: "hour",
  m: "minute",
  s: "second",
  ms: "millisecond",
};

export const defaultFormat = "YYYY-MM-DD HH:mm:ss";
export const REGEXP_FORMAT =
  /Y{2,4}|M{1,2}|D{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|Z{1,2}/g;
