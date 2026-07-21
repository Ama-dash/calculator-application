const express = require("express");
const cors = require("cors");
const calculator = require("./calculator");

const app = express();

app.use(cors());
console.log("CORS ENABLED");

app.get("/", (req, res) => {
    res.send("Calculator App is Running!");
});


app.get("/add/:a/:b", (req, res) => {

    const result = calculator.add(
        Number(req.params.a),
        Number(req.params.b)
    );

     res.send(String(result));
});


app.get("/subtract/:a/:b", (req, res) => {

    const result = calculator.subtract(
        Number(req.params.a),
        Number(req.params.b)
    );
    
    res.send(String(result));
   
});


app.get("/multiply/:a/:b", (req, res) => {

    const result = calculator.multiply(
        Number(req.params.a),
        Number(req.params.b)
    );

    res.send(String(result));
});

app.get("/divide/:a/:b", (req, res) => {

    const result = calculator.divide(
        Number(req.params.a),
        Number(req.params.b)
    );

    if (result === "Cannot divide by zero") {
        res.send(result);
    } else {
         res.send(String(result));
    }

});



module.exports = app;