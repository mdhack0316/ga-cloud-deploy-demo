 
const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 3000; 
  
app.get('/', (req, res) => { 
  res.send('Wow!!!!!'); 
}); 
  
app.listen(port, () => { 
  console.log(`Server is running on port ${port}`); 
}); 