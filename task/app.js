"use strict";
const express = require("express");
const dbConnection = require("./helper/mysql");

const app = express();

//check db connection
dbConnection.getConnection((err, connection) => {
  if (err) {
    console.log("Database connection error: ", err);
  } else {
    console.log("Database connected");
  }
});

// Using express.urlencoded middleware 
app.use(express.urlencoded({ 
    extended: true
}))
/*
dbConnection.query("INSERT INTO students (name, midterm_grade, final_grade) VALUES ('Seden', 100, 100)",
(err, results,fields) => {
  if(err) {
    console.log("Database query error: ", err);
  }
  else{
    console.log("Data inserted successfully.")
  }
});*/

// Get request  

app.get('/',(req,res) => { 
    // Sent index.html file to the client 
    res.sendFile(__dirname + '/index.html') 
});
app.get("/students", (req, res) => {
  dbConnection.query("SELECT * FROM students", (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
    } else {
      res.status(200).json({
        status: "success",
        data: results,
      });
    }
  });
});
app.get("/students/:id", (req, res) => {
  dbConnection.query("SELECT * FROM students WHERE id = ?", 
  [req.params.id],
  (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
    } else {
     //console.log(results); results give array "[ { id: 2, name: 'Dora', midterm_grade: 10, final_grade: 5 } ]" with the first element is the student. Hence;
      const student = results[0]; //the student and data
      res.status(200).json({
        status: "success",
        data: { //so I created new data with avg grade added. Not sure if this is the efficient way.
            id: student.id,
            name: student.name,
            midterm_grade: student.midterm_grade,
            final_grade: student.final_grade,
            average_grade: ((student.midterm_grade + student.final_grade) / 2 )
        },
      });
    }
  });
});

app.post('/submit',(req,res) => { 
    console.log('POST parameter received are: ',req.body) 
    dbConnection.query("INSERT INTO students (name, midterm_grade, final_grade) VALUES ('" +req.body.name+"', " + req.body.midterm_grade+", " + req.body.final_grade+")",
    (err, results,fields) => {
        if(err) {
          console.log("Database query error: ", err);
        }
        else{
          console.log("Data inserted successfully.")
        }
    });
    res.redirect('/') 
});

app.listen(3000,() => {
  console.log("Server is running on port 3000.")
});
