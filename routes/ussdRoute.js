const express = require('express');
const sqlite = require('sqlite3').verbose();
const router = express.Router()

const db = new sqlite.Database("./database.db", sqlite.OPEN_READWRITE, err => err && console.log(err));


router.post('/', (req, res) => {
    const { sessionId, ussdString, phoneNumber } = req.body;
    
    
    db.get(`SELECT * FROM results_23 WHERE studentIndex = ${ussdString}`, [], (err, responseString) => {
        if(err) throw err;
        // send message
        res.send(`CON Your results has been sent to your number`);
    })
    // Handle USSD menu
    // const responseString = ussdMenuHandler(ussdString);
    
    // Send the response back to the user
    // 
    });

module.exports = router;