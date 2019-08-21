http协议和https协议
简述：http协议是服务端和客户端通信使用的协议，包括tcp和ip协议。
https是http协议的安全版，Hypertext Transfer Protocol Secure，最后的s的意思也是安全的意思。为什么比http协议安全呢？
1.https说一下过程

2.http和https有什么区别？
关于对称性加密、非对称加密、带证书的非对称加密通信https的详细介绍：https://juejin.im/post/5c889918e51d45346459994d
http有一些缺点：
i）报文不经过加密，明文传输
ii）通信双方不验证身份，有可能被伪装
iii）无法证明报文的完整性，数据有可能被篡改
s指的是ssl协议，在http和tcp协议之间加了一个ssl协议。
加密方法分为对称加密和非对称加密，对称加密指的是，客户端用密钥对资源加密后，服务器拿到资源用同样的密钥进行解密。

3.https在使用上有什么注意点？
4.http和https性能有什么区别？
5.说一下http的三次握手，中间发的什么字符串？？具体发的什么？？
6.http协议的有哪些方法
