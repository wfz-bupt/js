/*
js数值转换函数：Number、parseInt、parseFloat。
Number函数参数可以是任意类型的数据，而后两个函数参数必须是 字符串。

对象的valueOf和toString方法什么作用？

*/
function Number_parseInt_parseFloat(){
  Number('') = 0;
  parseInt('') = NAN;
  Number('ww22') = NAN;
  parseInt('A',16) = 11; //第二个参数为指定的解析的进制数，最佳实践：无论什么时候都要指定第二个参数。一般为10
  
}
