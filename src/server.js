

 const express = require('express');
 const app = express();
 
 app.get('/', (req, res) => {
  res.send('Olá, mundo!');
 });


 app.listen(3001, () => console.log('server is running at port 3001...'))