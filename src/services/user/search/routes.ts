import { Request, Response } from 'express';
import { checkSearchParams } from '../../../middleware/checks';
import { getUsersByName } from './SearchController';

export default [
  {
    method: 'get',
    path: '/users',
    handler: [
      checkSearchParams, // <-- this line
      async ({ query }: Request, res: Response) => {
        const result = await getUsersByName(query.q);
        res.status(200).send(result);
      }
    ]
  }
];
