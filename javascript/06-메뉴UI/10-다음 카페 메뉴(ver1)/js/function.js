$(function(){

    const $mnu = $('header>nav>.gnb>li>a');

    $mnu.on('click', function(evt){
        evt.preventDefault;

        $(this).parent().addClass('on');
        $(this).parent().siblings().removeClass('on');

        //위의 두 문장을 합침
        $(this).parent().addClass('on').siblings().removeClass('on');
    });


});