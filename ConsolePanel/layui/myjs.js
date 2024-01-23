const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
    sendMessageId.onclick = function() {
        alert("123");
        str = aa("test");
        alert(str);
        str = aa("test1");
        alert(str);
    };
}

const tk = document.getElementById("tk");
if (tk) {
    tk.onclick = function() {
        alert("123");
        str = aa("test");
        alert(str);
        str = aa("test1");
        alert(str);
        //$ = layui.$;
        //$("#thisp").html("")
    };
}

function aa(input)
{
  aar = "11";
    $ = layui.$;
    $.ajax({
        url: 'https://localhost:44396/MyExtension/GetJsonData',//后端数据接口
        //url: 'http://101.133.226.60:5000/MyExtension/GetJsonData',//后端数据接口
        type: 'GET',//请求类型
        dataType: 'json',//返回数据类型
        async: false,
        success: function(res) {//回调函数
            //setTimeout(alert("sleep"),1000);
            //将数据绑定到表格中
            alert(res.msg);
            var b = res;
          aar = input + ":" + res.msg;
          var iframeElement = document.getElementById("myiframe");
          var iframeDoc = iframeElement.contentDocument || iframeElement.contentWindow.document;
          iframeDoc.getElementById("thisp").innerHTML = res.stockBasicInfo[0]["open"];
          //return aa;
        }
    });
    return aar;
}
