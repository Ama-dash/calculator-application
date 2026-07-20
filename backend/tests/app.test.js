const request = require("supertest");

const app = require("../app");


test("Home page test", async () => {

    const response = await request(app)
        .get("/");

    expect(response.text)
        .toBe("Calculator App is Running!");

});


test("Addition API test", async () => {

    const response = await request(app)
        .get("/add/5/3");


    expect(response.text)
        .toBe("Result: 8");

});


test("Subtraction API test", async () => {

    const response = await request(app)
        .get("/subtract/10/4");


    expect(response.text)
        .toBe("Result: 6");

});


test("Multiplication API test", async () => {

    const response = await request(app)
        .get("/multiply/5/4");


    expect(response.text)
        .toBe("Result: 20");

});


test("Division API test", async () => {

    const response = await request(app)
        .get("/divide/20/5");


    expect(response.text)
        .toBe("Result: 4");

});


test("Division by zero test", async () => {

    const response = await request(app)
        .get("/divide/10/0");


    expect(response.text)
        .toBe("Cannot divide by zero");

});