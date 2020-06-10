# 每周总结：
# animation
```
@keyframes 定义
@keyframes myanimation {
  from
  {
    background: #f00;
  }
  to
  {
    background: #ff0;
  }
}
div {
  animation: myanimation 5s infinite;
}
```
- keyframes
- animation-name
- animation-duration
- animation-timing-function
- animation-delay
- animation-iteration-count
- animation-direction
# transition
# transform
# timing-function 贝塞尔曲线
--------------------------------------------
# getComputedStyle(document.body);
得到 CSSStyleDeclaration；
# browser
## dom
- domtree
- events
-range
## CSSOM
## BOM
# NODE
- Element 元素型节点
- Document 文档根节点
- Character 字符数据;包括文本节点/注释/处理信息
- DocumentFragment 文档片段
- DocumentType 文档类型
# 修改操作
appendChild
removeChild
replaceChild
insertBefore
# 高级操作
- compareDocumentPosition 用于比较两个节点关系的函数
- contains 检查一个节点是否包含另外一个节点
- isEqualNode 检查两个节点是否完全相同
- isSameNode 检查两个节点是否是同一个节点 实际可以在JS中用===去判断
- cloneNode 复制一个节点 如果参数为true