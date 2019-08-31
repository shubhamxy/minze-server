import {Request, Response} from 'express';
import config from '../../config';
import {runPythonScript} from '../../utils/python/runPythonScripts';

export default [
  {
    method: 'get',
    path: '/modelrun',
    handler: [
      async (req: Request, res: Response) => {
        try {
          const result = await runPythonScript('pypy.py');
          res.status(200).send(result);
        } catch (error) {
          res.status(500).send(config.DEBUG ? JSON.stringify(error) : 'Internal Server Error');
        }
      }
    ]
  }
];
