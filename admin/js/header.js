var $header=function(){
	var $header=$('<div class="admin-app-header">'
           +'<div class="title">'
               +'<h1>匠人牛品集团后台</h1>'
           +'</div>'
           +'<div class="account">'
               +'<div class="logo"></div>'
               +'<span>管理</span>'
                +'<i class="iconfont icon-arrowdown"></i>'     
               +'<div class="submenu">'
                  +'<i class="iconfont icon-sign-out"></i>'
                  +'<span>注销</span>'
              +'</div>'
    	   +'</div>'
    	+'</div>');
    	var $title=$header.find('.title h1');
    	var $account=$header.find('.account');
    	var $menu=$header.find('.submenu');
    	var $arrow = $header.find('.admin-app-header .account .icon-arrowdown');
    	var $logo = $header.find('.account .logo');
    	function onMouseOver() {
    		$account.css('color','black');
		    $arrow.removeClass('icon-arrowdown');
		    $arrow.addClass('icon-arrowup');
		    $menu.css('display','block');
	    };
	    function onMouseOut() {
		    $account.css('color','#999');
			$arrow.removeClass('icon-arrowup');
			$arrow.addClass('icon-arrowdown');
			$menu.css('display','none');
		}
		function onClick() {
		    onMouseOut();
		    location.hash = '#/logout';
		}
	    function show(cfg) {
		    $title.html(cfg.title);
		    $logo.css('background-image', cfg.logo);
		    $(app.config.appContainer).append($header);

		    $account.mouseover(onMouseOver);
		    $account.mouseout(onMouseOut);
		    $menu.click(onClick);
	    }

	    return {show:show};
}();
