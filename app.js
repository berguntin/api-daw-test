require('./mongo')
var ObjectId = require('mongodb').ObjectId
const { response, request } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const Quiz = require('./models/Quiz')

app.use(express.json())

// Configurar cabeceras y cors
app.use(cors({
  origin: ['http://localhost:4200', 'http://localhost']
}));

//get all quizzies
app.get('/api/quizzies', (request, response) => {
  Quiz.find({})
    .then(quiz => {
    response.json(quiz)
  })
})
//return a list of subjects availables
app.get('/api/subjects', (request, response) => {
  Quiz.distinct('subject')
  .then(subject => {
    response.json(subject)
  })
})
//return a list of ud's availables for subject passed as parameter
app.get('/api/:subject', (request, response) =>{
  const { subject } = request.params
  Quiz.find({subject: subject}).distinct('ud')
    .then(ud => {
      response.json(ud)
    })
})
//get list of RA available for subject and ud passed in URL params
app.get('/api/:subject/:ud', (request, response) => {
  const { subject } = request.params
  const { ud } = request.params
  Quiz.find({subject: subject, ud: ud}).distinct('ra')
    .then(quiz => {
      if(quiz){
        return response.json(quiz)
      }else {
        response.status(404).send('No existen registros para estos parametros, revisa la url').end()
      }
    }).catch(err => {
      console.log(err)
    })
})
/* // get all quizzies for subject especified
app.get('/api/quizzies/:subject', (request, response) => {
  const {subject} = request.params
  console.log(request.url)
  Quiz.find({subject: subject})
    .then(quiz => {
      if(quiz) {
        return response.json(quiz)
      }else {
        response.status(404).end()
      }
    }).catch(err => {
        console.log(err)
      })
}) */
//get quizzies fitered by subject and ud
app.get('/api/quizzies/:subject/:ud', (request, response) => {
  const {subject} = request.params
  const ud = Number(request.params.ud)
  console.log(request.url)
  Quiz.find({subject: subject, ud: ud})
    .then(quiz => {
      if(quiz){
        return response.json(quiz)
      }else {
        response.status(404).send('No existen registros para estos parametros, revisa la url').end()
      }
    }).catch(err => {
      console.log(err)
    })
})
//get correct answers for quiz
/* app.get('/api/check/:quiz', (request, response) => {
  const id  = new ObjectId(request.params.quiz)
  console.log(request.url)
  Quiz.findById(id)
    .then(quiz => {
        if(quiz){
          response.json(quiz)
        }
        else{
          response.status(404).send('No existen registros para estos parametros, revisa la url').end()
        }
      }).catch(err => {
        console.log(err)
      })

    }) */

//get quizzies fitered by subject, ud and ra
app.get('/api/quizzies/:subject/:ud/:ra', (request, response) => {
  const {subject} = request.params
  const ud = Number(request.params.ud)
  const { ra } = request.params
  console.log(request.url)
  Quiz.find({subject: subject, ud: ud, ra: ra})
    .then(quiz => {
      if(quiz){
        return response.json(quiz)
      }else {
        response.status(404).send('No existen registros para estos parametros, revisa la url').end()
      }
    }).catch(err => {
      console.log(err)
    })
})
app.post('/', (request, response) => {
    console.log(request.url)
    quiz = new Quiz(request.body)
    quiz.save()
      .then(quiz => {
        response.status(200).send(quiz).end()
        console.log('Registro creado correctamente')
      })
      .catch(err => {
        response.status(304).send(err).end()
        console.log(err)
      })
      
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT)
})