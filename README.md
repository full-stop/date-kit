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

## changelogs

* **[v0.7.4]**  - 2022/10/23
    * add `quarter` and `getSameMonthOfQuarter` methods. 
    * `startOf`、`endOf`、`add`、`subtract` supports quarter function.
* **[v0.6.4]** - 2022/10/18
    * compressed code and modify `README.md` 
* **[v0.6.3]** - 2022/10/16
    * add `diff`, `subtract` methods. 
* **[v0.5.3]** - 2022/10/13
    * add `add` method.
* **[v0.4.3]** - 2022/10/11
    * modify `README.md` add `changeLogs` field.
* **[v0.4.2]** - 2022/10/11
    * add `isEqual` method. 
* **[v0.3.2]** - 2022/10/09
    * add `isLeapYear` method.
* **[v0.2.2]** - 2022/10/08
    * add `dayOfYear` and `startOf`,`endOf` methods.
* **[v0.1.2]** - 2022/10/07
    * add `monthDiff` and `daysInMonth`, `timestampFormat` methods. 
* **[v0.0.1 - v0.0.2]** - 2022/10/06]
    * modify package.json.  
    * inital project.