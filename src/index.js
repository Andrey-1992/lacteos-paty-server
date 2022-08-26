const express = require('express');

//Middlewares:
const app = express(); 
const cors = require('cors');

app.use(express.json());
app.use(cors());

// app.use(express.json());  

// Routes: 

app.use(require('./InventoryCheese/routesCheese/routesIndexCheese'));

app.listen(4000);
// console.log('Server running on port 4000');
// app.listen(5432, () => {
//   console.log(`is running on port: 5432`)
// });