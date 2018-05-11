var $changePwdPanel = (function() {
  var $changePwdDOM = $(''
      + '<div class="change-password-panel">'
        + '<form>'
          + '<input class="origin-pwd" type="password" placeholder="请输入原密码" required><br>'
          + '<input class="new-pwd" type="password" placeholder="请输入新密码" minlength="6" required><br>'
          + '<input class="new-pwd2" type="password" placeholder="请再次输入新密码" minlength="6" required><br>'
          + '<input type="submit" value="保存">'
          + '<input type="reset" value="重置">'
        + '</form>'
      + '</div>');

  function show() {
    $(app.config.panelContainer).html('');
    $(app.config.panelContainer).append($changePwdDOM);
  }

  return {show: show};
})();