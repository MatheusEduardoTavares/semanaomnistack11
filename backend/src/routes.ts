import express from 'express'

import OngController from './controllers/OngController'
import IncidentsController from './controllers/IncidentsController'
import ProfileController from './controllers/ProfileController'
import SessionController from './controllers/SessionController'

const routes = express.Router()

/*
//QUERY PARAMS
routes.get('/users', (request, response) => {
    const query = request.query
    console.log(query)

    return response.json({
        "name": "test",
        "test": true
    })
})

//ROUTE PARAMS
routes.get('/users/:id', (request, response) => {
    const params = request.params
    console.log(params)

    return response.json({
        "name": "test",
        "test": true
    })
})

//BODY PARAMS
routes.post('/users', (request, response) => {
    const body = request.body
    console.log(body)

    return response.json({
        "name": "test",
        "test": true
    })
})
*/

//ONGS
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

//INCIDENTS
routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

//PROFILE
routes.get('/profile', ProfileController.index)

//SESSIONS
routes.post('/sessions', SessionController.create)

export default routes