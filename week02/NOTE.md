# 每周总结可以写在这里
## 第一堂课：
### 乔姆斯基谱系
 - 0 无限制文法
 - 1 上下文相关
 - 2 上下文无关
 - 3 规则文法（正则）
### 产生式 BNF
  #### 加法定义
  ```
  <Number> := "0" | "1" | "2" | ..... | "9"
  <DecimalNumber> := "0" | (("1" | "2" | ..... | "9") <Number>* ) // 代表十进制
  // 连加/减
  <AdditiveExpression> := <MultiplicativeExpression> |
    <AdditiveExpression> "+" <MultiplicativeExpression> |
    <AdditiveExpression> "-" <MultiplicativeExpression>
  ```
  #### 乘法定义
  ```
  <Number> := "0" | "1" | "2" | ..... | "9"
  <DecimalNumber> := "0" | (("1" | "2" | ..... | "9") <Number>* )
  <MultiplicativeExpression> := <DecimalNumber> |
  <MultiplicativeExpression> "*" <DecimalNumber> |
  <MultiplicativeExpression> "/" <DecimalNumber>
  ```
  #### 其他
  ```
  <Number> := "0" | "1" | "2" | ..... | "9"
  <DecimalNumber> := "0" | (("1" | "2" | ..... | "9") <Number>* )
  <AdditiveExpression> := <MultiplicativeExpression> |
    <AdditiveExpression> "+" <MultiplicativeExpression> |
    <AdditiveExpression> "-" <MultiplicativeExpression>

  <MultiplicativeExpression> := <DecimalNumber> |
  <MultiplicativeExpression> "*" <DecimalNumber> |
  <MultiplicativeExpression> "/" <DecimalNumber>

  <LogicalExpression> := <AdditiveExpression> |
    <LogicalExpression> "||" <AdditiveExpression> |
    <LogicalExpression> "&&" <AdditiveExpression>

  <PrimaryExpression> := <DecimalNumber> |
    "(" <LogicalExpression> ")"
  // 演变
  <MultiplicativeExpression> := <PrimaryExpression> |
    <MultiplicativeExpression> "*" <PrimaryExpression> |
    <MultiplicativeExpression> "/" <PrimaryExpression>
  ```

### 动态与静态
  #### 动态
  - 运行阶段
  - 在用户设备或者在线服务器上
  #### 静态
  - 编译阶段
  - 在程序员的设备上
  #### 强类型语言
  - 无隐式转换
  #### 弱类型语言
  - 有隐式转换
## 第二堂课：
### unicode
#### 为什么需要编码
- 因为计算机只是存储识别0和1，我们输入的是乱七八糟的字符，必须把他们转换为计算机可以识别的语言，所以用编码；
#### ASCII码 128个
#### 非 ASCII 编码（英文用128个字符就够了，但是对于非英文，这远远不够）
#### Unicode
> Unicode 只是一个符号集，它只规定了符号的二进制代码，却没有规定这个二进制代码应该如何存储。
#### UTF-8
- UTF-8 就是在互联网上使用最广的一种Unicode的实现方式。其他实现方式还包括 UTF-16（字符用两个字节或四个字节表示）和 UTF-32（字符用四个字节表示）;
- UTF-8 最大的一个特点，就是它是一种变长的编码方式。它可以使用1~4个字节表示一个符号，根据不同的符号而变化字节长度。
- 对于单字节的符号，字节的第一位设为0，后面7位为这个符号的 Unicode 码。因此对于英语字母，UTF-8 编码和 ASCII 码是相同的。
- 对于n字节的符号（n > 1），第一个字节的前n位都设为1，第n + 1位设为0，后面字节的前两位一律设为10。剩下的没有提及的二进制位，全部为这个符号的 Unicode 码。
```
Unicode符号范围     |        UTF-8编码方式
(十六进制)        |              (二进制)
----------------------+---------------------------------------------
0000 0000-0000 007F | 0xxxxxxx
0000 0080-0000 07FF | 110xxxxx 10xxxxxx
0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
```
#### Unicode 与 UTF-8 之间的转换
## lexical grammer
### InputElement
> js中尽量使用 U+0000 to U+FFFF.
  - WhiteSpace //空格
    - TAB  制表符 \t 空白符
    - VT 纵向制表符 \v 空白符
    - FF FORM FEED (FF)
    - SP 普通空格 32
    - NBSP no-break space
    - ZWNBSP zero width no-break space
  - LineTerminator //换行符
    - LF U+000A line feed \n 换行
    - CR U+000D CARRIAGE RETURN \r 回车
    - LS U+2028 line separator 分行符 超出unicode编码之外
    - PS U+2029 paragraph separator 分段符 超出unicode编码之外
  - Comment //注释
    - 单行注释
    - 多行注释
  - Token
    ```
    var a = 1;
    var toBePrime = function () {
      return false;
    }
    {
      get aaa() {}
    }
    ```
    keywords和Punctuator是帮助代码形成结构的；
    Identifier和Literal是关键信息
    - Punctuator 符号 ; () {} =
    - IdentifierName
      - keywords 关键字 var return
      - Identifier 标识符 上边的 a；toBePrime;
        - 属性名
        - 变量名
      - future reserved keywords 例如：enum
    - Literal 字面量 1 false
      - Number
        - 二进制 0b
        - 八进制 0o
        - 十进制
        - 十六进制 0x
      - String
        - character 字符 a
        - code point 码点 97
        - encoding 01100001
        -----------------------
        - ascii
        - unicode
        - gb2312
        - gbk
        - iso-8859
        -----------------------
        - string-encoding
          - utf-8
          - utf-16
      - Boolean
      - Null
      - Undefined
      - Object
      - Symbol
