const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3000;
app.use(cors({origin: '*'}));

// Middleware to parse the body of incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

// USSD handler function
const ussdHandler = (req, res) => {
    // Extract user input
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


// Define USSD endpoint
app.post('/ussd', ussdHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
