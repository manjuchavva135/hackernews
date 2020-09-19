const express = require('express');
//to initialize bodypARSER
const bodyParser = require('body-parser');
// initialize our express app
const app = express();
//initialize mongoose
const mongoose = require('mongoose');
//connect to mongodb
mongoose.connect('mongodb://localhost:27017/hackernewsapp', {useNewUrlParser: true},()=>{
    console.log("connected")
});
const news = require('./routes/news');
let port = PROCESS.ENV||3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/news', news);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});