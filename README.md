> The package used to learn the date time related calculation algorithm (no bug is guaranteed).

* 💪🏻 0 Dependencies.
* 🎯 Function First.
* ✅ Inmutable.
* 🎉 All browsers supported.
* ⚡️ Only supported ES6+

---

## Installation

**In a browser**

```html
<script src="ates-kit/dates-kit.js"></script>
```

**Using NPM**

```bash
npm i dates-kit
```

```js
import datesKit from "dates-kit";
import { monthDiff } from "dates-kit/monthDiff";
import { daysInMonth } from "dates-kit/daysInMonth";

datesKit.daysInMonth(Date.now());
monthDiff("2022/10/15", "2022/10/05", true);
```

## API

- `monthDiff(a, b, float)`;
- `daysInMonth(a)`;
