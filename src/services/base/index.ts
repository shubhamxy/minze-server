import {Request, Response} from 'express';
import config from '../../config';
import {runPythonScript} from '../../utils/python/runPythonScripts';

export default [
  {
    method: 'get',
    path: '/',
    handler: [
      async ({query}: Request, res: Response) => {
        res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title>Status: Online</title>
          </head>
          <body
            style="width: 100vw; height: 100vh; background-color: #eeeeee; display: flex; flex-direction: column"
          >
            <div>
              <h2>
                Server is online, try <a href="/playground">playground!</a> for
                documentation.
              </h2>
            </div>
          </body>
        </html>
        `);
      }
    ]
  }
];
