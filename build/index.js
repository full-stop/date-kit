const rollup = require("rollup");

const inputOptions = {
    input:'./index.js',
};
const outOptions = {
    file:'dates-kit.js',
    format:'iife',
    name:'datesKit'
};

(async () => {
  const bundle = await rollup.rollup(inputOptions);
  await bundle.write(outOptions);
})();
