import { rollup } from 'rollup';

const inputOptions = {
    input:'./index.js',
};
const outOptions = {
    file:'date-kit.js',
    format:'iife',
    name:'dateKit'
};

(async () => {
  const bundle = await rollup(inputOptions);
  await bundle.write(outOptions);
})();
