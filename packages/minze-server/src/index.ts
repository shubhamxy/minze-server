import './utils/logging';
import server from './server';
import config from './config';

process.on('unhandledRejection', (reason, p) => {
  console.error(reason, 'Unhandled Rejection at Promise', p);
});

process.on('uncaughtException', err => {
  console.error(err, 'Uncaught Exception thrown');
  process.exit(1);
});

const { PORT = 3000 } = config.ENV_VARS;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
