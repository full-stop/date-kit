function get(d) {
  return {
    $Y: d.getFullYear(),
    $M: d.getMonth(),
    $D: d.getDate(),
    $W: d.getDay(),
    $H: d.getHours(),
    $m: d.getMinutes(),
    $s: d.getSeconds(),
    $ms: d.getMilliseconds(),
  };
}

export default get;
