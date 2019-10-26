import {NextFunction, Request, Response, Router} from 'express';
import * as ErrorHandler from '../utils/errors/ErrorHandler';

/**
 * Note: These paths are graphql-yoga paths that does'nt need error handling but
 *       somehow reaches this part of the code; leading to resending the response
 *       from server.
 * TODO: Find a better solution to do this
 */

/* Both GET and POST */
const IgnorePaths = ['/playground'];

/* Ignore POST request on these paths */
const IgnorePostPaths = ['/graphql'];

const handle404Error = (router: Router) => {
  router.use((req: Request, res: Response, next: NextFunction) => {
    let test = true;
    IgnorePaths.forEach(item => {
      if (req.path.startsWith(item)) {
        test = false;
      }
    });
    if (req.method === 'post') {
      IgnorePostPaths.forEach(item => {
        if (req.path.startsWith(item)) {
          test = false;
        }
      });
    }
    if (test) ErrorHandler.notFoundError();
  });
};

const handleClientError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.clientError(err, res, next);
  });
};

const handleServerError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.serverError(err, res, next);
  });
};

export default [handle404Error, handleClientError, handleServerError];
