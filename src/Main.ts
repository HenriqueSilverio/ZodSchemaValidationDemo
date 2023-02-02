import express, { Request, Response } from 'express'

import RequestValidator from './RequestValidator'

import AddNewTransactionController from './AddNewTransactionController'
import AddNewTransactionSchema from './AddNewTransactionSchema'

import ShowTransactionController from './ShowTransactionController'
import ShowTransactionSchema from './ShowTransactionSchema'

import ListTransactionController from './ListTransactionController'
import ListTransactionSchema from './ListTransactionSchema'

const server = express()

const addNewTransactionValidator = new RequestValidator(AddNewTransactionSchema)
const addNewTransactionController = new AddNewTransactionController()

const listTransactionValidator = new RequestValidator(ListTransactionSchema)
const listTransactionController = new ListTransactionController()

const showTransactionValidator = new RequestValidator(ShowTransactionSchema)
const showTransactionController = new ShowTransactionController()

server.use(express.json())

server.use(express.urlencoded({ extended: true }))

server.get('/', (request: Request, response: Response): void => {
  response.json({
    message: "Hello, from Zod's Demo",
  })
})

server.post(
  '/transactions',
  addNewTransactionValidator.handler(),
  addNewTransactionController.handler(),
)

server.get(
  '/transactions',
  listTransactionValidator.handler(),
  listTransactionController.handler(),
)

server.get(
  '/transactions/:transactionID',
  showTransactionValidator.handler(),
  showTransactionController.handler(),
)

server.listen(3080, () => {
  console.log('🚀 Listening at http://localhost:3080...')
})
