import { test, expect } from '@playwright/test';
test.describe("API", () =>{
test('api check', async ({ page, request }) => {

//await request.get('https://jsonplaceholder.typicode.com/users/1');
    const mockedUser = {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'leanne@example.com',
    };

    await page.route('https://jsonplaceholder.typicode.com/**', async route => {
        const url = route.request().url();

        if (url.endsWith('/users/1')) {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(mockedUser),
            });
            return;
        }

        await route.fulfill({
            status: 200,
            contentType: 'text/html',
            body: '<!doctype html><html><body>Mock host</body></html>',
        });
    });

    await page.goto('https://jsonplaceholder.typicode.com/');

    const result = await page.evaluate(async () => {
        const response = await fetch('/users/1');
        const body = await response.json();

        return {
            status: response.status,
            body,
        };
    });

    expect(result.status).toBe(200);
    expect(result.body).toMatchObject({
        id: 1,
        username: 'Bret',
    });
});

test("post method", async({page})=>{
    // const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     data: {
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 1,
    //     },
    // });
    // expect(response.status()).toBe(201);
    // const body = await response.json();
    // console.log(body);
    const user ={
        id : 1235,
        name: 'Aaqib',
        username: 'aaqib',
    }
await page.route("**/users/**", async route =>{
const url = route.request().url();

if(url.includes("users")){
    await route.fulfill({
        status:200,
        contentType: 'application/json',
        body: JSON.stringify(user)
    })
    return 
}
await route.fulfill({
    status: 404,
    contentType: 'text/plain',
    body: 'Not Found',
});
})

await page.goto('https://jsonplaceholder.typicode.com/');

const intercept = await page.evaluate(async()=>{
    const response = await fetch('/users/1235');
    const body = await response.json();

    return {
        status: response.status,
        body
    }
} )

expect(intercept.status).toBe(200);
expect(intercept.body).toMatchObject({
    id: 1235,
    name: 'Aaqib',
    username: 'aaqib',
});

})


test("Put check", async({request, page})=>{
    // const response = await request.put("https://jsonplaceholder.typicode.com/posts/1", {
    //     headers: {
    //            'content-type' : 'application/json'
    //     },
    //     data :{
    //         id: 1,
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 1,
    //     }
    // })
    // const body = await response.json()
    // expect(response.status()).toBe(200);
    // expect(body.id).toBe(1);
const data ={
     id: 1,
    title: 'foo',
        body: 'bar',
            userId: 1,
}

await page.route("**", async route =>{
const url = route.request().url()

if(url.includes("posts/1")){
    await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(data)
    })
    return
}
await route.fulfill({
    status: 404,
    contentType: 'text/plain',
    body: 'Not Found'
})
})      

await page.goto('https://jsonplaceholder.typicode.com/posts/1');

const result = await page.evaluate(async()=>{
    const data1 = await fetch('/posts/1');
    const body = await data1.json();

    return {
        status: data1.status,
        body: body
    }
});
expect(result.status).toBe(200);
expect(result.body).toMatchObject(data);

})
})