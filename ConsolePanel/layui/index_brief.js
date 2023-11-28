
layui.use(function(){
  var element = layui.element;
  var util = layui.util;
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
      element.tabDelete('test-handle', '44'); // 删除：“商品管理”
      othis.addClass('layui-btn-disabled');
    },
    tabChange: function(){
      // 切换到指定 tab 项
      element.tabChange('test-handle', '33'); // 切换到：标签3
    },
    tabAlert: function(){
      // 弹框
      alert('摸鱼任务测试成功')
    }
  });
});
