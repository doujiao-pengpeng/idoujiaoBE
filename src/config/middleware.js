const path = require('path');
const isDev = think.env === 'development';
const cors = require('kcors');
import jwtKoa from 'koa-jwt';

module.exports = [
  {
    handle: 'meta',
    options: {
      logRequest: isDev,
      sendResponseTime: isDev
    }
  },
  {
    handle: 'resource',
    enable: isDev,
    options: {
      root: path.join(think.ROOT_PATH, 'www'),
      publicPath: /^\/(static|favicon\.ico)/
    }
  },
  {
    handle: 'trace',
    enable: !think.isCli,
    options: {
      debug: isDev
    }
  },
  {
    handle: cors,
    options: {
      origin: (ctx) => {
        return ctx.header.origin;
      },
      credential: true,
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    }
  },
  {
    handle: 'payload',
    options: {}
  },
  {
    handle: 'router',
    options: {}
  },
  'logic',
  'controller',
  // {
  //   handle: jwtKoa,
  //   option: {}
  // }
];
