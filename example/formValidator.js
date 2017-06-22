/*
表单验证类，可验证用户如下输入：
1.是否为空
2.手机号
3.邮箱
5.是否为数字
6.数字是否大于给定的最大值
7.数字是否小于给定的最小值
8.数字是否在给定的范围内
9.字符长度是否大于给定的最大长度
10.字符长度是否小于给定的最小长度
11.字符长度是否在给定范围内
*/
var regExp = {
    email: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
    phone: /^((\+?[0-9]{1,4})|(\(\+86\)))?(13[0-9]|14[57]|15[012356789]|17[03678]|18[0-9])\d{8}$/,
    url: /[a-zA-z]+:\/\/[^\s]/,
    number:/^[0-9]+$/,
    numLetterUnder: /^[0-9a-zA-Z_]+$/,
    chinese: /^[\u0391-\uFFE5]+$/,
};

function FormValidator(){

}
FormValidator.prototype = {
    /*
        功能：输入是否为手机号,如果是，则返回true
    */
    isPhone: function(value){
        return regExp.phone.test(String(value));
    },
    /*
        功能：输入是否为邮箱地址,如果是，则返回true
    */
    isEmail: function(value){
        return regExp.email.test(String(value));
    },
    /*
        功能：输入是否为网址,如果是，则返回true
    */
    isUrl: function(value){
        return regExp.url.test(String(value));
    },
    /*
        功能：输入是否为数字,如果是，则返回true
    */
    isNumber: function(value){
        return regExp.number.test(String(value));
    },
    /*
        功能：输入是否全是中文，如果是，则返回true
    */
    isChinese: function(value){
        return regExp.chinese.test(String(value));
    },
    /*
        功能：输入是否是数字字母下划线,如果是，则返回true
    */
    numLetterUnder: function(value){
        return regExp.numLetterUnder.test(String(value));
    },
    /*
        功能：如果输入的数字小于要求的最小值，则返回true
    */
    rangeUnderflow: function(value, min){
        if(this.isNumber(value) && typeof min == "number"){
            return Number(value) < min ;
        }else{
            throw Error('参数min必须为数字');
        }
    },
    /*
        功能：如果输入的值大于要求的最大值，则返回true
    */
    rangeOverflow: function(value, max){
        if(this.isNumber(value) && (typeof max === "number")){
            return Number(value) > max;
        }else{
            throw Error('参数max必须为数字');
        }
    },
    /*
        功能：如果输入的值在min到max之间，返回true
    */
    numRange: function(value, min, max){
        if(this.isNumber(value) && (typeof min === "number")&& (typeof max === "number")){
            return Number(value) <= max && Number(value) >= min;
        }else{
           throw Error('min和max必须为数字'); 
        }
    },
    /*
        功能：输入是否为空，只输入空格，包含在此范围内
    */
    notEmpty: function(value){
        return !(value.trim().length == 0);
    },
    /*
        功能：如果输入的字符串长度小于要求的最小长度，则返回true
    */
    tooShort: function(value, minLen){
        if(typeof value === "string" && typeof minLen === "number"){
            return value.length < minLen;
        }else{
            throw Error('输入参数不合法');
        }
    },
    /*
        功能：如果输入的字符串长度大于要求的最大长度，则返回true
    */
    tooLong: function(value, maxLen){
        if(typeof value === "string" && typeof maxLen === "number"){
            return value.length > maxLen;
        }else{
            throw Error('输入参数不合法');
        }
    },
    /*
        功能：如果输入的字符串长度在minLen和maxLen之间，则返回true
    */
    seqLenRange: function(value, minLen, maxLen){
        if(typeof value === "string" && typeof minLen == "number" && typeof maxLen === "number"){
            var length = value.length;
            return length <= maxLen && length >= minLen;
        }else{
            throw Error('输入参数不合法');
        } 
    },   
}