import { Request, Response } from 'express'

import Middleware from './Middleware'

export default class AddNewTransactionController extends Middleware {
  protected async execute(request: Request, response: Response): Promise<void> {
    await Promise.resolve('[Mock] Creates and persist a new Transaction.')
    response.json({
      message: 'New Transaction Created',
    })
  }
}
