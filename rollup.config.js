import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import typescript from 'rollup-plugin-typescript2';

const config = [
  {
    input: './src/index.ts',
    output: [
      { file: 'dist/js/main.min.js', format: 'esm', plugins: [terser()], sourcemap: true },
      { file: 'dist/js/main.cjs.min.js', format: 'cjs', plugins: [terser()], sourcemap: true },
    ],
    plugins: [typescript()],
  },
  {
    input: './src/types/index.d.ts',
    output: [{ file: 'dist/types.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];

export default config;
