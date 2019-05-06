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

// 给定一个promise数组，实现promise.all