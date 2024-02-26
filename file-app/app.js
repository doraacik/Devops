const fs = require("fs");
const express = require("express");

const app = express();

const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const dataObj = JSON.parse(data);

console.log(dataObj);

dataObj.name = "Seden";
dataObj.age = 23;

const newData = JSON.stringify(dataObj);
fs.writeFileSync(`${__dirname}/data.json`, newData)

app.get("/student", (req,res)=>{
    res.status(200).json({
        status:"success",
        data :dataObj
    });
});

app.listen(3000,() => {
    console.log("Server is running on port 3000.")
});