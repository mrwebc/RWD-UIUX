$(function(){

    const $mnu = $('header>nav>.gnb>li>a');//메뉴셀렉팅
    let nowIdx = 0;
    
    let arrArticleTop = [];//각 아티클요소의 top 값을 저장
    arrArticleTop[0] = $('.cont0').offset().top;
    arrArticleTop[1] = $('.cont1').offset().top;
    arrArticleTop[2] = $('.cont2').offset().top;
    arrArticleTop[3] = $('.cont3').offset().top;
    arrArticleTop[4] = $('.cont4').offset().top;

    console.log(arrArticleTop);

    
    //메뉴에 대한 클릭이벤트 구문
    $mnu.on('click', function(evt){
        evt.preventDefault();

        nowIdx = $mnu.index(this);

        //$mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

        $('html,body').stop().animate({
            scrollTop : arrArticleTop[nowIdx]-69
        });
    });


    //scrollTop 값에 따른 메뉴활성화
    $(window).on('scroll', function(){

        //현재 스크롤바의 top값을 변수에 저장
        let scrollTop = $(window).scrollTop();

        console.log(scrollTop);


        if(scrollTop>=arrArticleTop[0]-69){
            $mnu.eq(0).parent().addClass('on').siblings().removeClass('on');
        }

        if(scrollTop>=arrArticleTop[1]-69){
            $mnu.eq(1).parent().addClass('on').siblings().removeClass('on');
        }

        if(scrollTop>=arrArticleTop[2]-69){
            $mnu.eq(2).parent().addClass('on').siblings().removeClass('on');
        }

        if(scrollTop>=arrArticleTop[3]-69){
            $mnu.eq(3).parent().addClass('on').siblings().removeClass('on');
        }

        if(scrollTop>=arrArticleTop[4]-69){
            $mnu.eq(4).parent().addClass('on').siblings().removeClass('on');
        }

        if(scrollTop<arrArticleTop[0]-69){
            $mnu.parent().removeClass('on');
        }

    });


    //로고에 대한 클릭이벤트
    $(".logo>a").on('click', function(evt){
        evt.preventDefault();
        $('html,body').stop().animate({
            scrollTop : 0
        });
    });
    
    
    //window에 대한 load이벤트
    $(window).on('load', function(){
        //trigger로 .logo>a 를 click 한다.  
        //이벤트 강제발생 API - trigger
        $('.logo>a').trigger('click');
    });

});