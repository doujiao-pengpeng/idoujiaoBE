/**
 * 自定义admin模块控制器基类
 */
module.exports = class extends think.Controller {
  async __before() {
    console.log('-----------------------');
  }
};
