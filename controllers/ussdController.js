const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("./database.db", sqlite.OPEN_READWRITE, err => err && console.log(err));

// USSD menu handler function
function ussdMenuHandler(ussdString) {
    let response
    if(ussdString === ''){
      response = 'Enter school index';
    }else if(ussdString === '1'){
      response = 'Enter your index';
    }
    return `You entered: ${ussdString}`;
}
  
// USSD endpoint
app.post('/ussd', );
  