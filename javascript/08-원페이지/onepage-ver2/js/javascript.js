$(function(){

    const $mnu = $('header>nav>.gnb>li>a');
    let nowIdx = 0;

    //특정 요소의 top값(body의 시작점에서 떨어진 거리)
    //$('특정요소').offset().top

    $('.cont0').offset().top

    const arrArticleTop = [];//빈배열
    arrArticleTop[0] = $('.cont0').offset().top;
    arrArticleTop[1] = $('.cont1').offset().top;
    arrArticleTop[2] = $('.cont2').offset().top;
    arrArticleTop[3] = $('.cont3').offset().top;
    arrArticleTop[4] = $('.cont4').offset().top;

    for(let i=0;i<5;i++){
        console.log(arrArticleTop[i]);
    }

    $mnu.on('click', function(evt){
        evt.preventDefault();

        nowIdx = $mnu.index(this);

        //활성화 표시
        $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

        //페이지 이동
        $('html, body').stop().animate({
            scrollTop : arrArticleTop[nowIdx]-69
        });
    });


    $(window).on('load', function(){
        $('html, body').stop().animate({
            scrollTop : 0
        });
    });

    $('h1>a').on('click', function(evt){
        evt.preventDefault();

        $('html, body').stop().animate({
            scrollTop : 0
        });
    });
});