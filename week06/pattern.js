// 使用状态机匹配abcabx；
function match1(string) {
  let state = start
  for (let char of string) {
    state = state(char)
  }
  return state === end
}
function start(char) {
  if (char === 'a') {
    return findA
  }
  else {
    return start
  }
}
function end() {
  return end
}
function findA(char) {
  if (char === 'b') {
    return findB
  }
  else {
    return start(char)
  }
}
function findB(char) {
  if (char === 'c') {
    return findC
  }
  else {
    return start(char)
  }
}
function findC(char) {
  if (char === 'a') {
    return findA2
  }
  else {
    return start(char)
  }
}
function findA2(char) {
  if (char === 'b') {
    return findB2
  }
  else {
    return start(char)
  }
}
function findB2(char) {
  if (char === 'x') {
    return end
  }
  else {
    return findB(char)
  }
}
match1('jfngjfnj abcabx') // true

// 使用状态机匹配abababx的处理；
function match2(string) {
  let state = start
  for (let char of string) {
    state = state(char)
  }
  return state === end
}
function start(char) {
  if (char === 'a') {
    return findA
  }
  else {
    return start
  }
}
function end() {
  return end
}
function findA(char) {
  if (char === 'b') {
    return findB
  }
  else {
    return start(char)
  }
}
function findB(char) {
  if (char === 'a') {
    return findA2
  }
  else {
    return start(char)
  }
}
function findA2(char) {
  if (char === 'b') {
    return findB2
  }
  else {
    return start(char)
  }
}
function findB2(char) {
  if (char === 'a') {
    return findA3
  }
  else {
    return start(char)
  }
}
function findA3(char) {
  if (char === 'b') {
    return findB3
  }
  else {
    return start(char)
  }
}
function findB3(char) {
  if (char === 'x') {
    return end
  }
  else {
    return findB2(char)
  }
}
match2('abababx')
// 使用状态机处理完全未知的pattern；参考kmp算法；
//......