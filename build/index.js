import { rollup } from 'rollup';

const inputOptions = {
    input:'./index.js',
};
const outOptions = {
    file:'date-toolkit.js',
    format:'iife',
    name:'dateToolkit'
};

(async () => {
  const bundle = await rollup(inputOptions);
  await bundle.write(outOptions);
})();
