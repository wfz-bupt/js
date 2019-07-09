0.登陆
0.1 登陆后用户信息的自动刷新
0.2 登陆后需要根据情况跳转到下一页或者返回到上一页，甚至返回到上2页

1.使用到了video、cover-view、cove-image原生组件，它的层级是高于任何普通组件的。性能也不是很好。
2.滑动：外观是封面image在滑动，因为小程序中原生组件的滑动性能很差。而且一个页面不能超过3个视频video组件。所有的image
按照竖着排列，按照手机的宽和高。然后用transform: translateY，来控制哪一个封面应该出现在视口。监听touchstart
touchmove和touchend事件
3.缓存：每滑动一下，就会填充需要缓存的3个视频URL，一般是当前视频的上一个或者下一个。缓存机制让滑动更流畅。
用到的video的属性和方法有：
videoContext = wx.createVideoContext
videoContext.play()
videoContext.pause()
autoplay
bindtimeupdate
bindplay
bindpause
遇到的问题：滑动不流畅、视频播放太慢
3.1 视频详情页的点赞（为什么会闪烁在ios上）、保存到本地
3.2 视频详情页和任务列表页的相互跳转

4.拍摄：
自定义camera
cameraContext = wx.createCameraContext()
// <camera device-positon="front back"></camera>
// 开始拍摄 30s后拿到封面的临时地址和临时视频地址
cameraContext.startRecord({
  timeoutCallback: function (tempThumPath, tempVideoPath) {
  },
  success: () {
  }
})
// 结束拍摄 成功后拿到临时封面地址和视频地址，这个视频很大
cameraContext.stopRecord({
  success: function (tempVideoPath, tempThumPath) {
  }
})
4.1 需要允许 摄像头和录音权限和保存到本地：
wx.authorize({
  scope: 'scope.record or scope.camera or scope.writePhotosAlbum'
})
// 要想视频的第一帧出来，并且兼容所有手机，必须用cover-image盖住
5.自定义导航条
导航条的高度为：无论安卓还是ios都是44px。最顶层的状态栏，通过
wx.getSystemInfo().statusBarHeight获取。
当带有自定义导航条的页面，需要滑动时，导航条和下面的滑动container的position必须为fixed。不然的话，安卓会出现
往上滑会出现白色空隙的问题。
6.上滑上拉刷新实现
// <scroll-view lower-threshold="45px" bindscrolltolower=""></scroll-view>
7.生命周期
onLoad onShow onHide onUnload
8.支付
wx.requestPayment
9.常用的api
路由：wx.switchTab wx.navigateTo wx.navigateBack wx.redirectTo
网络：wx.request 小程序并不会像浏览器那样做设置cookie的事情，所以，cookie写在response里
wx.downloadFile wx.uploadFile wx.chooseVideo wx.saveVideoToPhotosAlbum wx.saveImageToPhotosAlbum
wx.chooseAddress
10。常用的组件：
/**
<button open-type="getPhoneNumber or getUserInfo" bindgetphonenumber="" bindgetuserinfo=""></button>
**/

小程序原理-底层
https://segmentfault.com/a/1190000019131399
