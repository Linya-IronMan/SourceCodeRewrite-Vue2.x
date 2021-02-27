import { initState } from './init'

function Vue(options) {
    this._init(options);
}

Vue.prototype._init = function (options) {
    var vm = this; // new Vue 之后 生成的实例
    vm.$options = options;

    initState(vm);


}

export default Vue;
