import observe from "./observe";

function defineReactiveData(data, key, value) {
    // vm._data.key 的值==》 value 可能还是一个对象 执行递归操作。
    observe(value) // 能到这里 说明value 一定是对象 需要对对象再进行一次
    Object.defineProperty(data, key, {
        get() {
            console.log('响应式数据：获取', value)
            return value;
        },
        set(newValue) {
            console.log('响应式数据：设置', newValue);
            if (newValue === value) return; // 这个表示什么都不做
            observe(newValue);
            value = newValue;
        }
    })
}

export default defineReactiveData;