const { createCoreConfig } = require("./lib/core");
const { createXtendedConfig } = require("./lib/extended");

module.exports = {
  plugins: ["unicorn", "import"],
  rules  : {
    ...createXtendedConfig("warn").rules,
    ...createCoreConfig("warn").rules,
  },
};
