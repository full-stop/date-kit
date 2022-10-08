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

- **`monthDiff(startDate, endDate, float)`** : `float` is boolean type
- **`daysInMonth(date)`** : get days in the month;
- **`startOf(date, unit, isStartOf)`** get start date and time
- **`endOf(date, unit)`** :get end date and time.
- **`timestampFormat(timestamp)`** : timestamp format, up to days.
- **`dayOfYear(date)`** : get the day of the year
