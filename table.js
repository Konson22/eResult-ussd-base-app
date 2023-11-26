
const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("./database.db", sqlite.OPEN_READWRITE, err => err && console.log(err));

const sql = `CREATE TABLE results_23(
    id INTEGER PRIMARY KEY, 
    state TEXT NOT NULL,
    county TEXT NOT NULL,
    centerIndex TEXT NOT NULL,
    studentIndex TEXT NOT NULL,
    studentName TEXT NOT NULL,
    eng INTEGER,
    math INTEGER,
    cre INTEGER,
    islamic INTEGER,
    physic INTEGER,
    chemistry INTEGER,
    biology INTEGER,
    arabic INTEGER
)`;

db.run(sql)
