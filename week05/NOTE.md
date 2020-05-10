# 每周总结可以写在这里
# Execution context 要有一个大体的框架
- realm：
- 宏任务：
- 微任务：
- 函数调用：
- 语句/声明：
- 表达式：
- 直接量/变量/this：
# js对象分类：
- 宿主对象 host Objects 由宿主环境决定
  - 固有的 new Image()
  - 用户可创建的 document.creatElement()就可以创建对象
- 内置对象 Built-in Objects 由js语言决定
  - 固有对象 由标准决定，在运行时阶段创建的
  获取全部 JavaScript 固有对象:
  ```
  var set = new Set();
  var objects = [
    eval,
    isFinite,
    isNaN,
    parseFloat,
    parseInt,
    decodeURI,
    decodeURIComponent,
    encodeURI,
    encodeURIComponent,
    Array,
    Date,
    RegExp,
    Promise,
    Proxy,
    Map,
    WeakMap,
    Set,
    WeakSet,
    Function,
    Boolean,
    String,
    Number,
    Symbol,
    Object,
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError,
    ArrayBuffer,
    SharedArrayBuffer,
    DataView,
    Float32Array,
    Float64Array,
    Int8Array,
    Int16Array,
    Int32Array,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Uint8ClampedArray,
    Atomics,
    JSON,
    Math,
    Reflect
  ];
  objects.forEach(o => set.add(o));
  for(var i = 0; i < objects.length; i++) {
    var o = objects[i]
    for(var p of Object.getOwnPropertyNames(o)) {
        var d = Object.getOwnPropertyDescriptor(o, p)
        if( (d.value !== null && typeof d.value === "object") || (typeof d.value === "function"))
            if(!set.has(d.value))
                set.add(d.value), objects.push(d.value);
        if( d.get )
            if(!set.has(d.get))
                set.add(d.get), objects.push(d.get);
        if( d.set )
            if(!set.has(d.set))
                set.add(d.set), objects.push(d.set);
    }
  }
  ```
  - 原生对象
      |基本类型      |基础功能和数据结构       |错误类型        |二进制操作         |带类型的数组           |
      |-------------|----------------------|--------------|-----------------|-------------------- |
      |String       |Array                 |Error         |ArrayBuffer      |Float32Array         |
      |Object       |Date                  |TypeError     |DataView         |Float64Array         |
      |Number       |Promise               |ReferenceError|SharedArrayBuffer|Int8Array            |
      |Boolean      |Proxy                 |SyntaxError   |                 |Int16Array           |
      |Symbol       |Map                   |RangeError    |                 |Int32Array           |
      |             |WeakMap               |EvalError     |                 |UInt8Array           |
      |             |Set                   |URIError      |                 |UInt16Array          |
      |             |WeakSet               |              |                 |UInt32Array          |
      |             |Function              |              |                 |UInt8ClampedArray    |
      |             |RegExp                |              |                 |                     |
  > 通过这些构造器，我们可以用 new 运算创建新的对象，所以我们把这些对象称作`原生对象`.这些字段使得原型继承方法无法正常工作,可以认为所有这些原生对象都是为了特定能力或者性能，而设计出来的“特权对象”
  - 普通对象 由{} 或者 class 或者 new () 创建的
# 用对象来模拟函数与构造器：函数对象与构造器对象
  - 函数对象: 具有[[call]]私有字段的对象
  - 构造器对象: 具有私有字段[[construct]]的对象
# realm：
## Q：realm是什么？
> A: realm 可以看成是装了一堆内置对象的盒子
## Q：reaml有什么作用？
> A: 没有realm就没有内置对象可以用了，所以realm作用重要性不言而喻；
## Q：realm和js宿主对象和js引擎对象有什么关系？
> A: realm 一般指的是 js引擎对象
## Q：正则也是realm吗？
> A: 是的
## realm
- 在js中函数表达式和对象直接量都会创建对象
  - var f = function() {}
  - var cla = class{}
- 使用. 做隐式转换也会创建对象
  - 1 .toString()
> 这些对象也是有原型的，如果我们没有realm，就不知道他们的原型是什么
```
iframe.contentWindow.eval("this.o = {}")
var oo = iframe.contentWindow.o
Object.getPrototpye(oo) === Object.prototpye // false 因为不是同一个realm
```
# 浏览器
## 简单表述：
### url--(http)---->html---(parse)--->DOM---(css computing)--->DOM with CSS--(layout)---->DOM with position--(render)---->Bitmap
## 7层网络模型
### ip
- 包
- ip地址
- libnet/libpcap
### tcp
- 流
- 端口
- require('net')