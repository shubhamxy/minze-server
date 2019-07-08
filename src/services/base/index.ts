import { Request, Response, NextFunction } from 'express';

export default [
  {
    method: 'get',
    path: '/',
    handler: [
      async ({ query }: Request, res: Response) => {
        res.status(200).send('<h3>This works! , checkout Docs to know how to use this API.</h3>');
      }
    ]
  }
];