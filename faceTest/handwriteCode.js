手写代码部分
// 一.对象的深度拷贝
function copyDeep (obj, res) {
  for (key in obj) {
    if (obj[key] instanceof Object) {
      res[key] = {}
      copyDeep(obj[key], res[key])
    } else {
      res[key] = obj[key]
    }
  }
  return res
}

// 二、动态规划类算法,从字眼判断可不可以用动态规划，一般来说，有最大，最小，最多，一个最字，代表最优解，都可以用。
// 然后找关系，一般来说，都是一个一维dp数组或者二维dp[][]数组，依次填满dp的过程。一般来说，数组后面的值由前面的
// 的值构成。所以，按照这个思路，关系的形式大概为
dp[0] = 0/1
dp[1] = 2
dp[2] = 1 + dp[0] + dp[1] 或者max(dp[0], dp[1])或者max(输入＋dp[0], dp[1])
然后写
dp[n] = 1 + dp[n-1] + dp[n-2]或者 或者
最后
写代码，如果是一维数组，则是个单层循环, 循环的过程是求dp的过程
for (var i = 0; i < n; i++) {

}
如果是二维数组，则是个二层循环，优先考虑一阶

1.给定一个数组a和一个长度值l，生成一个指定长度值为l的新数组b，
要求b中的每一个元素都是从a中随机获取的，且数组元素不可重复。

1.随机从0-a.length-1中取出一个数字，取出对应的值到新数组中
2.把选中的成员从数组中去掉，重复1步骤，如果新的数组长度等于l了，则退出

function getRandomIndex(arr) {
  var randomIndex = Math.random() * (arr.length - 1)
  return randomIndex
}
function getLarr (arr) {
  var res = []
  if (arr.length > l) {
    while (res.length < l) {
      var randomIndex = getRandomIndex(arr)
      res.push(arr[randomIndex])
      arr.splice(randomIndex, 1)
    }
  }
  return res
}
2.使用js写一个栈结构。然后如何让这个栈满足两个调用者同时使用的要求？
栈：先进后出，有pop和push
var arr = []
arr.push(3)
arr.pop(3)
arr就是一个栈结构，只要只使用push和pop就行

1.斐波那契数列

2.找到出现次数超过一半的数

3.还有就是rob leetcode的195那道dp 总的来说非常简单 尽量在1个小时以内完成 面试官很nice 

4.一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
dp[n] = dp[n-1] + dp[n-2]
dp[0] = 0
dp[1] = 1
dp[2] = 2
function jump (n) {
  var dp = []
  if (n == 0) {
    return 0
  }
  if (n == 1) {
    return 1
  }
  if (n == 2) {
    return 2
  }
  for (var i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var dp = []
    if (nums.length == 0) { 
        return 0
    }
    if (nums.length == 1) {
        return nums[0]
    }
    if (nums.length ==2) {
        return Math.max(nums[0],nums[1])
    }
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (var i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
    }
    return dp[nums.length-1]
};


// 猿辅导
1.实现一个音乐播放器。仿照qq音乐。
2.用递归和非递归的方式求计算二叉树的深度
3.用setTimeout实现setInterval

