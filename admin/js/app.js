$(function() {
  window.onhashchange = function() {
    if(location.hash === '#/logout') {
      $login.show();
    } else if(location.hash === '#/index') {
      $(app.config.appContainer).html('');
      $stage.show();
      $header.show({
        'title': app.config.headerTitle,
        'logo': app.config.headerLogo
      });
      $menu.show();
      $footer.show();
      
    } else {
      $stage.load(location.hash);
    }
  };

  $login.show();
})