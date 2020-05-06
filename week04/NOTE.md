# 每周总结可以写在这里
# 第一节课笔记：
# 宏任务 && 微任务：
- 我们把宿主发起的任务称为宏观任务，把 JavaScript 引擎发起的任务称为微观任务
# 事件循环：
```
模拟：
//GetInput
//等待用户从键盘输入一个数字，并返回该输入的数字
int GetInput(){
    int input_number = 0;
    cout<<"请输入一个数:";
    cin>>input_number;
    return input_number;
}

//主线程(Main Thread)
void MainThread(){
     for(;;){
          int first_num = GetInput()；
          int second_num = GetInput()；
          result_num = first_num + second_num;
          print("最终计算的值为:%d",result_num)；
      }
}
```
# 消息队列：
- 消息队列是一种数据结构，可以存放要执行的任务。它符合队列“先进先出”的特点，也就是说要添加任务的话，添加到队列的尾部；要取出任务的话，从队列头部去取。

# Promise:
- 解决了回调函数多层嵌套的问题；
- 解决了回调函数try catch 异常捕获问题；
- 解决了回调函数第三方包的不信任问题；
# async/await：
- async/await它的运行时基础是 Promise，async 函数必定返回 Promise，我们把所有返回 Promise 的函数都可以认为是异步函数；
generator/iterator 也常常被跟异步一起来讲，我们必须说明 generator/iterator 并非异步代码，只是在缺少 async/await 的时候，一些框架（最著名的要数 co）使用这样的特性来模拟 async/await。
# setTimeout：
- 如果当前任务执行时间过久，会影响定时器任务的执行；
```
function bar() {
    console.log('bar')
}
function foo() {
    setTimeout(bar, 0);
    for (let i = 0; i < 5000; i++) {
        let i = 5+8+8+8
        console.log(i)
    }
}
foo()
通过 setTimeout 设置的回调任务被放入了消息队列中并且等待下一次执行，这里并不是立即执行的；要执行消息队列中的下个任务，需要等待当前的任务执行完成，由于当前这段代码要执行 5000 次的 for 循环，所以当前这个任务的执行时间会比较久一点。这势必会影响到下个任务的执行时间。
```
- 延时执行时间有最大值
```
Chrome、Safari、Firefox 都是以 32 个 bit 来存储延时值的，32bit 最大只能存放的数字是 2147483647 毫秒，这就意味着，如果 setTimeout 设置的延迟值大于 2147483647 毫秒（大约 24.8 天）时就会溢出，那么相当于延时值被设置为 0 了，这导致定时器会被立即执行。你可以运行下面这段代码：
function showName(){
  console.log("极客时间")
}
var timerID = setTimeout(showName,2147483648);//会被理解调用执行
```
- 未激活的页面，setTimeout 执行最小间隔是 1000 毫秒
```
未被激活的页面中定时器最小值大于 1000 毫秒，也就是说，如果标签不是当前的激活标签，那么定时器最小的时间间隔是 1000 毫秒，目的是为了优化后台页面的加载损耗以及降低耗电量。
```