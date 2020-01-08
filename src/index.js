require('dotenv').config()
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import requireDir from 'require-dir';

//config database and application
const port = process.env.PORT || 3000;
const app = express();

requireDir('./model');

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, { useMongoClient: true  }).then(() => {
    console.log('connected to database!');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

//start routes
app.use('/user', require('./routes/userRoutes'));

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});