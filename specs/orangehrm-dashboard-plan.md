# OrangeHRM Dashboard Test Plan

## Application Overview

This test plan covers the OrangeHRM OpenSource Demo application's authentication flow and Dashboard page (https://opensource-demo.orangehrmlive.com). The Dashboard is the landing page after login and contains multiple widgets: Time at Work, My Actions, Quick Launch, Buzz Latest Posts, Employees on Leave Today, Employee Distribution by Sub Unit, and Employee Distribution by Location. It also has a persistent side menu (Admin, PIM, Leave, Time, Recruitment, My Info, Performance, Dashboard, Directory, Maintenance, Claim, Buzz), a top navigation bar with an Upgrade button and a user profile dropdown (About, Support, Change Password, Logout). Standard demo credentials are Username "Admin" / Password "admin123". All scenarios assume a fresh/blank browser state (no pre-existing session/cookies) unless otherwise noted, and a seed file is assumed to handle authenticated login state for scenarios that require being on the Dashboard, so those tests can skip repeating the login steps.

## Test Scenarios

### 1. Authentication

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful login with valid credentials reaches Dashboard

**File:** `tests/dashboard/login.spec.ts`

**Steps:**
  1. Assume fresh/blank state: navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login with no existing session/cookies.
    - expect: The Login page is displayed with a heading 'Login', a Username textbox, a Password textbox, and a Login button.
    - expect: Demo credential hints 'Username : Admin' and 'Password : admin123' are visible on the page.
  2. Enter 'Admin' into the Username field.
    - expect: The Username field displays the entered value.
  3. Enter 'admin123' into the Password field.
    - expect: The Password field displays masked characters.
  4. Click the 'Login' button.
    - expect: The application navigates to the URL ending in /web/index.php/dashboard/index.
    - expect: The page heading changes to 'Dashboard'.
    - expect: The side menu, top navigation bar, and dashboard widgets are rendered.

#### 1.2. Login fails with invalid username and password (negative test)

**File:** `tests/dashboard/login.spec.ts`

**Steps:**
  1. Assume fresh/blank state: navigate to the Login page with no existing session/cookies.
    - expect: The Login page is displayed.
  2. Enter 'InvalidUser' into the Username field.
    - expect: The Username field displays the entered value.
  3. Enter 'wrongpass' into the Password field.
    - expect: The Password field displays masked characters.
  4. Click the 'Login' button.
    - expect: The page remains on the login URL (no navigation to Dashboard occurs).
    - expect: An 'Invalid credentials' error message is displayed above the form.
    - expect: The Dashboard and its widgets are not rendered.

#### 1.3. Login fails with valid username but blank password (negative test)

**File:** `tests/dashboard/login.spec.ts`

**Steps:**
  1. Assume fresh/blank state: navigate to the Login page with no existing session/cookies.
    - expect: The Login page is displayed.
  2. Enter 'Admin' into the Username field and leave the Password field empty.
    - expect: The Username field shows 'Admin'; the Password field remains empty.
  3. Click the 'Login' button.
    - expect: A required-field validation message ('Required') is shown under the Password field.
    - expect: The page remains on the login URL and the Dashboard is not reached.

#### 1.4. Login fails with both fields blank (negative test)

**File:** `tests/dashboard/login.spec.ts`

**Steps:**
  1. Assume fresh/blank state: navigate to the Login page with no existing session/cookies.
    - expect: The Login page is displayed with both fields empty.
  2. Click the 'Login' button without entering any text.
    - expect: Required-field validation messages ('Required') are shown under both the Username and Password fields.
    - expect: The page remains on the login URL.

### 2. Dashboard Widgets

**Seed:** `tests/seed.spec.ts`

#### 2.1. Dashboard loads with all key widgets visible after login (happy path)

**File:** `tests/dashboard/dashboard-widgets.spec.ts`

**Steps:**
  1. Assumption: the seed file has already authenticated as Admin/admin123 and the browser is on the Dashboard page (https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index).
    - expect: The page heading reads 'Dashboard'.
  2. Verify the 'Time at Work' widget is visible.
    - expect: The widget displays punch status (e.g., 'Punched Out'), 'Today' hours, and 'This Week' hours with date range.
  3. Verify the 'My Actions' widget is visible.
    - expect: The widget shows either pending action items (e.g., '(1) Pending Self Review', '(1) Candidate to Interview') or a 'No Pending Actions to Perform' message with an empty-state image.
  4. Verify the 'Quick Launch' widget is visible.
    - expect: Six shortcut icons are visible: Assign Leave, Leave List, Timesheets, Apply Leave, My Leave, My Timesheet, each with a label.
  5. Verify the 'Buzz Latest Posts' widget is visible.
    - expect: A list of recent posts is shown, each with a profile picture, author name, timestamp, and post text/preview.
  6. Verify the 'Employees on Leave Today' widget is visible.
    - expect: The widget shows either a list of employees on leave or a 'No Employees are on Leave Today' empty-state message with image.
  7. Verify the 'Employee Distribution by Sub Unit' widget is visible.
    - expect: The widget title and its chart/legend area render without errors.
  8. Verify the 'Employee Distribution by Location' widget is visible.
    - expect: The widget shows a legend list with at least the entries 'Texas R&D', 'New York Sales Office', and 'Unassigned'.
  9. Verify the footer text is visible at the bottom of the page.
    - expect: Footer shows 'OrangeHRM OS 5.9' and a copyright line with a link to 'OrangeHRM, Inc'.

#### 2.2. My Actions widget links navigate to the correct pending action page

**File:** `tests/dashboard/dashboard-widgets.spec.ts`

**Steps:**
  1. Assumption: authenticated via seed file and on the Dashboard, with at least one pending action present (e.g., 'Pending Self Review').
    - expect: The 'My Actions' widget lists the pending action with a count badge.
  2. Click the pending action text/icon (e.g., '(1) Pending Self Review').
    - expect: The application navigates away from the Dashboard to the relevant module page (e.g., Performance module) related to the action.
  3. Navigate back to the Dashboard using the side menu 'Dashboard' link.
    - expect: The Dashboard page reloads and widgets render again correctly.

#### 2.3. Employee Distribution by Location legend items are interactive

**File:** `tests/dashboard/dashboard-widgets.spec.ts`

**Steps:**
  1. Assumption: authenticated via seed file and on the Dashboard.
    - expect: The 'Employee Distribution by Location' widget is visible with legend entries.
  2. Click on the 'Texas R&D' legend item.
    - expect: No page navigation occurs (widget stays on Dashboard); the chart may visually toggle/highlight that segment without error, and no console errors are thrown.

### 3. Side Menu Navigation

**Seed:** `tests/seed.spec.ts`

#### 3.1. Navigate from Dashboard to each side menu module and back

**File:** `tests/dashboard/side-menu-navigation.spec.ts`

**Steps:**
  1. Assumption: authenticated via seed file and on the Dashboard page. Confirm the side menu (Sidepanel navigation) lists: Admin, PIM, Leave, Time, Recruitment, My Info, Performance, Dashboard, Directory, Maintenance, Claim, Buzz.
    - expect: All twelve menu items are visible and clickable in the side panel.
  2. Click the 'Admin' side menu link.
    - expect: The URL changes to /web/index.php/admin/viewAdminModule and the Admin module page loads.
  3. Click the 'Dashboard' side menu link to return.
    - expect: The URL changes back to /web/index.php/dashboard/index and all Dashboard widgets render again.
  4. Repeat click-and-return for the 'PIM' side menu link.
    - expect: The URL changes to /web/index.php/pim/viewPimModule, then returns to the Dashboard URL when 'Dashboard' is clicked again.
  5. Repeat click-and-return for the 'Leave' side menu link.
    - expect: The URL changes to /web/index.php/leave/viewLeaveModule, then returns to the Dashboard URL when 'Dashboard' is clicked again.
  6. Repeat click-and-return for the 'Time', 'Recruitment', 'My Info', 'Performance', 'Directory', 'Maintenance', 'Claim', and 'Buzz' side menu links, verifying each corresponding URL and returning to Dashboard after each.
    - expect: Each module loads its expected URL (e.g., /web/index.php/time/viewTimeModule, /web/index.php/recruitment/viewRecruitmentModule, /web/index.php/pim/viewMyDetails for My Info, /web/index.php/performance/viewPerformanceModule, /web/index.php/directory/viewDirectory, /web/index.php/maintenance/viewMaintenanceModule, /web/index.php/claim/viewClaimModule, /web/index.php/buzz/viewBuzz), and the Dashboard reloads correctly after each return.

#### 3.2. Side menu search filters navigation items

**File:** `tests/dashboard/side-menu-navigation.spec.ts`

**Steps:**
  1. Assumption: authenticated via seed file and on the Dashboard page.
    - expect: The side menu search textbox is visible above the menu list.
  2. Type 'Leave' into the side menu Search textbox.
    - expect: The menu list filters to show only items matching 'Leave' (e.g., the 'Leave' module item remains, unrelated items are hidden).
  3. Clear the search textbox.
    - expect: The full list of side menu items is restored.

#### 3.3. Side menu search with no matching results (edge case)

**File:** `tests/dashboard/side-menu-navigation.spec.ts`

**Steps:**
  1. Assumption: authenticated via seed file and on the Dashboard page.
    - expect: The side menu search textbox is visible.
  2. Type a nonsensical string, e.g., 'zzzxxxnotamodule', into the search textbox.
    - expect: No menu items match; the menu list appears empty or shows a 'no results' state without throwing a page error.

### 4. Quick Launch Panel

**Seed:** `tests/seed.spec.ts`

#### 4.1. Quick Launch 'Assign Leave' navigates to the Assign Leave page

**File:** `tests/dashboard/quick-launch.spec.ts`

**Steps:**
  1. Assumption: authenticated via seed file and on the Dashboard page. Locate the Quick Launch widget with six action icons.
    - expect: Quick Launch widget shows icons labeled Assign Leave, Leave List, Timesheets, Apply Leave, My Leave, My Timesheet.
  2. Click the 'Assign Leave' icon/button.
    - expect: The application navigates to the URL /web/index.php/leave/assignLeave and the Assign Leave form page loads.
  3. Navigate back to the Dashboard via the side menu 'Dashboard' link.
    - expect: The Dashboard reloads with all widgets visible again.

#### 4.2. Quick Launch 'Leave List' navigates to the Leave List page

**File:** `tests/dashboard/quick-launch.spec.ts`

**Steps:**
  1. Assumption: authenticated via seed file and on the Dashboard page.
    - expect: Quick Launch widget is visible.
  2. Click the 'Leave List' icon/button.
    - expect: The application navigates to the Leave List page under the Leave module (URL contains /leave/).

#### 4.3. Quick Launch 'Timesheets' navigates to the Timesheets page

**File:** `tests/dashboard/quick-launch.spec.ts`

**Steps:**
  1. Assumption: authenticated via seed file and on the Dashboard page.
    - expect: Quick Launch widget is visible.
  2. Click the 'Timesheets' icon/button.
    - expect: The application navigates to the Timesheets page under the Time module (URL contains /time/).

#### 4.4. Quick Launch 'Apply Leave' navigates to the Apply Leave page

**File:** `tests/dashboard/quick-launch.spec.ts`

**Steps:**
  1. Assumption: authenticated via seed file and on the Dashboard page.
    - expect: Quick Launch widget is visible.
  2. Click the 'Apply Leave' icon/button.
    - expect: The application navigates to the Apply Leave page under the Leave module (URL contains /leave/applyLeave or similar).

#### 4.5. Quick Launch 'My Leave' navigates to the My Leave page

**File:** `tests/dashboard/quick-launch.spec.ts`

**Steps:**
  1. Assumption: authenticated via seed file and on the Dashboard page.
    - expect: Quick Launch widget is visible.
  2. Click the 'My Leave' icon/button.
    - expect: The application navigates to the My Leave page showing the current user's leave records.

#### 4.6. Quick Launch 'My Timesheet' navigates to the My Timesheet page

**File:** `tests/dashboard/quick-launch.spec.ts`

**Steps:**
  1. Assumption: authenticated via seed file and on the Dashboard page.
    - expect: Quick Launch widget is visible.
  2. Click the 'My Timesheet' icon/button.
    - expect: The application navigates to the My Timesheet page showing the current user's timesheet.

### 5. User Dropdown Menu

**Seed:** `tests/seed.spec.ts`

#### 5.1. User dropdown menu opens and shows expected options

**File:** `tests/dashboard/user-dropdown.spec.ts`

**Steps:**
  1. Assumption: authenticated via seed file and on the Dashboard page. Locate the user profile element in the top-right of the banner (profile picture and username, e.g., 'manda user').
    - expect: The profile element is visible and clickable.
  2. Click the user profile element to open the dropdown menu.
    - expect: A menu appears containing four items: 'About', 'Support', 'Change Password', and 'Logout'.
  3. Click elsewhere on the page (or press Escape) to close the menu without selecting an option.
    - expect: The dropdown menu closes and the Dashboard remains unchanged with no navigation occurring.

#### 5.2. User dropdown 'About' option displays application information

**File:** `tests/dashboard/user-dropdown.spec.ts`

**Steps:**
  1. Assumption: authenticated via seed file and on the Dashboard page.
    - expect: Dashboard is loaded.
  2. Open the user dropdown menu and click 'About'.
    - expect: A dialog/modal opens displaying application version/build information (e.g., 'OrangeHRM OS 5.9').
  3. Close the About dialog.
    - expect: The dialog closes and the Dashboard remains visible underneath.

#### 5.3. User dropdown 'Change Password' navigates to the change password page

**File:** `tests/dashboard/user-dropdown.spec.ts`

**Steps:**
  1. Assumption: authenticated via seed file and on the Dashboard page.
    - expect: Dashboard is loaded.
  2. Open the user dropdown menu and click 'Change Password'.
    - expect: The application navigates to a Change Password form with fields for current and new password.
  3. Navigate back to the Dashboard via the side menu without submitting the form.
    - expect: The Dashboard reloads correctly; no password change was submitted.

#### 5.4. Logout from the user dropdown menu ends the session and returns to Login page (happy path)

**File:** `tests/dashboard/user-dropdown.spec.ts`

**Steps:**
  1. Assumption: authenticated via seed file and on the Dashboard page.
    - expect: Dashboard is loaded and the user profile element is visible.
  2. Click the user profile element to open the dropdown menu, then click 'Logout'.
    - expect: The application navigates to the Login page URL (/web/index.php/auth/login).
    - expect: The Login form (Username, Password, Login button) is displayed.
  3. Attempt to navigate directly back to the Dashboard URL (/web/index.php/dashboard/index) using browser navigation.
    - expect: The application redirects back to the Login page instead of showing the Dashboard, confirming the session was terminated.
