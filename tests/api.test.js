const { test, expect, request } = require('@playwright/test');

test.describe('Test API with Playwright', () => {
    test('GET API', async ({ }) => {
        const apiContext = await request.newContext();
        const res = await apiContext.get('https://reqres.in/api/users?page=2');
        expect(res.status()).toBe(200);
        const respondBody = await res.json();
        //console.log(respondBody);
        expect(respondBody.page).toBe(2);
        expect(respondBody.per_page).toBe(6);
    });

    test('POST API', async ({ }) => {
        const apiContext = await request.newContext();
        const postData = {
            name: "morpheus",
            job: "leader"
        }

        const res = await apiContext.post('https://reqres.in/api/users', {
            data: postData
        });
        expect(res.status()).toBe(201);
        const respondBody = await res.json();
        console.log(respondBody);
        expect(respondBody.name).toBe('morpheus');
        expect(respondBody.job).toBe('leader');
    });

    test('PUT API', async ({ }) => {
        const apiContext = await request.newContext();
        const putData = {
            name: "morpheus",
            job: "zion resident"
        }

        const res = await apiContext.put('https://reqres.in/api/users/2', {
           data: putData 
        });
        expect(res.status()).toBe(200);
        const respondBody = await res.json();
        console.log(respondBody);
        expect(respondBody.name).toBe('morpheus');
        expect(respondBody.job).toBe('zion resident');
    });

    test('DELETE API', async ({ }) => {
        const apiContext = await request.newContext();
        const res = await apiContext.delete('https://reqres.in/api/users/2');
        expect(res.status()).toBe(204);
        console.log(res);
    });
});