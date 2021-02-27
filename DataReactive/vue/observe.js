import Observer from './observer';

function observe (data) {
    // 判断是否为可用对象
    if (typeof data !== 'object' || data === null) return data; // 如何判断是否为可用对象  如果是基础变量直接返回
    return new Observer(data);
}

export default observe;
