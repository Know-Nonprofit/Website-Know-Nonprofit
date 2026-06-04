import tailwindcss from "@tailwindcss/vite";

export default {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-mcp"],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook-astro/framework",
    options: {},
  },
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(tailwindcss());
    return config;
  },
};
