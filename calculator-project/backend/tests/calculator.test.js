const calculator = require("../calculator");


test("Addition should return correct result", () => {
    expect(calculator.add(5,3))
        .toBe(8);
});


test("Subtraction should return correct result", () => {
    expect(calculator.subtract(10,4))
        .toBe(6);
});


test("Multiplication should return correct result", () => {
    expect(calculator.multiply(5,4))
        .toBe(20);
});


test("Division should return correct result", () => {
    expect(calculator.divide(20,5))
        .toBe(4);
});


test("Division by zero should return error message", () => {
    expect(calculator.divide(10,0))
        .toBe("Cannot divide by zero");
});


