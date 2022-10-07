> The package used to learn the date time related calculation algorithm (Not guaranteed to be bug free).

* **💪🏻 0 Dependencies**
* **✅ Inmutable**
* **🎯 Function First**
* **⚡️ Only supported ES6+**

---

## Installation

**In a browser**

```html
<script src="date-kit/date-kit.js"></script>
```

**Using NPM**

```bash
npm i date-kit
```

```js
import dateKit from "date-kit";
import { monthDiff } from "date-kit";
import daysInMonth from "date-kit/src/daysInMonth";

dateKit.daysInMonth(Date.now());
monthDiff("2022/10/15", "2022/10/05", true);
```

## API

* **`monthDiff(startDate, endDate, float)`** : `float` is boolean type
* **`daysInMonth(date)`**
* **`timestampFormat(timestamp)`**