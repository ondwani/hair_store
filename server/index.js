const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express(); //using express methods

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(success => console.log('Database connected succesfully'))
  .catch(err => console.error(err));

app.use(express.static('dist'));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/api', require('./routes/routes'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);

// set database
// into some apis
// test your apis
// perform some fetch requests
