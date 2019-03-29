import { Request, Response } from 'express';

export default [
  {
    method: 'get',
    path: '/',
    handler: [
      async ({ query }: Request, res: Response) => {
        res.status(200).send('This works!, checkout Api-Docs to know how to use it.');
      }
    ]
  }
];
