import { Request, Response } from 'express'

import Middleware from './Middleware'

export default class ListTransactionController extends Middleware {
  protected async execute(request: Request, response: Response): Promise<void> {
    const startAt = request.query.startAt as string
    const endAt = request.query.endAt as string

    await Promise.resolve(`[Mock] Fetch Transactions for ${startAt} until ${endAt}`)

    response.json({
      message: `Listing Transactions for ${startAt} until ${endAt}`,
    })
  }
}
