import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const config = [
  {
    input: './out-tsc/src/index.js',
    output: [
      { file: 'dist/js/main.min.js', format: 'esm', plugins: [terser()], sourcemap: true },
      { file: 'dist/js/main.cjs.min.js', format: 'cjs', plugins: [terser()], sourcemap: true },
    ],
    plugins: [sourcemaps(), nodeResolve()],
  },
  {
    input: './src/types/index.d.ts',
    output: [{ file: 'dist/types.d.ts', format: 'esm' }],
    plugins: [dts(), nodeResolve()],
  },
];

export default config;
