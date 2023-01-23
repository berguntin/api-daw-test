const mongoose = require('mongoose')


const connectionString = "mongodb+srv://foc:1234@cluster0.wavamto.mongodb.net/quizzies?retryWrites=true&w=majority";


//conexion a mongo db

mongoose.connect(connectionString,)
    .then(() => {
        console.log('Database connected')
    }).catch( err => {
        console.log(err)
    })

