import proxyData from './proxy'
import observe from './observe'

function initState (vm) {
    var options = vm.$options;

    if (options.data) {
        initData(vm);
    }
}

function initData (vm) {
    var data = vm.$options.data;
    
    // 挂载的时候 希望是 一个临时的Data 保留用户原本的Data
    // 为什么 这里使用 data.call(vm)?
    /*
    * data会返回一个对象，这个对象中都是要用到的数据
    * 两个目的
    * 1. 在函数中可以直接通过this.访问到data中的一些数据
    * 2. 保留用户原本的Data 在临时的data上面进行修改
    * 3. 可以直接通过 vue 的实例 访问到 data中的数据  vm.title 
    */
   // 感觉不使用 data.call(vm) 直接 data() 目前也没有差别
    data = vm._data = typeof data === 'function' ? data.call(vm) : data || {};

    // 将 vm.key 这种方式访问的值 代理到 vm._data.key 上。
    for (var key in data) {
        proxyData(vm, '_data', key)
    }

    // ============  开始做响应式  =======
    observe(data)

}

export {
    initState
}