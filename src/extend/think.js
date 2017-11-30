/**
 * 扩展全局think 对象
 */
const path = require('path');
module.exports = {
  baseController: {
    admin: require(path.join(think.ROOT_PATH, 'src', 'controller', 'baseController', 'admin'))
  }
};
