var docEl = document.documentElement,
  //当设备的方向变化（设备横向持或纵向持）此事件被触发。绑定此事件时，
  //注意现在当浏览器不支持orientationChange事件的时候我们绑定了resize 事件。
  //总来的来就是监听当然窗口的变化，一旦有变化就需要重新设置根字体的值
  resizeEvt = 'onorientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function () {
    //设置根字体大小

    docEl.style.fontSize = 20 * (docEl.clientWidth / 320) + 'px';
  };

//绑定浏览器缩放与加载时间
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);

//加入收藏
function AddFavorite(){
  if (document.all) {
    addToBookMark(window.location.href, document.title);
  } else if (window.sidebar) {
    addToBookMark(document.title, window.location.href);
  }else {
    alert("加入收藏失败，请使用Ctrl+D进行添加");
  }
}

function addToBookMark(url,title){
  var ua = navigator.userAgent.toLowerCase();
  if(ua.indexOf("msie 8")>-1){
    external.AddToFavoritesBar(url,title);//IE8
  }else{
    try {
      window.external.addFavorite(url, title);
    } catch(e) {
      try {
        window.sidebar.addPanel(title, url);//firefox
      } catch(e) {
        alert("加入收藏失败，请使用Ctrl+D进行添加");
      }
    }
  }
  return false;
}


//设为首页
function SetHome(obj,url){
  try{
    obj.style.behavior='url(#default#homepage)';
    obj.setHomePage(url);
  }catch(e){
    if(window.netscape){
      try{
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
      }catch(e){
        alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
      }
    }else{
      alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
    }
  }
}
