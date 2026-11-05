# Test Automation Practice Initial Test Plan

## Application Overview

This plan covers a focused initial Playwright suite for https://testautomationpractice.blogspot.com/. The goal is to validate core interactive widgets that are stable and broadly useful for regression coverage without trying to automate the entire page. The suite assumes a fresh browser page for each test and does not depend on any shared authenticated state.

## Test Scenarios

### 1. Page Basics And Form Visibility

**File:** `tests/testautomationpractice/page-and-form.spec.ts`

**Steps:**
1. Navigate to https://testautomationpractice.blogspot.com/.
   - expect: The page loads successfully and remains on the practice URL.
   - expect: A main heading for the practice page is visible.
   - expect: The name input, country dropdown, and alert trigger button are visible.
2. Enter a sample value into the name input.
   - expect: The textbox shows the entered value.

### 2. Selection Controls

**File:** `tests/testautomationpractice/selection-controls.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: Radio buttons, weekday checkboxes, and the country dropdown are available.
2. Select the Male radio button.
   - expect: Male becomes checked.
   - expect: Female remains unchecked.
3. Select Sunday and Monday checkboxes.
   - expect: Both checkboxes become checked.
4. Select Canada from the country dropdown.
   - expect: The selected option text becomes Canada.

### 3. JavaScript Alerts

**File:** `tests/testautomationpractice/alerts.spec.ts`

**Steps:**
1. Navigate to the practice page.
2. Click the Simple Alert button.
   - expect: An alert dialog opens with the expected message.
   - expect: The dialog can be accepted.
3. Click the Prompt Alert button.
   - expect: A prompt dialog opens with the expected message.
   - expect: A custom name can be submitted.
   - expect: The page reflects the submitted prompt value.

### 4. Date Picker Interaction

**File:** `tests/testautomationpractice/date-picker.spec.ts`

**Steps:**
1. Navigate to the practice page.
2. Open the date picker attached to the date input.
   - expect: The calendar widget becomes visible.
3. Choose a target year, month, and day.
   - expect: The date input is populated with a value containing the selected year.

### 5. Product Table Verification

**File:** `tests/testautomationpractice/product-table.spec.ts`

**Steps:**
1. Navigate to the practice page.
   - expect: The product table is visible.
2. Verify the product table headers.
   - expect: The table exposes ID, Name, Price, and Select columns.
3. Capture the first visible product name on page 1.
4. Navigate to page 2 using table pagination.
   - expect: The table still shows rows after pagination.
   - expect: The first visible product name differs from page 1.

## Intentionally Omitted From The Initial Suite

- Confirmation alert coverage.
- Hover interactions.
- File upload.
- Frames and multi-window behavior.
- Non-essential screenshot flows.

These can be added later once the initial suite is stable and validated.