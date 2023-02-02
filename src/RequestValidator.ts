import { Request, Response, NextFunction } from 'express'
import { AnyZodObject } from 'zod'
import Middleware from './Middleware'

export default class RequestValidator extends Middleware {
  private readonly schema: AnyZodObject

  constructor(schema: AnyZodObject) {
    super()
    this.schema = schema
  }

  protected async execute(request: Request, response: Response, next: NextFunction): Promise<void> {
    try {
      await this.schema.parseAsync({
        body: request.body as unknown,
        query: request.query,
        params: request.params,
      })
      next()
    } catch {
      response.status(400).json({
        message: 'Bad Request',
      })
    }
  }
}
