$(function () {
  //写入div
  ("<div/>", { id: "moveWindow" }).css({ width: "200px", height: "200px", border: "solid 3px #2F74A7", background: "#663398", position: "absolute", cursor: "pointer" }).appendTo("body");                 //写入关闭按钮("<div/>",{id:"removeMW"}).css({width:"20px",height:"20px",background:"red",float:"right"}).appendTo("#moveWindow");
  //定时器
  var move = setInterval(moves, 100);
  var x = 10;
  var y = 10;

  function moves() {
    var mw = $("#moveWindow").offset();
    var lefts = mw.left;
    var tops = mw.top;
    if (lefts >= (window).width() −("#moveWindow").width() || lefts <= 0){
    x = -x
  }

  if (tops >= (window).height() −("#moveWindow").height() || tops <= 0){
    y = -y
  }
  lefts += x;
  tops += y;

("#moveWindow").offset({ top: tops, left: lefts }); 
}                 //悬停停止运动("#moveWindow").mouseover(function(){
clearInterval(move);
});
//移开鼠标后继续运动
("#moveWindow").mouseout(function () { move = setInterval(moves, 100); });                 //点击按钮关闭("#removeMW").click(function(){
$("#moveWindow").remove();
            });
        })