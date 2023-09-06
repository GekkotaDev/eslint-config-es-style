// @ts-check

/**
 * @param {"warn" | "error"} severity
 *
 * @returns {import("eslint-define-config").ESLintConfig}
 */
const createXtendedConfig = (severity) => {
  return {
    rules: {
      "import/consistent-type-specifier-style": [severity, "prefer-top-level"],
      "import/first"                          : [ severity ],
      "import/newline-after-import"           : [ severity ],
      "unicorn/no-zero-fractions"             : [ severity ],
      "unicorn/number-literal-case"           : [ severity ],
      "unicorn/prefer-node-protocol"          : [ severity ],
      "unicorn/template-indent"               : [ severity ],
      "unicorn/text-encoding-identifier-case" : [ severity ],
      "unicorn/numeric-separators-style"      : [severity,
        {
          onlyIfContainsSeparator: true,
        }],
      "unicorn/prevent-abbreviations": [severity,
        {
          replacements: {
            args: {
              arguments: true,
            },
            cb: {
              callback: true,
            },
            cmd: {
              command: true,
            },
            cmds: {
              commands: true,
            },
            opts: {
              options: true,
            },
          },
          allowList: {
            props: true,
          },
        }],
    },
  };
};

module.exports = { createXtendedConfig };

