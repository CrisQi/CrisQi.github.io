function validateForm(){
  var x=document.forms["myForm"]["email"].value;
  var atpos=x.indexOf("@");
  var dotpos=x.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
	  //输入的数据必须包含 @ 符号和点号(.)。
	  //同时，@ 不可以是邮件地址的首字符，并且 @ 之后需有至少一个点号
    alert("不是一个有效的 e-mail 地址");
    return false;
  }
}
 function checkPwd() {
        var length = password.value.length
        if (length > 0) {//里面有内容
            //密码的大小应该在 6——10之间
            if (length >= 6 && length <= 10) {
				label.textContent = "正确"
                return true
            }
            //不在区间之内
            l2.textContent = "长度必须在6-10之间"
            return false
        }
        //里面没有内容
        l2.textContent = "长度必须大于0"
        return false
    }
