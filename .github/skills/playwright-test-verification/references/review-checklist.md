# Verification Checklist

- Scope is limited to `tests/testautomationpractice/` unless the user asks otherwise.
- Spec names and test titles describe the covered behavior.
- Assertions validate user-visible outcomes.
- Locators are stable and readable.
- `test.only` is not present.
- Avoid unnecessary `waitForTimeout()` usage.
- Run a focused Playwright command after any fix.
- Report residual failures and coverage gaps clearly.