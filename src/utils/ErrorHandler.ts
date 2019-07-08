import { NextFunction, Response } from 'express';
import { HTTP404Error, HTTPClientError } from '../utils/httpErrors';

export const notFoundError = () => {
  const message = '<h3> 404 Not Found</h3>';
  throw new HTTP404Error(message);
};

export const clientError = (err: Error, res: Response, next: NextFunction) => {
  if (err instanceof HTTPClientError) {
    // console.info(err);
    res.status(err.statusCode).send(err.message);
  } else {
    next(err);
  }
};

export const serverError = (err: Error, res: Response, next: NextFunction) => {
  // console.info(err);
  if (process.env.NODE_ENV === 'production') {
    res.status(500).send('Internal Server Error');
  } else {
    res.status(500).send(err.stack);
  }
};
