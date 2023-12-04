const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = 3000;
const sqlite = require('sqlite3').verbose();
app.use(cors());

// Middleware to parse the body of incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

const db = new sqlite.Database("./database.db", sqlite.OPEN_READWRITE, err => err && console.log(err));


app.get('/', (req, res) => {
    db.all('SELECT * FROM StudentData', [], (err, rows) => {
        if(err) throw err;
        res.json(rows)
    })
    // console.log('hii')
})
// USSD handler function
const ussdHandler = (req, res) => {
    // Extract user input
    const {  sessionId, serviceCode, phoneNumber, text } = req.body;

    if(text === ''){
        return res.send(`CON Enter your index number:`);
    }else{
        // Process the user input (you can add your logic here)
        db.get(`SELECT * FROM StudentData WHERE IndexNo = '${text}'`, [], (err, result) => {
            if(err) throw err;
            const data = `Dear ${result.Name} your results are:\n
                - English = ${result.English} \n
                - Mathematics = ${result.Mathematics} \n
                - AdditionalMaths = ${result.AdditionalMaths} \n
                - Biology = ${result.Biology} \n
                - Physics = ${result.Physics} \n
                - Chemistry = ${result.Chemistry} \n
                - CRE = ${result.CRE} \n
            `

            sendMessage(phoneNumber, data)
            // Send the response to the USSD gateway
            return res.send(`CON ${result.Name} your average is 85.3% \n we will sent your results details in SMS shortly.`);
        })
    }
};


const credentials = { apiKey: process.env.API_KEY, username: 'sandbox' }
const Africastalking = require('africastalking')(credentials);

function sendMessage(to, message){
    
    
    const sms = Africastalking.SMS
    
    sms.send({to, message})
        .then( response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
    });
}

// Define USSD endpoint
app.post('/ussd', ussdHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

