import {exec} from 'child_process';

export const runPythonScript = async (scriptName: string) => {
  return new Promise((resolve, reject) => {
    exec('python3' + ' python/' + scriptName, (err: any, stdout: unknown, stderr: any) => {
      if (err) reject(err);
      else if (stderr) reject(stderr);
      resolve(stdout);
    });
  });
};
