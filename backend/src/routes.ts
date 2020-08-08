import express from 'express'
import ClassController from './controllers/ClassController'

const routes = express.Router()

routes.post('/classes', ClassController.create)

export default routes
