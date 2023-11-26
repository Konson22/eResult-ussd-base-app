const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse the body of incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

// USSD handler function
const ussdHandler = (req, res) => {
  // Extract user input
  const userInput = req.body.text;

  // Process the user input (you can add your logic here)
  const responseMessage = `Thank you for entering student index number: ${userInput}. We will send a message to you.`;

  // Send the response to the USSD gateway
  res.send(`CON ${responseMessage}`);
};

// Define USSD endpoint
app.post('/ussd', ussdHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
