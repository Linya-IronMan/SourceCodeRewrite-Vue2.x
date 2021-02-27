import defineReactiveData from './reactive';
import { arrMethods } from './array';
import observeArr from './observeArr';

function Observer (data) {
    if (Array.isArray(data)) { // 判断数组的方式
        // 数组本身有七个方法，会更改原数组。但是我们不希望在原型上修改 而像push这些方法，会让数组新增一些值 对于这些值还需要响应式监控
        data.__proto__ = arrMethods;
        // 数组中的 某个元素 可能还是数组 那么就需要递归
        observeArr(data); 
    } else {
        // 如果不是数组 那么遍历它 data
        this.walk(data);
    }
}

Observer.prototype.walk = function(data) {
    var keys = Object.keys(data);

    for (var i = 0; i < keys.length; i ++) {
        var key = keys[i],
            value = data[key];

        // 对 data 中的 一个 key 做响应式操作
        defineReactiveData(data, key, value);
    }
}

export default Observer;

