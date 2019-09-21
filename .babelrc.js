module.exports = {
  env: {
    development: {
      presets: [
        ['@babel/env',],
      ],
      plugins: [
        ['@babel/plugin-proposal-decorators', { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        '@babel/plugin-proposal-throw-expressions',
        '@babel/plugin-proposal-optional-chaining',
      ],
    },
    production: {
      presets: [
        [
          '@babel/env',
          {
            targets: {
              browsers: ['Safari >= 9', 'iOS 10', 'IE 11', 'not IE < 11'],
            },
          },
        ],
      ],
      sourceType: 'unambiguous',
      plugins: [
        ['@babel/plugin-proposal-decorators', { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        '@babel/plugin-proposal-optional-chaining',
      ],
    },
  },
};
