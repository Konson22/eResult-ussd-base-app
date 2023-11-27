
const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("./database.db", sqlite.OPEN_READWRITE, err => err && console.log(err));

// const sql = `CREATE TABLE IF NOT EXISTS StudentData (
//     StudentID INTEGER PRIMARY KEY AUTOINCREMENT,
//     Name TEXT,
//     Gender TEXT,
//     IndexNo TEXT,
//     CentreNo TEXT,
//     SchoolName TEXT,
//     Chemistry INTEGER,
//     Physics INTEGER,
//     Biology INTEGER,
//     Mathematics INTEGER,
//     English INTEGER,
//     CRE INTEGER,
//     AdditionalMaths INTEGER
// );`

const sql = `INSERT INTO StudentData (Name, Gender, IndexNo, CentreNo, SchoolName, Chemistry, Physics, Biology, Mathematics, English, CRE, AdditionalMaths) VALUES
    ('John Doe', 'Male', '123456', '789012', 'ABC High School', 85, 76, 92, 68, 77, 89, 94),
    ('Jane Doe', 'Female', '654321', '012345', 'XYZ Secondary School', 72, 88, 56, 79, 91, 40, 63),
    ('Alex Smith', 'Male', '987654', '543210', 'PQR Academy', 98, 83, 71, 90, 45, 55, 76);`



db.run(sql)