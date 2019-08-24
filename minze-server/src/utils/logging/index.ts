import {logger} from './winston';

console.log = args => logger.log({level: 'debug', message: args});

['info', 'warn', 'error'].forEach(method => {
  console[method] = args => logger[method](args);
});
