import { test, expect, Locator, Page } from "@playwright/test";
// const {test, expect} = require('@playwright/test');


test.describe("playwright learning", () => {
test("basic test", async ({ page }) => {
  const URL = await page.goto("https://testautomationpractice.blogspot.com/");
  expect(URL).toBeTruthy();
});

test("input box", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const inputBox = await page.getByPlaceholder("Enter Name");
  await inputBox.fill("Syed");
  await expect(inputBox).toHaveValue("Syed");
  await page.waitForTimeout(2000);
  await expect(inputBox).toBeEnabled();
  await expect(inputBox).toBeVisible();
  await expect(inputBox).toBeEditable();
});

test("radio", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const radioButton = await page.getByRole("radio").all();
  for (let i = 0; i < radioButton.length; i++) {
    await radioButton[i].check();
    await expect(radioButton[i]).toBeChecked();
  }
});

test("check box", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const checkboxes = await page
    .locator(`.form-check-input[type='checkbox']`)
    .all();
  for (const check of checkboxes) {
    await check.check();
    await expect(check).toBeChecked();
  }
});

test("hover", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const hoverElement = await page.getByRole("button", { name: "Point Me" });
  await hoverElement.hover();
});

test("dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const dropdown = await page.locator("#country option").all();
  for (const option of dropdown) {
    const text: string | null = await option.textContent();
    if (text?.includes("Japan")) {
      await page.selectOption("#country", text);
      break;
    }
  }
});

test("alerts", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  page.on("dialog", async (dialog) => {
    await expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });
  await page.getByRole("button", { name: "Simple Alert" }).click();
});

test("Prompt Alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  page.on("dialog", async (dialog) => {
    await expect(dialog.message()).toContain("Please enter your name");
    await expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept("Aaqib");
  });
  await page.getByRole("button", { name: "Prompt Alert" }).click();
});

test("screenshot", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.screenshot({path: "test/Screenshots/" + Date.now() + '.png'})
    await page.screenshot({path: "test/Screenshots/" + Date.now() + '.png', fullPage: true})
})


test("upload Files", async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("input#multipleFilesInput").setInputFiles(['tests/uploadfiles/test1.docx', 'tests/uploadfiles/test.txt'])
    await page.waitForTimeout(2000);
    await page.getByRole("button", { name: "Upload Multiple Files"}).click();
    await page.waitForTimeout(8000);
})

test("frames", async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/")
    await page.frame({url: "https://ui.vision/demo/webtest/frames/frames1"})
    await page.waitForTimeout(1000)
    const iframe = await page.locator("iframe").first()
    await page.locator("iframe").first().getByRole('radio', {name:"Hi, I am the UI.Vision IDE"})
    await page.locator('frame').nth(2).locator('iframe')
});


test('date pickers', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("input#datepicker").fill("08/13/1998")

    const year = "2026"
    const month = "Aug"
    const date = "13"
    await page.locator("#txtDate").click();

    while(true){
        const currentYear = await page.locator(".ui-datepicker-year option").allTextContents()
        const currentMonth = await page.locator(".ui-datepicker-month option").allTextContents()
        if(currentYear.includes(year) && currentMonth.includes(month)){
            await page.locator(".ui-datepicker-year").selectOption(year);
            await page.locator(".ui-datepicker-month").selectOption(month);
            break;
        }
    
        const currentDate = await page.$$('.ui-state-default')
        for(const dt of currentDate){
            if(await dt.textContent()===date){
                await dt.click();
                break;
            }
        }
    }
})

test('table', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = await page.locator("table[name='BookTable']")
    const rows = await page.locator('table[name="BookTable"]').locator('tr').all()
    const columns = await page.locator('table[name="BookTable"]').locator('tr th').all()
    console.log(`Number of rows: ${rows.length}`)
    for(let row of rows){
    const cells = await row.locator('td').all() 
        for(let c of cells){
            console.log(await c.textContent())
        }
    }
 expect( await columns.length).toBe(4)
})

test('pagination table', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
 const table = await page.locator('table#productTable')
 const rows = await page.locator('table#productTable').locator('tr')
//  const checkrows = await page.locator('table#productTable').locator('tr').locator('input').first()

async function selectProducts(rows: Locator,page: Page,name: string){
    let checkrows = rows.filter({
        has : page.locator('td'),
        hasText : name
    })
const checkrow = checkrows.locator('input').check()
}

    await selectProducts(rows,page,"Smartwatch")

    
// pagination 
const pagination = await page.locator('.pagination li a')
console.log("\n" ,await pagination.count())

for(let p=0; p<await pagination.count(); p++){
    if(p>0){
        await pagination.nth(p).click()
    }
    for(let i=0; i<await rows.count(); i++){
        const eachrow = await rows.nth(i)
        const data = await eachrow.locator('td')
    for(let j =1; j<await data.count()-1; j++){
        console.log(await data.nth(j).textContent())
    }
    }
}
})

test("handle window", async({page, context})=>{
const page1 = await context.newPage()

await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {waitUntil: 'load'})
await expect(page1).toHaveTitle("OrangeHRM")
await page.waitForTimeout(2000)

const pagePromise = context.waitForEvent('page')

await page1.locator('//a[text()="OrangeHRM, Inc"]').click()
const newPage = await pagePromise;

expect(newPage).toHaveURL("https://orangehrm.com/")
await newPage.waitForTimeout(3000)
})

test("conduit demo test", async ({ page }) => {
  await page.goto("https://conduit.bondaracademy.com/");
  await page.getByText("Sign in").click();
  await expect(page).toHaveURL("https://conduit.bondaracademy.com/login");
  await page.getByPlaceholder("Email").fill("pwtest@test.com");
  await page.getByPlaceholder("Password").fill("Welcome2");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.getByText("New Article").click();
  await expect(page).toHaveURL("https://conduit.bondaracademy.com/editor");

  const articleTitle = `Test Article ${Date.now()}`;
  const articleBody = "This article was created automatically as part of a Playwright test run.";
  await page.getByPlaceholder("Article Title").fill(articleTitle);
  await page.getByPlaceholder("What's this article about?").fill("Automated test article about Playwright");
  await page.getByPlaceholder("Write your article (in markdown)").fill(articleBody);
  await page.getByPlaceholder("Enter tags").fill("playwright");
  await page.getByRole("button", { name: "Publish Article" }).click();

  await expect(page.getByRole("heading", { name: articleTitle })).toBeVisible();
  await expect(page.getByText(articleBody)).toBeVisible();
});



[
  {username:"21", email:"asnfwejqpwpooj ", password:"2348923uuerifkjansdfjnoja", errorMessage:"username is too short (minimum is 3 characters)", isErrorMessageDisplayed: true},
  {username:"218495", email:"asnfwejqpwpooj ", password:"2348923uuerifkjansdfjnoja", errorMessage:"username", isErrorMEssageDisplayed: false},
  {username:"852469fhjkdlchwiop87", email:"asnfwejqpwpooj ", password:"2348923uuerifkjansdfjnoja", errorMessage:"username", isErrorMEssageDisplayed: false},
  {username:"852469fhjkdlchwiop8754", email:"asnfwejqpwpooj ", password:"2348923uuerifkjansdfjnoja", errorMessage:"username is too long (maximum is 20 characters)", isErrorMEssageDisplayed: true}
].forEach((data)=>{

test.only(`Error message ${data.username}`, async({page})=>{
  await page.goto("https://conduit.bondaracademy.com/login");
  await page.locator('a', { hasText: 'Sign up' }).click();
  await page.getByPlaceholder("Username").fill(data.username)
  await page.getByPlaceholder("Email").fill(data.email)
  await page.getByPlaceholder("Password").fill(data.password)
  await page.getByRole("button", { name: "Sign up" }).click();
  if(data.isErrorMessageDisplayed){
    await expect(page.getByText(data.errorMessage)).toBeVisible();
  } else {
    await expect(page.getByText(data.errorMessage)).not.toBeVisible();
  }
})
})



});
