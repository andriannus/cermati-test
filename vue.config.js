module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        const [arg] = args;
        arg.title = 'Cermati Test';

        return args;
      });

    config.plugin('preload')
      .tap((args) => {
        const [arg] = args;
        arg.rel = 'preload';
        arg.include = 'all';

        return args;
      });
  },
};
