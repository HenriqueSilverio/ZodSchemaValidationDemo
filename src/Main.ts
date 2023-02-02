import express, { Request, Response } from 'express'

const server = express()

server.use(express.json())

server.use(express.urlencoded({ extended: true }))

server.get('/', (request: Request, response: Response): void => {
  response.json({
    message: "Hello, from Zod's Demo",
  })
})

server.listen(3080, () => {
  console.log('🚀 Listening at http://localhost:3080...')
})
