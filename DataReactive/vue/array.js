import { ARR_METHODS } from './config';
import observeArr from './observeArr'

var originArrMethods = Array.prototype,
    arrMethods = Object.create(originArrMethods);

ARR_METHODS.map(function(m) {
    arrMethods[m] = function() {
        // 将接收的参数 变成 数组
        var args = Array.prototype.slice.call(arguments),
        // 
        rt = originArrMethods[m].apply(this, args);
        console.log(this, '111111111');

        var newArr;
// 以数组的形式 将新增的项拿出来。
        switch (m) {
            case 'push':
            case 'unshift':
                newArr = args;
                break;
            case 'splice': // arr.splice(startNum, deleteCount, newItem)
                newArr = args.slice(2); //  获取到 可能存在的 newItem 项
                break;
            default:
                break;
        }

        newArr && observeArr(newArr);
        return rt;
    }
})


export {
    arrMethods
}