export default (api) => {
  // your plugin code here
  api.modifyBabelPresetOpts(opts => {
    return {
      ...opts,
      dynamicImportNode: false,
    };
  });
};