var _koaJwt = require('koa-jwt');

var _koaJwt2 = _interopRequireDefault(_koaJwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = require('path');
const isDev = think.env === 'development';


module.exports = [{
  handle: 'meta',
  options: {
    logRequest: isDev,
    sendResponseTime: isDev
  }
}, {
  handle: 'resource',
  enable: isDev,
  options: {
    root: path.join(think.ROOT_PATH, 'www'),
    publicPath: /^\/(static|favicon\.ico)/
  }
}, {
  handle: 'trace',
  enable: !think.isCli,
  options: {
    debug: isDev
  }
}, {
  handle: 'payload',
  options: {}
}, {
  handle: 'router',
  options: {}
}, 'logic', 'controller'];
//# sourceMappingURL=middleware.js.map