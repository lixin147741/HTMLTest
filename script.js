$(function () {
    $('.link .button').hover(function(){
        var title=$(this).attr('data');
        $('.tip em').text(title);
        var pos=$(this).position().left+10;//获取当前标签相对于他第一个具有定位属性的父元素的距离，返回结果是一个对象
        var dis=($('.tip').outerWidth()-$(this).outerWidth())/2;
        var l=pos-dis;
        $('.tip').css({'left':l+'px'}).animate({'top':145,'opacity':1,},300);
    },function(){
        if(!$('.tip').is(':animated')){
        $('.tip').animate({'top':100,'opacity':0,},300);}//效果不佳 需改进
    })
})