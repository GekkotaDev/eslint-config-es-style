# `@gekkotadev/eslint-config-es-style`

A primarily stylistic ESLint configuration.

## Caveats

This shared configuration is only concerned with automatically applying rules
(via the `--fix` flag or VS Code extension). All rules aside from exceptions
specified below that cannot be fixed automatically are ignored.

- `max-len`
- `no-mixed-spaces-and-tabs`

This self imposed caveat exists so that the configuration can get out of your
way and fix styling problems by itself.

## Integration

### VS Code

```jsonc
// .code-workspace
{
    "settings": {
        "editor.codeActionsOnSave": {
            "source.fixAll": true,
        }
    }
}
```
