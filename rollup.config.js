const { babel } = require('@rollup/plugin-babel');
const typescript = require('rollup-plugin-typescript2');

module.exports = () => {
  const plugins = [
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    babel({
      exclude: /node_modules/,
      extensions: ['.js', '.ts', '.tsx'],
      exclude: ['src/tests/*.test.ts'],
    }),
  ];

  return {
    input: 'src/index.ts',
    output: {
      format: 'esm',
      dir: 'dist',
      preserveModules: true,
    },
    plugins,
    external: ['react/jsx-runtime'],
  };
};
