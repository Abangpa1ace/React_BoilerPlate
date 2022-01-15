module.exports = {
  presets: ['@babel/env', '@babel/typescript'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.json'],
        alias: {
          '@': './',
        },
      },
    ],
  ],
};
