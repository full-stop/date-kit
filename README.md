> The package used to learn the date time related calculation algorithm (Not guaranteed to be bug free).

- **💪🏻 0 Dependencies**
- **✅ Inmutable**
- **🎯 Function First**
- **⚡️ Only supported ES6+**

---

## Installation

**In a browser**

```html
<script src="date-toolkit/date-toolkit.min.js"></script>
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

- **`format(date, format?)`** format date, default: `YYYY-MM-DD HH:mm:ss`.
- **`add(date, value, unit?)`** date increase by unit.
- **`subtract(date, value, unit?)`** date decrease by unit.
- **`startOf(date, unit?, isStartOf?)`** get start date and time.
- **`endOf(date, unit?)`** :get end date and time.
- **`diff(date, diffDate, unit?)`** : compare two dates by unit.
- **`timestampFormat(timestamp)`** : timestamp format, up to days.
- **`daysInMonth(date)`** : get days in the month.
- **`dayOfYear(date)`** : get the day of the year.
- **`monthDiff(startDate, endDate, float?)`** : `float` is boolean type.
- **`quarter(date?)`** : get quarter of the date. (default current date)
- **`getSameMonthQuarter(date, quarter)`** : get the month with the same position in the specified quarter.
- **`isLeapYear(date)`** : whether it is a leap year.
- **`isEqual(startDate, endDate, unit?)`** : compare whether two dates in a specific unit are equal.
