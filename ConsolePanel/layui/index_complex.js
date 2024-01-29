//注册sendMessageId按钮点击事件
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

//注册tk按钮点击事件
const tk = document.getElementById("tk");
if (tk) {
  tk.onclick = function() {
    //alert("123");
    result = aa("test");
    var iframeElement = document.getElementById("myiframe");
    var iframeDoc = iframeElement.contentDocument;// || iframeElement.contentWindow.document;
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

layui.use(function(){
  var layer = layui.layer;
  // 欢迎信息
  layer.msg('欢迎来到80年代', {icon: 6});

  var laydate = layui.laydate;
    // 日期
    laydate.render({
      elem: '#test2',
      value: new Date(),
      isInitValue: true
    });

  var form = layui.form;
  var util = layui.util;
  // 注册按钮的触发事件
  util.on('test-active', {
    'test-form': function(){
      layer.open({
        type: 1,
        resize: false,
        shadeClose: true,
        area: '350px',
        title: 'layer + form',
        content: ['<ul class="layui-form layui-form-pane" style="margin: 15px;">',
          '<li class="layui-form-item">',
            '<label class="layui-form-label">输入框</label>',
            '<div class="layui-input-block">',
              '<input class="layui-input" lay-verify="required" name="field1">',
            '</div>',
          '</li>',
          '<li class="layui-form-item">',
            '<label class="layui-form-label">选择框</label>',
            '<div class="layui-input-block">',
              '<select name="field2">',
                '<option value="A">A</option>',
                '<option value="B">B</option>',
              '<select>',
            '</div>',
          '</li>',
          '<li class="layui-form-item" style="text-align:center;">',
            '<button type="submit" lay-submit lay-filter="*" class="layui-btn">提交</button>',
          '</li>',
        '</ul>'].join(''),
        success: function(layero, index){
          layero.find('.layui-layer-content').css('overflow', 'visible');
          
          form.render().on('submit(*)', function(data){
            var field = data.field;
            
            // 显示填写的表单
            layer.msg(util.escape(JSON.stringify(field)), {
              icon: 1
            });
            // layer.close(index); //关闭层
          });
        }
      });
    }
  });

  var element = layui.element;
  // 普通事件
  util.on('lay-on', {
    tabAdd: function(){
      // 新增一个 tab 项
      var label = (Math.random()*1000|0); // 标记 - 用于演示
      element.tabAdd('test-handle', {
        title: '新选项'+ label,
        content: '内容-'+ label,
        id: new Date().getTime(), // 实际使用一般是规定好的id，这里以毫秒数模拟
        change: true // 是否添加完毕后即自动切换
      })
    },
    tabDelete: function(othis){
      // 删除指定 tab 项
      element.tabDelete('test-handle', 'tabcard4'); // 删除：“商品管理”
      othis.addClass('layui-btn-disabled');
    },
    tabChange: function(){
      // 切换到指定 tab 项
      element.tabChange('test-handle', 'tabcard3'); // 切换到：标签3
    }
  });

});

//请求数据
function aa(input)
{
  aar = "";
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

//页面内容初始化
function Init()
{
  result = aa("test");
  var iframeElement = document.getElementById("myiframe");
  var iframeDoc = iframeElement.contentDocument;// || iframeElement.contentWindow.document;
  str1 = result.stockBasicInfo[0]["date"];
  //iframeDoc.getElementById("thisp").innerHTML = str1;
  str2 = ""
  for(var i = 0; i < result.stockBasicInfo.length; i++)
  {
    str2 += "<tr>"+"<td>"+result.stockBasicInfo[i]["display_name"]+"</td><td>"+result.stockBasicInfo[i]["close"]+"</td><td>"+result.stockBasicInfo[i]["pchg"]+"%</td><td><a href=\"http://www.baidu.com\">op1</a></td>"+"</tr>"
  }
  
  iframeDoc.getElementById("thistable").innerHTML = str2;
}

//首次加载
window.onload = function() {
  Init();
}

