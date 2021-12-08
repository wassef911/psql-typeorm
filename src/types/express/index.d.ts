
import { JwtPayload } from '../JwtPayload';

declare global {
  namespace Express {
    export interface Request {
    }
    export interface Response {
      customSuccess(httpStatusCode: number, message: string, data?: any): Response;
    }
  }
}
