export{} //this is mentioned to separate the file from global scope , so the variables declared in

//API = Application Programming Interface is used to communicate between two applications.
// Client sends a request → Server processes it → Server sends a response.
//An endpoint is a specific URL through which you access a particular API operation.
// HTTP is the protocol used for communication between the client and server.

// status codes 200 -> success, 300 -> redirection, 400 -> client side error, 500 -> server side error

import {test, expect} from '@playwright/test'
  
test(' API basic', async ({page}) =>{
await page.route("https://library-api.postmanlabs.com", async route =>{
await route.fulfill({
    status : 200,
    contentType: 'application/json',
    body: JSON.stringify({ message: 'Success', id: 2345 })
})
})
await page.goto("https://library-api.postmanlabs.com")
await expect(page.locator('body')).toContainText('Success')
await expect(page.locator('body')).toContainText('2345')
await page.waitForTimeout(3000)
})


test("api check", async({page})=>{
    await page.goto("https://library-api.postmanlabs.com")
    await expect(page).toHaveURL("https://library-api.postmanlabs.com")
})

// GET
test("GET request", async({page})=>{
    await page.route("https://library-api.postmanlabs.com/books", async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ books: [{ id: 1, title: 'Mock Book' }, {id: 2, title: 'Another Mock Book'}] })
        })
    })

    const response = await page.goto("https://library-api.postmanlabs.com/books")
    const body = await response?.json()

    await expect(body).toEqual({ books: [{ id: 1, title: 'Mock Book' }, {id: 2, title: 'Another Mock Book'}] })
})

test("GET", async({request})=>{
    const response = await request.get("https://jsonplaceholder.typicode.com/posts")
    console.log(response)
})