const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/clientRoutes');
const app = express();
const DB_URI = 'mongodb://127.0.0.1:27017/ClientDB';
mongoose.connect(DB_URI);
mongoose.connection.once('open',(err)=>{
    if(!err){
        console.log("Connected to DB");
    }
});
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/api/v1/',routes);
const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
 