// @ts-check

/**
 * A subset designed to work with Prettier.
 *
 * @param {"warn" | "error"} severity
 *
 * @returns {import("eslint-define-config").ESLintConfig}
 */
const createPrettierConfig = (severity) => {
  return {
    rules: {
      curly              : [severity, "multi-or-nest"],
      eqeqeq             : [ "error" ],
      "no-lonely-if"     : [ severity ],
      "no-useless-rename": [ severity ],
      "no-var"           : [ "error" ],
      "sort-vars"        : [ severity ],
      "spaced-comment"   : [severity, "always"],
      yoda               : [severity, "never", { onlyEquality: true }],

      /* Layout and Formatting */
      "array-bracket-spacing": [severity, "never", { singleValue: true }],
      "block-spacing"        : [severity, "always"],
      "brace-style"          : [severity, "stroustrup"],
      "dot-location"         : [severity, "property"],
      "eol-last"             : ["error", "always"],
      "jsx-quotes"           : [severity, "prefer-double"],
      "key-spacing"          : [severity,
        {
          beforeColon: false,
          afterColon : true,
          align      : {
            beforeColon: false,
            afterColon : true,
            on         : "colon",
          },
        }],
      // "linebreak-style"     : [severity, "windows"],
      "lines-around-comment": [severity,
        {
          beforeBlockComment: true,
          afterBlockComment : false,
          afterLineComment  : false,
        }],
      "newline-per-chained-call"        : [ severity ],
      "no-mixed-spaces-and-tabs"        : [ "error" ],
      // "no-extra-parens"      : [ severity ],
      "no-tabs"                         : [ "error" ],
      "nonblock-statement-body-position": [severity, "beside"],
      "object-curly-spacing"            : [severity, "always", {
        objectsInObjects: false,
      }],
      "operator-linebreak": [severity, "before"],
      semi                : ["error", "always"],
    },
  };
};

module.exports = { createPrettierConfig };
