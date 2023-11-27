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
<<<<<<< HEAD
    const {  sessionId, serviceCode, phoneNumber, text } = req.body;

    if(text === ''){
        return res.send(`CON Entering yout index number:`);
        
    }else{
        // Process the user input (you can add your logic here)
        db.get(`SELECT * FROM StudentData WHERE IndexNo = '${text}'`, [], (err, result) => {
            if(err) throw err;
            const data = `
                ${result.Name} your results are:\n
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
            return res.send(`CON Thank you We send your ${result.Name} to your number`);
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

=======
    const userInput = req.body.text;

    let responseMessage
    if(userInput === ''){
        responseMessage = `Entering yout index number:`;
    }else{
      // Process the user input (you can add your logic here)
        responseMessage = `Thank you We send your results to your number.`;
    }

    // Send the response to the USSD gateway
    res.send(`CON ${responseMessage}`);
};


>>>>>>> 91b01b274b32a0fc019ec333925aff9016c81ee2
// Define USSD endpoint
app.post('/ussd', ussdHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


/*
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    const user_input = req.body.text;

    // Process user input (replace this logic with your own)
    if (user_input && /^\d+$/.test(user_input)) {
        const index_no = parseInt(user_input);
        
        // Forward SMS (replace this with your SMS sending logic)
        sendSMS(index_no);
        
        res.send(`SMS forwarded successfully for index number ${index_no}`);
    } else {
        res.send('Invalid input. Please enter a valid index number.');
    }
});

function sendSMS(index_no) {
    // Replace this with your SMS sending logic
    console.log(`Forwarded SMS for index number ${index_no}`);
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


*/