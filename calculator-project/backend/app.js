const express = require("express");
const calculator = require("./calculator");

const app = express();

app.get("/", (req, res) => {
    res.send("Calculator App is Running!");
});


app.get("/add/:a/:b", (req, res) => {

    const result = calculator.add(
        Number(req.params.a),
        Number(req.params.b)
    );

    res.send(`Result: ${result}`);
});


app.get("/subtract/:a/:b", (req, res) => {

    const result = calculator.subtract(
        Number(req.params.a),
        Number(req.params.b)
    );

    res.send(`Result: ${result}`);
});


app.get("/multiply/:a/:b", (req, res) => {

    const result = calculator.multiply(
        Number(req.params.a),
        Number(req.params.b)
    );

    res.send(`Result: ${result}`);
});

app.get("/divide/:a/:b", (req, res) => {

    const result = calculator.divide(
        Number(req.params.a),
        Number(req.params.b)
    );

    if (result === "Cannot divide by zero") {
        res.send(result);
    } else {
        res.send(`Result: ${result}`);
    }

});



module.exports = app;