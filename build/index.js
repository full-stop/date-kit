import { rollup } from 'rollup';

const inputOptions = {
    input:'./index.js',
};
const outOptions = {
    file:'dates-kit.js',
    format:'iife',
    name:'datesKit'
};

(async () => {
  const bundle = await rollup(inputOptions);
  await bundle.write(outOptions);
})();
