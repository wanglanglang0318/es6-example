import { foo } from './a.js'
// 提供接口， 可以访问到b.js 文件内容
console.log(foo)
setTimeout(() => {
    console.log(foo)
}, 500);