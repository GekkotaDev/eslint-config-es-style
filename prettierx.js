const { createPrettierConfig } = require("./lib/prettier");
const { createXtendedConfig } = require("./lib/extended");

module.exports = {
  plugins: ["unicorn", "import"],
  rules  : {
    ...createXtendedConfig("warn").rules,
    ...createPrettierConfig("warn").rules,
  },
};
