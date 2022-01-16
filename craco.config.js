const CracoAlias = require('craco-alias');
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: 'tsconfig.paths.json',
        debug: false,
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
        // modifyLessRule: function () {
        //   return {
        //     test: /\.module\.less$/,
        //     exclude: /node_modules/,
        //     use: [
        //       { loader: 'style-loader' },
        //       {
        //         loader: 'css-loader',
        //         options: {
        //           modules: {
        //             localIdentName: '[local]_[hash:base64:6]',
        //           },
        //         },
        //       },
        //       { loader: 'less-loader' },
        //     ],
        //   };
        // },
      },
    },
  ],
};
