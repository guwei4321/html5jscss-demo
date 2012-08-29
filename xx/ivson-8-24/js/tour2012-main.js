/**
 * User: Administrator
 * Date: 12-8-27
 * Time: 下午6:23
 */
var Guwei ={};
Guwei.tool = function(){
    return{
        $:function(id){
            return document.getElementById(id);
        },
        /*getEvt:function(event){
         return event||window.event;
         },
         getTarget:function(event){
         return event.target||event.srcElement;
         },*/
        preventDefault: function(event){
            event.preventDefault ? event.preventDefault():event.returnValue = false;
        }
        /*stopPropagation:function(event){
         event.stopPropagation ? event.stopPropagation():event.cancelBubble=true;
         }*/
    }
}();
function setvideo(url,id){
    var youku = Guwei.tool.$(id);
    var htmlstr =  "<span></span><object  name='obx' width='550' height='374'>";
    htmlstr += "<param value='"+url+"' name='movie'></param>";
    htmlstr += "<param name='quality' value='high' />";
    htmlstr += "<param value='' name='wmode'></param>";
    htmlstr += "<embed width='550' height='374' type='application/x-shockwave-flash' quality='high' pluginspace='http://www.macromedia.com/go/getflashplayer' src='"+url+"'>"
    htmlstr += "</object>";
    youku.innerHTML = htmlstr;
}
function videOn(target,onClass,videoTit){
    target.className = onClass;
    videoTit.innerHTML=target.title;
}
function tabVideo(videoID){
    var videoList = Guwei.tool.$(videoID);
    var videoLnks = videoList.getElementsByTagName("a");
    var videoTit  = Guwei.tool.$("video-tit");
    videoList.onclick = function(evt){
        evt = evt || window.event;
        var target = evt.target || evt.srcElement;
        Guwei.tool.preventDefault(evt);
        for(var i = 0 ;i<videoLnks.length;i++){
            videoLnks[i].className ="";
        }
        switch (target.nodeName.toLowerCase()){
            case "a":
                setvideo(target.href,"video-stage");
                videOn(target,"on",videoTit);
                break;
            case "img":
                setvideo(target.parentNode.href,"video-stage");
                videOn(target.parentNode,"on",videoTit);
                break;
        }
    };
}
(function(){
    var videoList = Guwei.tool.$("video-list");
    var videoLnks = videoList.getElementsByTagName("a");
    var videoLinkLen = videoLnks.length;
    for(var i = 0; i<videoLinkLen;i++){
        var videoFirstLnks = videoLnks[0].href;
    }
    setvideo(videoFirstLnks,"video-stage");
    tabVideo("video-list");

})();




