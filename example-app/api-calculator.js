//Seden Dora Açık Devops Academy Task-1 Api-Calculator

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hi this is your simple calculator!! I meannn really simple :)");
});

//sum
app.get("/api/sum/:number1/:number2", (req, res) => {
    const sum = parseInt(req.params.number1) + parseInt(req.params.number2);
    res.send(`Your numbers' sum is, ${sum}`);
});

//multiplication
app.get("/api/multip/:number1/:number2", (req, res) => {
    const product = parseInt(req.params.number1) * parseInt(req.params.number2);
    res.send(`Your numbers' product is, ${product}`);
});

//substraction
app.get("/api/substraction/:number1/:number2", (req, res) => {
    const number1 = parseInt(req.params.number1), number2 = parseInt(req.params.number2);
    const result = (number1 < number2) ? "Operation cannot be made, first number is smaller." : `Your result is, ${number1 - number2}`;
    res.send(result);
});

//division
app.get("/api/division/:number1/:number2", (req, res) => {
    const number1 = parseInt(req.params.number1), number2 = parseInt(req.params.number2);
    const result = (number2 == 0) ? "Operation cannot be made, INF." : `Your result is, ${number1 / number2}`;
    res.send(result);
});

app.listen(3000,() => {
    console.log("Server is running on port 3000.")
});
