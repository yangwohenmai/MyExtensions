layui.use('table', function(){
  var table = layui.table;
  
  // 渲染
  table.render({
    elem: '#ID-table-demo-setRowChecked',
    url: 'https://localhost:44396/MyExtension/GetJsonData', // 此处为静态模拟数据，实际使用时需换成真实接口
    page: true, 
    limits: [5, 10, 20, 30, 50]
            , method: 'get'//默认get
            , title: '房价列表',
    cols: [[
      // {type: 'radio', fixed: 'left'},
      {field:'id', title:'ID', width:80, fixed: 'left', unresize: true}//,
      //{field:'username', title:'用户', width:120},
      //{field:'sex', title:'性别', width:80},
      //{field:'city', title:'城市', width:100},
      //{field:'sign', title:'签名'},
      //{field:'experience', title:'积分', width:80, sort: true}
    ]]
    , done: function (res) {
                //获取数据完成后执行的区域，如提示获取完成等
                //如果是异步请求数据方式，res即为你接口返回的信息。
                //如果是直接赋值的方式，res即为：{data: [], count: 99} data为当前页数据、count为数据总长度
      i = 1
            }
            , request: {
                //原值为：?page=1&limit=30
                //修改后分页请求参数为：?curr=1&nums=30
                //pageName: 'curr' //页码的参数名称，默认为：page
                //, limitName: 'nums' //每页数据量的参数名，默认为：limit
            },

    toolbar: '#demo-toolbar-setRowChecked',
    initSort: { // 设置初始排序
      field: 'experience', // 字段名
      type: 'desc' // 倒序
    },
    height: 366
  });
  //ajax重新加载表格,内部调用法
        table.reload('ID-table-demo-setRowChecked');
  // 行单击事件( 双击事件为: rowDouble )
  table.on('row(ID-table-demo-setRowChecked)', function(obj){
    var data = obj.data; // 获取当前行数据
    
    // 显示 - 仅用于演示
    layer.msg('当前行数据：<br>'+ JSON.stringify(data), {
      offset: '65px'
    });
    // 标注当前点击行的选中状态
    obj.setRowChecked({
      type: 'radio' // radio 单选模式；checkbox 复选模式
    });
  });
  // 头工具栏事件
  table.on('toolbar(ID-table-demo-setRowChecked)', function(obj){
    var checkStatus = table.checkStatus(obj.config.id); //获取选中行状态
    switch(obj.event){
      case 'getCheckData':
        var data = checkStatus.data;  // 获取选中行数据
        layer.alert(JSON.stringify(data));  // 显示 - 仅用于演示
      break;
    };
  });
});

