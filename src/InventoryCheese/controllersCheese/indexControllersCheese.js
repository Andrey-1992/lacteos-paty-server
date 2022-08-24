const { Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password:'Turing21.',
  database:'fabricaquesosinv',
  port: '5432'
});

// Read All
const getChesseRecord = async (req, res) => {
  try {
  const response = await pool.query('SELECT * FROM quesosinventario')
  res.status(200).json(response.rows)
  }
  catch(e) {
    console.log(e);
    return res.status(500).json('Internal Server Error')
  } 
};

// Read By Id
const getChesseRecordById = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const response = await pool.query('SELECT * FROM quesosinventario WHERE id = $1', [id])
    return res.status(200).json(response.rows);
  } 
  catch(e) {
    console.log(e);
    return res.status(500).json('Internal Server Error')
  } 
};


// Create
const storeChesseRecord = async (req, res) => {
  try {
    const { 
      quesoname, 
      quesostatus, 
      quesoavailability,
      nopieces,
      holladas,
      datein,
      price,
      lotenum,
      refrigerationtype
    } = req.body;
    const response = await pool.query(
      'INSERT INTO quesosinventario(quesoname, quesostatus, quesoavailability, nopieces, holladas, datein, price, lotenum, refrigerationtype) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', 
      [quesoname, quesostatus, quesoavailability, nopieces, holladas, datein, price, lotenum, refrigerationtype]);
      return res.status(200).json({
        message: 'The Chesse record have been stored successfully!',
        body: {
          quesoname, 
          quesostatus, 
          quesoavailability,
          nopieces,
          holladas,
          datein,
          price,
          lotenum,
          refrigerationtype
        }
      })
    } 
    catch(e) {
      console.log(e);
      return res.status(500).json('Internal Server Error')
    } 
  }

  // Create New Record Out
const storeChesseRecordOut = async (req, res) => {
  try {
    const { 
      approvedprodsalida,
      approvepord,
      quesoname, 
      quesostatus, 
      quesoavailability,
      nopieces,
      nopiecessalida,
      weigthcurrent,
      datein,
      dateout,
      price,
      lotenum,
      refrigerationtype
    } = req.body;
    const response = await pool.query(
      'INSERT INTO quesosinventario(approvedprodsalida, approvepord, quesoname, quesostatus, quesoavailability, nopieces, nopiecessalida, weigthcurrent, datein, dateout, price, lotenum, refrigerationtype) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', 
      [approvedprodsalida, approvepord, quesoname, quesostatus, quesoavailability, nopieces, nopiecessalida, weigthcurrent, datein, dateout, price, lotenum, refrigerationtype]);
      return res.status(200).json({
        message: 'The Chesse record have been stored successfully!',
        body: {
          approvedprodsalida,
          approvepord,
          quesoname, 
          quesostatus, 
          quesoavailability,
          nopieces,
          nopiecessalida,
          weigthcurrent,
          datein,
          dateout,
          price,
          lotenum,
          refrigerationtype
        }
      })
    } 
    catch(e) {
      console.log(e);
      return res.status(500).json('Internal Server Error')
    } 
  }
  
// Delete By Id
const deleteChesseRecordById = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const response = await pool.query('DELETE FROM quesosinventario WHERE id = $1', [id])
    return res.status(200).json(`Chesse Record successfully deleted, with ID: ${id}`);
  } 
  catch(e) {
    console.log(e);
    return res.status(500).json('Internal Server Error')
  } 
};

// Update By Id
const updateChesseRecordById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const {  
      approvepord,
      datein,
      holladas,
      nopieces,
      price,
      quesoname,
      lotenum,
      refrigerationtype
    } = req.body;
    const response = await pool.query(`UPDATE quesosinventario SET approvepord = $1, datein = $2, holladas = $3, nopieces = $4, price = $5, quesoname = $6, lotenum = $7, refrigerationtype = $8 WHERE id = $9`, [
      approvepord,
      datein,
      holladas,
      nopieces,
      price,
      quesoname,
      lotenum,
      refrigerationtype,
      id
    ]);
    return res.status(200).json(`Chesse Record successfully Updated, with ID: ${id}`);
  } 
  catch(e) {
    console.log(e);
    return res.status(500).json('Internal Server Error')
  } 
};

// Update Record Out By Id
const updateChesseRecordOutById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const {  
      approvedprodsalida,
      dateout,
      weigthcurrent,
      nopieces,
      nopiecessalida,
      price,
    } = req.body;
    const response = await pool.query(`UPDATE quesosinventario SET approvedprodsalida = $1, dateout = $2, weigthcurrent = $3, nopieces = $4,  nopiecessalida = $5, price = $6 WHERE id = $7`, [
      approvedprodsalida,
      dateout,
      weigthcurrent,
      nopieces,
      nopiecessalida,
      price,
      id
    ]);
    return res.status(200).json(`Chesse Record successfully Updated, with ID: ${id}`);
  } 
  catch(e) {
    console.log(e);
    return res.status(500).json('Internal Server Error')
  } 
};
 

module.exports = {
  getChesseRecord,
  storeChesseRecord,
  storeChesseRecordOut,
  getChesseRecordById,
  updateChesseRecordById,
  updateChesseRecordOutById,
  deleteChesseRecordById
};