// 一个经典的promise函数
function ajax () {
  return new Promise((resolve, reject) => {
    // 异步操作
    const xhr = new XMLHttpRequest()
    xhr.open(url, 'get', true)
    xhr.send()

    // xhr.open(url, 'post', true)
    // xhr.send(data)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText)
        } else {
          reject(xhr.status)
        }
      }
    }
  })
}

// 自己实现一个简单的promise--支持链式调用
function Promisewfz(fnc) {
  const PENDING = Symbol()
  const FULLFILLED = Symbol()
  const REJECTED = Symbol()
  let data = null
  let state = PENDING
  let handler = {}
  function resolve(value) {
    state = FULLFILLED
    data = value
    handler(data)
  }
  function reject(err) {
    state = REJECTED
    data = err
    handler(data)
  }
  this.then = (cb) => {
    if (state === FULLFILLED) {
      cb(data)
    }
    if (state === PENDING) {
      handler = cb
    }
  }
  this.catch = function(cb) {
    if (state === REJECTED) {
      cb(data)
    }
    if (state === PENDING) {
      handler = cb
    }
  }
  fnc(resolve, reject)
}
let p = new Promisewfz((resolve, reject) => {
  setTimeout(() => {
    resolve('hello words')
  }, 1000)
})
p.then(data => {
  console.log(data)
})
// 给定一个promise数组，实现promise.all