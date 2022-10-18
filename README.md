> The package used to learn the date time related calculation algorithm (Not guaranteed to be bug free).

- **💪🏻 0 Dependencies**
- **✅ Inmutable**
- **🎯 Function First**
- **⚡️ Only supported ES6+**

---

## Installation

**In a browser**

```html
<script src="date-toolkit/date-toolkit.js"></script>
```

**Using NPM**

```bash
npm i date-toolkit
```

```js
import dateToolkit from "date-toolkit";
import { monthDiff } from "date-toolkit";
import daysInMonth from "date-toolkit/src/daysInMonth";

dateToolkit.daysInMonth(Date.now());
monthDiff("2022/10/15", "2022/10/05", true);
```

## API

- **`add(date, value, unit?)`** date increase by unit.
- **`subtract(date, value, unit?)`** date decrease by unit.
- **`startOf(date, unit?, isStartOf?)`** get start date and time.
- **`endOf(date, unit?)`** :get end date and time.
- **`diff(date, diffDate, unit?)`** : compare two dates by unit.
- **`timestampFormat(timestamp)`** : timestamp format, up to days.
- **`daysInMonth(date)`** : get days in the month.
- **`dayOfYear(date)`** : get the day of the year.
- **`monthDiff(startDate, endDate, float?)`** : `float` is boolean type.
- **`isLeapYear(date)`** : whether it is a leap year.
- **`isEqual(startDate, endDate, unit?)`** : compare whether two dates in a specific unit are equal.

## changelogs

* **v0.6.4** - compressed code and modify README.md [2022/10/18]
* **v0.6.3** - add `diff`, `subtract` methods. [2022/10/16]
* **v0.5.3** - add `add` method. [2022/10/13]
* **v0.4.3** - modify `README.md` add `changeLogs` field. [2022/10/11]
* **v0.4.2** - add `isEqual` method. [2022/10/11]
* **v0.3.2** - add `isLeapYear` method. [2022/10/09]
* **v0.2.2** - add `dayOfYear` and `startOf`,`endOf` methods. [2022/10/08] 
* **v0.1.2** - add `monthDiff` and `daysInMonth`, `timestampFormat` methods. [2022/10/07] 
* **v0.0.2** - modify package.json.[2022/10/06] 
* **v0.0.1** - inital project.[2022/10/06] 