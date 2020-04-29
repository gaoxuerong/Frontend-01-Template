# 每周总结可以写在这里
## 第一堂课
## expression 表达式
### grammar 语法
- grammar tree vs priority
  - 表达式树的方式表示优先级;优先级：Member > New > call expression;
- left Handside:等号左边
- right Handside:等号右边
-  update 自增
- 一元的
  - detele a.b
  - void foo()
  - typeof a
  - +a
  - -a
  - ~a
  - !a
call expression
### 装箱/拆箱
#### 装箱
> 基础类型 =》包装类型（Number，String，Boolean）
#### 拆箱
> Object => 基础类型 （symbol.toPrimitive() 优先级最高；没有toPrimitive的话，会走默认的toPrimitive，其中：valueOf 优先于tostring；）
#### 类型的判断
- typeof
- instanceof
- Object.prototype.toString.call()
### runtime 运行时
#### 隐式转换发生的场景
- Left Handside Right Handside
> 左右取值，转换为原始值，如果转换后的值存在string, 则进行toString后拼接。否则按toNumber处理
- ==
> 优先按照number处理
- if
> 优先按照boolean处理
- 数学运算符
> 优先转换非number为number
# 第二堂课
## 语句
### 简单语句
#### expression statement 表达式语句
  > a = 1+2; 运算的
#### empty statement 空语句
  > ;
#### debugger statement
> 不产生任何效果；做debugger用的；给js引擎用的；
#### throw statement
  > throw a;throw new Error()
#### continue statement
  > continue;
#### break statement
  > break;
#### return statement
  > return 1+2;return true;
### 复合语句
#### BlockStatement
#### If Statement
#### Switch Statement
#### Iteration Statement
  - while
  - do while
  - for(;;)
  - for(of)
  - for(in)
#### With Statement
#### Labelled Statement
#### Try Statement
### 声明
#### Function Declaration
#### Generator Declaration
#### AsyncFunction Declaration
#### AsyncGenerator Declaration
#### Variable Statement
#### Class Declaration
#### Lexical Declaration
### runtime
#### completion record
  - [[type]] normal break contiue return or throw
  - [[value]] Types
  - [[target]] label
#### lexical enviroment
#### 对象的三要素
  - 唯一性
  - 状态 (属性)
  - 行为 (方法)