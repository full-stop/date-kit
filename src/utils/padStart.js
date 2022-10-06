function padStart(str, pad, length) {
  var str = String(str);
  if (!str || str.length >= length) {
    return str;
  }
  return Array(length - str.length + 1).join(pad) + str;
}

export default padStart;