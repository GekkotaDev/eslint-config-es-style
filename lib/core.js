// @ts-check

/**
 * @param {"warn" | "error"} severity
 *
 * @returns {import("eslint-define-config").ESLintConfig}
 */
const createCoreConfig = (severity) => {
  return {
    rules: {
      curly              : [severity, "multi-or-nest"],
      eqeqeq             : [ "error" ],
      "no-extra-semi"    : [ severity ],
      "no-lonely-if"     : [ severity ],
      "no-useless-rename": [ severity ],
      "no-var"           : [ "error" ],
      "sort-vars"        : [ severity ],
      "spaced-comment"   : [severity, "always"],
      yoda               : [severity, "never", { onlyEquality: true }],

      /* Layout and Formatting */
      "array-bracket-newline"         : [severity, "consistent"],
      "array-bracket-spacing"         : [severity, "never", { singleValue: true }],
      "array-element-newline"         : [severity, { multiline: true }],
      "arrow-spacing"                 : [severity, { before: true, after: true }],
      "block-spacing"                 : [severity, "always"],
      "brace-style"                   : [severity, "stroustrup"],
      "comma-dangle"                  : [severity, "always-multiline"],
      "comma-spacing"                 : [severity, { after: true, before: false }],
      "comma-style"                   : [severity, "last"],
      "computed-property-spacing"     : [severity, "never"],
      "dot-location"                  : [severity, "property"],
      "eol-last"                      : ["error", "always"],
      "function-call-argument-newline": [severity, "consistent"],
      "function-paren-newline"        : [severity, "multiline"],
      "indent"                        : [severity, 2], // TODO: Options
      "jsx-quotes"                    : [severity, "prefer-double"],
      "key-spacing"                   : [severity,
        {
          beforeColon: false,
          afterColon : true,
          align      : {
            beforeColon: false,
            afterColon : true,
            on         : "colon",
          },
        }],
      "keyword-spacing"     : [severity, { before: true, after: true }],
      // "linebreak-style"     : [severity, "windows"],
      "lines-around-comment": [severity,
        {
          beforeBlockComment: true,
          afterBlockComment : false,
          afterLineComment  : false,
        }],
      "lines-between-class-members": [severity,
        "always",
        {
          exceptAfterSingleLine: true,
        }],
      "max-len": [severity,
        {
          code                  : 88,
          ignoreUrls            : true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals  : true,
        }],
      "multiline-ternary"       : [severity, "always-multiline"],
      "newline-per-chained-call": [ severity ],
      "no-mixed-spaces-and-tabs": [ "error" ],
      // "no-extra-parens"      : [ severity ],
      "no-multi-spaces"         : [severity,
        {
          ignoreEOLComments: true,
        }],
      "no-multiple-empty-lines": [ severity ],
      "no-tabs"                : [ "error" ],
      "no-trailing-spaces"     : [severity,
        {
          skipBlankLines: false,
          ignoreComments: false,
        }],
      "no-whitespace-before-property"   : [ severity ],
      "nonblock-statement-body-position": [severity, "beside"],
      "object-curly-newline"            : [severity,
        {
          multiline : true,
          consistent: true,
        }],
      "object-curly-spacing"   : [severity, "always", { objectsInObjects: false }],
      "object-property-newline": [severity, { allowAllPropertiesOnSameLine: true }],
      "operator-linebreak"     : [severity, "before"],
      "padded-blocks"          : [severity, "never"],
      "quotes"                 : [severity,
        "double",
        {
          avoidEscape          : true,
          allowTemplateLiterals: true,
        }],
      "rest-spread-spacing"        : [severity, "never"],
      semi                         : ["error", "always"],
      "semi-spacing"               : [severity, { before: false, after: true }],
      "semi-style"                 : [severity, "last"],
      "space-before-blocks"        : [severity, "always"],
      "space-before-function-paren": [severity,
        {
          anonymous : "never",
          named     : "never",
          asyncArrow: "always",
        }],
      "space-infix-ops"     : [ severity ],
      "space-unary-ops"     : [severity, { words: false, nonwords: true }],
      "switch-colon-spacing": [severity, { after: true, before: false }],
    },
  };
};

module.exports = { createCoreConfig };
