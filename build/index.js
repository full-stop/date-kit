import { rollup } from "rollup";
import { terser } from "rollup-plugin-terser";

const inputOptions = {
  input: "./index.js",
  plugins: [terser()],
};
const outOptions = {
  file: "date-toolkit.min.js",
  format: "iife",
  name: "dateToolkit",
};

(async () => {
  const bundle = await rollup(inputOptions);
  await bundle.write(outOptions);
})();
