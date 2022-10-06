function toDate(d) {
  // null is invalid
  if (d === null) {
    return new Date(NaN);
  }
  // undefined is today
  if (typeof d === undefined) {
    return new Date();
  }
  if (d instanceof Date) {
    return new Date(d);
  }
  //everything else
  return new Date(d);
}

export default toDate;
