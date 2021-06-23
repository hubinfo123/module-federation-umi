import { defineConfig } from 'umi';
const { ModuleFederationPlugin } = require("webpack").container;
const packageJsonDeps = require('./package.json').dependencies;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath:'//localhost:6002/',
  chainWebpack: function (config, { webpack }) {
    config.plugin('ModuleFederationPlugin').use(ModuleFederationPlugin, [
      {
        name: 'app2',
        library: { type: 'var', name: 'app2' },
        filename: 'remoteEntry.js',
        exposes: {
          './Button': './src/pages/Button',
        },
        // shared: {
        //   ...packageJsonDeps,
        //   react: {eager: true },
        //   "react-dom": { eager: true  }
        // },
      },
    ])
  },
  webpack5:{},
});
