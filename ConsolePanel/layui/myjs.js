
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
        //alert("123");
        result = aa("test");
        var iframeElement = document.getElementById("myiframe");
        var iframeDoc = iframeElement.contentDocument || iframeElement.contentWindow.document;
        str1 = result.stockBasicInfo[0]["date"];
        iframeDoc.getElementById("thisp").innerHTML = str1;
        //iframeDoc.getElementById("thistable").innerHTML = str1;
        str2 = ""
        for(var i = 0; i < result.stockBasicInfo.length; i++)
        {
          str2 += "<tr>"+"<td>"+result.stockBasicInfo[i]["display_name"]+"</td><td>"+result.stockBasicInfo[i]["close"]+"</td><td>"+result.stockBasicInfo[i]["pchg"]+"%</td>"+"</tr>"
        }
        
        //str2 = "<tr>"+"<td>"+result.stockBasicInfo[0]["display_name"]+"</td><td>"+result.stockBasicInfo[0]["close"]+"</td><td>"+result.stockBasicInfo[0]["pchg"]+"%</td>"+"</tr>"
        //      +"<tr>"+"<td>"+result.stockBasicInfo[1]["display_name"]+"</td><td>"+result.stockBasicInfo[1]["close"]+"</td><td>"+result.stockBasicInfo[1]["pchg"]+"%</td>"+"</tr>"
        
        iframeDoc.getElementById("thistable").innerHTML = str2;
        //$ = layui.$;
        //$("#thistable").html(str2);
        //iframeDoc.getElementById("thisp").innerHTML = result.stockBasicInfo[0]["open"];
        //alert("finish");
        //str = aa("test1");
        //alert(str);
        //$ = layui.$;
        //$("#thisp").html("")
    };
}





function aa(input)
{
  aar = "11";
  result = "";
  $ = layui.$;
  $.ajax({
      //url: 'https://localhost:44396/MyExtension/GetJsonData',//后端数据接口
      url: 'http://101.133.226.60:5000/MyExtension/GetJsonData',//后端数据接口
      type: 'GET',//请求类型
      dataType: 'json',//返回数据类型
      async: false,
      success: function(res) {//回调函数
        //setTimeout(alert("sleep"),1000);
        //将数据绑定到表格中
        //alert(res.msg);
        aar = input + ":" + res.msg;
        //var iframeElement = document.getElementById("myiframe");
        //var iframeDoc = iframeElement.contentDocument || iframeElement.contentWindow.document;
        //iframeDoc.getElementById("thisp").innerHTML = res.stockBasicInfo[0]["open"];
        result = res
      }
  });
  return result;
}

window.onload = function() {
  result = aa("test");
  var iframeElement = document.getElementById("myiframe");
  var iframeDoc = iframeElement.contentDocument || iframeElement.contentWindow.document;
  str1 = result.stockBasicInfo[0]["date"];
  iframeDoc.getElementById("thisp").innerHTML = str1;
  str2 = ""
  for(var i = 0; i < result.stockBasicInfo.length; i++)
  {
    str2 += "<tr>"+"<td>"+result.stockBasicInfo[i]["display_name"]+"</td><td>"+result.stockBasicInfo[i]["close"]+"</td><td>"+result.stockBasicInfo[i]["pchg"]+"%</td>"+"</tr>"
  }
  
  iframeDoc.getElementById("thistable").innerHTML = str2;
}

