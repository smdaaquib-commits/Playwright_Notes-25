---
name: playwright-test-verification
description: 'Verify generated Playwright tests for https://testautomationpractice.blogspot.com/. Use for reviewing tests under tests/testautomationpractice, checking quality, running focused execution, and stabilizing failures with the Playwright healer.'
user-invocable: false
---

# Playwright Test Verification

Use this skill when verifying generated test coverage for https://testautomationpractice.blogspot.com/.

## Verification Goals
- Confirm each spec belongs under `tests/testautomationpractice/`.
- Check that assertions match visible behavior on the page.
- Catch flaky patterns such as `test.only`, unnecessary waits, and weak selectors.
- Run focused Playwright validation before reporting success.

## Procedure
1. Inspect the requested spec files and the relevant plan in `specs/testautomationpractice-plan.md` when it exists.
2. Review the code for basic quality gates:
   - No `test.only`.
   - No unrelated file edits.
   - Prefer role, label, placeholder, or stable CSS locators over brittle nth-child style selectors.
   - Prefer assertions over raw waits when waiting for state.
3. Run focused verification for the target specs instead of the entire repository when possible.
4. If a failure is localized and repairable, hand that spec to `playwright-test-healer`, then rerun the same focused verification.
5. Report the outcome with:
   - verified files
   - failures still open
   - fixes applied
   - coverage or maintainability gaps still worth addressing

## Validation Commands
- Preferred suite command: `npx playwright test tests/testautomationpractice`
- Preferred single-file command: `npx playwright test <spec-path>`

## Reference
- Review checklist: [references/review-checklist.md](./references/review-checklist.md)