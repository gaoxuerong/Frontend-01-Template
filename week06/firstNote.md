# 总结
# 有限状态机
## js中有限状态机（mealy）
// 每个函数都是一个状态
function state(input) {
  // 函数参数就是输入
  // 在函数中可以自由的编写代码处理每个状态的逻辑
  return next； //返回值作为下一个状态
}
// 以下是调用
while(input){
  // 获取输入
  state = state(input);// 把状态机的返回值作为下一个状态
}
## KMP算法
详见： https://www.bilibili.com/video/BV1Px411z7Yo?from=search&seid=6403308575501789708
- 是很著名的字符串匹配算法，效率很高，但是很复杂；
# 解析html
- 拆解token，一一匹配