var $userRegularPanel= function() {
  var $userDOM= $(''
  	    +'<h2>门店列表</h2>'
        +'<div class="back-home-panel">' 
           +'<table cellspacing="0">'
             +'<tr>'
               +'<th></th>'
               +'<th>用户ID</th>'
               +'<th>用户昵称</th>'
               +'<th>门店ID</th>'
               +'<th>邮箱</th>'
               +'<th>联系方式</th>'
               +'<th>操作</th>'
            +'</tr>'
            +'<tr> '
               +'<td><input type="checkbox"></td>'
               +'<td>2352513</td>'
               +'<td>小尤</td>'
               +'<td>1</td>'
               +'<td>XXXXXXXXXX@qq.com</td>'
               +'<td>157XXXXXXXX</td>'
               +'<td>'
                   +'<button class="user-del">编辑</button>'
                   +'<button class="user-del">删除</button>'
               +'</td>'
            +'</tr>'
           +'</table>'
    	+'</div>'
      +'<div>'
               +'<input type="checkbox" class="user-all">全选'
               +'<button class="user-alldel">批量删除</button>'
           +'</div>');
   function show() {
    $(app.config.panelContainer).html('');
    $(app.config.panelContainer).append($userDOM);
   }
  return {show: show};
}();
