import { defineConfig } from 'umi';
const { ModuleFederationPlugin } = require("webpack").container;
const packageJsonDeps = require('./package.json').dependencies;


function getRemoteEntryUrl(port: number) {
  return `//localhost:${port}/remoteEntry.js`
}

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // headScripts: [
  //   { src: `//localhost:${6002}/remoteEntry.js` },
  // ],
  dynamicImport:{},
  // plugins: ['./plugins/dynamicImportNode'],
  chainWebpack: function (config, { webpack }) {
    config.plugin('ModuleFederationPlugin').use(ModuleFederationPlugin, [
      {
        name: 'app1',
        remotes: {
          app2: `app2@${getRemoteEntryUrl(6002)}`,
        },
        // shared: {
        //   ...packageJsonDeps,
        //   react: {eager: true },
        //   "react-dom": { eager: true  }
        // },
      },
    ])
  },
  webpack5: {},
});
