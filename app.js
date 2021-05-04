const express = require('express');
const app = express();
const colors = require('colors');
const PORT = 5000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/student', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
var StudentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});
var Student = mongoose.model('Student', StudentSchema);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/addname', (req, res) => {
  var myData = new Student(req.body);
  myData
    .save()
    .then((item) => {
      res.send('Name saved to database');
    })
    .catch((err) => {
      res.status(400).send('Unable to save to database');
    });
});

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
