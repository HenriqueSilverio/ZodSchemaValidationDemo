import {
  NextFunction, Request, RequestHandler, Response,
} from 'express'

export default abstract class Middleware {
  protected abstract execute(
    request: Request, response: Response, next?: NextFunction
  ): Promise<void> | void

  public handler(): RequestHandler {
    return (request: Request, response: Response, next: NextFunction): void => {
      Promise.resolve(this.execute(request, response, next))
        .catch(next)
    }
  }
}
