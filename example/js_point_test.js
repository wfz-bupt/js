/*
var a=b=0; => var a =0; b=0;
所以a是局部变量，b是全局变量
*/
(function(){
	var a=b=0;
})();
//console.log(a);//a is not undefined
console.log(b);//
/*为string添加repeatify方法*/
String.prototype.repeatify = String.prototype.repeatify||function(num){
	var str = this;
	var result = '';
	for(var i=0; i<num; i++){
		result+=str;
	}
	return result;
}
console.log('hello'.repeatify(3));

/*
变量提升、函数提升
什么时候会变量提升？什么时候会函数提升？？
*/
var a,b;
(function(){
    alert(a);
    alert(b);
    var a=b=3;
    alert(a);
    alert(b);
})();
alert(a);
alert(b);
/*不会*/
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log(this.foo);  
        console.log(self.foo);  
        (function() {
            console.log(this.foo);  
            console.log(self.foo);  
        }());
    }
};
myObject.func();
