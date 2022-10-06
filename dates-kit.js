var datesKit = (function (exports) {
  'use strict';

  function toDate(d) {
    // null is invalid
    if (typeof d === null) {
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

  function timeStampFormat(timestamp) {
    const ms = timestamp % 1000;
    const unix = (timestamp - ms) / 1000;
    const s = unix % 60;
    const m = ((unix - s) / 60) % 60;
    const h = (((unix - s) / 60 - m) / 60) % 24;
    const d = (((unix - s) / 60 - m) / 60 - h) / 24;

    return {
      d,
      h,
      m,
      s,
      ms,
    };
  }

  function monthDiff(a, b, float) {
    const first = toDate(a);
    const last = toDate(b);
    const $first = get(first);
    const $last = get(last);

    if ($first.$D < $last.$D) {
      return -monthDiff(b, a, float);
    }

    let adjust;
    const wholeMonthDiff =
      ($last.$Y - $first.$Y) * 12 + ($last.$M + 1 - ($first.$M + 1));
    const anchor = toDate(first);
    const anchor2 = toDate(first);

    anchor.setMonth($first.$M + wholeMonthDiff);

    if (float) {
      if (last - anchor < 0) {
        anchor2.setMonth($first.$M + (wholeMonthDiff - 1));
        adjust = (last - anchor) / (anchor - anchor2);
      } else {
        anchor2.setMonth($first.$M + (wholeMonthDiff + 1));
        adjust = (last - anchor) / (anchor2 - anchor);
      }
      return -(wholeMonthDiff + adjust) || 0;
    } else {
      return [wholeMonthDiff, timeStampFormat(Math.abs(last - anchor))];
    }
  }

  function daysInMonth(d) {
    const $d = toDate(d);
    const { $M } = get($d);
    
    // Get the last day of each month based on carry.
    // Since the value of days is 1 - 31, month should be added by 1.
    
    $d.setMonth($M + 1);
    $d.setDate(0);

    return get($d).$D;
  }

  exports.daysInMonth = daysInMonth;
  exports.monthDiff = monthDiff;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
