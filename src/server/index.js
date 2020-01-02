const express = require('express');
const path = require ("path")


const app = express(); //using express methods
app.use(express.static('dist'));



app.get('/*', (req,res)=>{
  res.sendFile(path.join(__dirname,"../../dist","index.html"))
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
