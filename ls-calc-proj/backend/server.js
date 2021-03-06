const express = require('express')
const app = express()
app.use(express.json());
const cors = require("cors");
app.use(cors());
const port = 5000

const CalcMath = require("./CalcMath.js");
const calcMath = new CalcMath();

app.get('/getResult', (req, res) => {
    const body = calcMath.getResult();
    res.status(200).json(body);
})

app.patch('/sendData', (req, res) => {
    const receivedData = req.body; //in the form of an array: [[numbers], operator]
    console.log(receivedData);
     
    if (!req.body) {
        res.status(400).send("400 - bad request");
        return;
      }

    const result = calcMath.handleMath(receivedData);
    let body;

    //HERE for sending the response back
    body = {
        message: "Result calculated!",
        data: result,  
    };
    res.status(200).json({body}); 
});

app.listen(port, () => {
  console.log(`ls-proj-server listening on port ${port}`);
});