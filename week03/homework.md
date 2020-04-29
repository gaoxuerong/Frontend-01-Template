# 第一堂课作业：
 ## convertStringToNumber：
 ```
  // string 输入的字符串
  // x 进制
  function stringToNumber (string, x = 10) {
    if (x > 10) {
      return
    }
    let flag = /e|E/.test(string);
    if (!flag) {
      let chars = string.split('')
      let number = 0
      let i = 0
      while (i < chars.length && chars[i] !== '.') {
        number = number * x
        number += chars[i].codePointAt(0) - '0'.codePointAt(0)
        i++
      }
      if (chars[i] === '.) {
        i++
      }
      let smallNumber = 1
      while (i < chars.length) {
        smallNumber = smallNumber / x
        number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * smallNumber
        i++
      }
      return number;
    } else {
      let logNumber = Number(string.match(/\d+$/)[0]);
      let number = string.match(/^[\d\.]+/)[0].replace(/\./, '');
      if (/e-|E-/.test(string)) {
        return Number(number.padEnd(logNumber + 1, 0));
      } else {
        return Number(number.padStart(logNumber + number.length, 0).replace(/^0/, '0.'));
    }
    }
  }
  ```
 ## convertNumberToString：
 ```
 // number 输入的数字
 // x 进制
  function numberToString (number, x) {
    let int = Math.floor(number)
    let smallNumber = String(number).match(/\.\d+$/);
    if (smallNumber) {
      smallNumber = smallNumber[0].replace('.', '');
    }
    let string = ''
    while (int > 0) {
      string = String(int % x) + string
      int = Math.floor(int / x)
    }
    return smallNumber ? `${string}.${smallNumber}` : string;
  }
  ```
# 第二堂课作业：
# 哪些对象是无法识别的：
```
- Bound Function Exotic Objects
- Array Exotic Objects
- String Exotic Objects
- Arguments Exotic Objects
- Integer-Indexed Exotic Objects
- Module Namespace Exotic Objects
- Immutable Prototype Exotic Objects
- Proxy Object Internal Methods and Internal Slots
```