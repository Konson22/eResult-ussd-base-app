const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("./database.db", sqlite.OPEN_READWRITE, err => err && console.log(err));


const getAllResults = (req, res) => {
    try{
      db.all('SELECT * FROM results_23', [], (err, rows) => {
        if(err) throw err;
        res.json(rows)
      })
    }catch(error){
      console.log(error)
    }
}


const getSingleResults = (req, res) => {
  const { centerIndex, studentIndex } = req.body;
  try{
    db.get(`SELECT * FROM results_23 WHERE studentIndex = ${studentIndex}`, [], (err, results) => {
      if(err) throw err;
      if(results){
        res.json(results)
      }else{
        res.status(400).send('No data found!.')
      }
    })
  }catch(error){
    console.log(error)
  }
}

module.exports = { getAllResults, getSingleResults }

// const results = [
//     {
//       state:'Juba', 
//       county:'Rajap', 
//       centerIndex:'42225', 
//       studentIndex:'2542', 
//       studentName:'Konson Ak',
//       eng:52,
//       math:70,
//       cre:80,
//       islamic:99,
//       physic:65,
//       chemistry:66,
//       biology:97,
//       arabic:null 
//     },
//     {
//       state:'Juba', 
//       county:'Rajap', 
//       centerIndex:'3333', 
//       studentIndex:'6543', 
//       studentName:'Deng Ak',
//       eng:52,
//       math:70,
//       cre:80,
//       islamic:99,
//       physic:65,
//       chemistry:66,
//       biology:97,
//       arabic:null 
//     },
//     {
//       state:'Juba', 
//       county:'Rajap', 
//       centerIndex:'357889', 
//       studentIndex:'5587', 
//       studentName:'Martin Ladu',
//       eng:52,
//       math:70,
//       cre:80,
//       islamic:99,
//       physic:65,
//       chemistry:66,
//       biology:97,
//       arabic:null 
//     },
// ]
//   results.forEach(el => {
//     sql = `INSERT INTO results_23(
//       state, 
//       county, 
//       centerIndex, 
//       studentIndex, 
//       studentName,
//       eng,
//       math,
//       cre,
//       islamic,
//       physic,
//       chemistry,
//       biology,
//       arabic
//     ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`;
//     db.run(sql, [
//       el.state, 
//       el.county, 
//       el.centerIndex, 
//       el.studentIndex, 
//       el.studentName,
//       el.eng,
//       el.math,
//       el.cre,
//       el.islamic,
//       el.physic,
//       el.chemistry,
//       el.biology,
//       el.arabic 
//     ], async err => {
//       if(err) throw err
//       console.log('done')
//     });
// });