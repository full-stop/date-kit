> The package used to learn the date time related calculation algorithm (Not guaranteed to be bug free).

* **💪🏻 0 Dependencies**
* **✅ Inmutable**
* **🎯 Function First**
* **⚡️ Only supported ES6+**
* **🎉 All browsers supported**

---

## Installation

**In a browser**

```html
<script src="dates-kit/dates-kit.js"></script>
```

**Using NPM**

```bash
npm i dates-kit
```

```js
import datesKit from "dates-kit";
import { monthDiff } from "dates-kit";
import daysInMonth from "dates-kit/src/daysInMonth";

datesKit.daysInMonth(Date.now());
monthDiff("2022/10/15", "2022/10/05", true);
```

## API

| 方法名称 | 功能 | 参数说明 | 
| :-: | :- | :-: | 
| `monthDiff(start, end, float)` | 计算两个日期的月差，可以精确到小数。 | `float`: 布尔值，默认为 false，是否返回小数月差。 |
| `daysInMonth(date)` | 返回当前日期月的总天数。 | | |
| `timestampFormat(timestamp)` | 时间戳格式化方法，返回天(d)、时(h)、分(m)、秒(s)、毫秒(ms) | | |