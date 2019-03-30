// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
const exec = require('child_process').exec;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
function execSave(app, arr) {
  app = app.trim();
  return new Promise((resolve, reject) => {
    exec(`heroku config:set ${arr.join(' ')}` + (app ? ` --app ${app}` : ''), (err, stdout, stderr) => {
      if (err) reject(err);
      else if (stderr) reject(stderr);
      else {
        if (stdout) console.log(stdout);
        resolve();
      }
    });
  });
}

function readDotEnv(options) {
  return new Promise((resolve, reject) => {
    fs.readFile('.env', 'utf8', (err, data) => {
      if (err) {
        reject('File not found or unreadable');
      } else {
        options.env = dotenv.parse(data);
        resolve(options);
      }
    });
  });
}

const regQuotes = /"/g;
function saveHerokuEnv(options) {
  return new Promise((resolve, reject) => {
    const arr = [];
    if (options.production) {
      options.env.NODE_ENV = 'production';
    }
    for (let i in options.env) {
      arr.push(`${i}="${options.env[i].replace(regQuotes, '\\"')}"`);
    }
    if (!options.app) options.app = '';
    options.app = options.app.split(' ');

    const promises = [];
    for (let i = options.app.length; i--; ) {
      promises.push(execSave(options.app[i], arr));
    }
    Promise.all(promises)
      .then(resolve)
      .catch(reject);
  });
}

readDotEnv({
  production: true
})
  .then(saveHerokuEnv)
  .then(console.log('success'))
  .catch(console.error);
