import { Request, Response } from 'express'

import Middleware from './Middleware'

export default class ShowTransactionController extends Middleware {
  protected async execute(request: Request, response: Response): Promise<void> {
    await Promise.resolve(`[Mock] Fetch Transaction by ID: ${request.params.transactionID}`)
    response.json({
      message: `Showing Transaction ${request.params.transactionID}`,
    })
  }
}
