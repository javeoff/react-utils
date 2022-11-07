const { babel } = require('@rollup/plugin-babel');
const typescript = require('rollup-plugin-typescript2');

module.exports = () => {
  const plugins = [
    typescript({
      tsconfig: 'tsconfig.build.json',
    }),
    babel({
      extensions: ['.js', '.ts', '.tsx'],
      exclude: ['node_modules','src/tests/*.test.ts'],
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
    external: ['react'],
  };
};
