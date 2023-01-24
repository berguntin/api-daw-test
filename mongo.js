const mongoose = require('mongoose')
require ('dotenv').config()

const connectionString = process.env.MONGO_URI;


//MongoDB connection

mongoose.connect(connectionString)
    .then(() => {
        console.log('Database connected')
    }).catch( err => {
        console.log(err)
    })

