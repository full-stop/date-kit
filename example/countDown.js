import timestampFormat from "../src/timestampFormat.js";

var endDate = new Date(Date.now() + 87912000);

function countDown(end) {
  var now = Date.now();
  var endDate = new Date(end);
  var leftTimestamp = endDate - now;

  return leftTimestamp > 0 ? timestampFormat(leftTimestamp) : null;
}

var stop = setInterval(() => {
  const result = countDown(endDate);
  if (!result) {
    console.log("倒计时结束！");
    clearInterval(stop);
  } else {
    const { d, h, m, s, ms } = result || {};
    console.log(`${d}天、${h}小时、${m}分、${s}秒、${ms}毫秒`);
  }
}, 250);
