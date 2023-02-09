const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-addon-designs',
    '@etchteam/storybook-addon-status',
    "storybook-addon-pseudo-states"
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src/")
    };

    return config;
  },
  "framework": "@storybook/vue",
  'features': {
    'interactionsDebugger': true,
  },
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
