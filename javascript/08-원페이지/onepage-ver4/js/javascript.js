$(function(){

    const $mnu = $('header>nav>.gnb>li>a');//메뉴셀렉팅
    let nowIdx = 0;
    
    let arrArticleTop = [];//각 아티클요소의 top 값을 저장

    //arrArticleTop[0] = $('.cont0').offset().top;
    //arrArticleTop[1] = $('.cont1').offset().top;
    //arrArticleTop[2] = $('.cont2').offset().top;
    //arrArticleTop[3] = $('.cont3').offset().top;
    //arrArticleTop[4] = $('.cont4').offset().top;

    //for 반복문을 이용한 리팩토링
    for(let i=0;i<5;i++){
        arrArticleTop[i] = $('article').eq(i).offset().top;
        //arrArticleTop[i] = $('.cont'+i).offset().top;
        //arrArticleTop.push($('article').eq(i).offset().top);        
    }


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

        for(let k=0;k<5;k++){

            if(scrollTop>=arrArticleTop[k]-69){
                $mnu.eq(k).parent().addClass('on').siblings().removeClass('on');
            }else if(scrollTop<arrArticleTop[0]-69){
                $mnu.parent().removeClass('on');
            }

        }


        //푸터가 화면에 노출되는 순간부터 Top 아이콘은 푸터 바로 위에 있게 하고 싶다.
        /**
         * footer의 offset().top값은 (scrollTop + 브라우저의 높이값) 를 합친것과 같다.
         * 
         * view = (scrollTop+브라우저높이값)-푸터의offset().top
         * 
         * 이때 view>0 크다면 푸터가 노출되었다는 것을 의미한다.        * 
         * 
         */

         let view = (scrollTop+$(window).height())-$('footer').offset().top

         if(view>0){//푸터가 화면에 노출된 상태
            $('aside').css({marginBottom:view});
         }else{
            $('aside').css({marginBottom:0});
         }
        

    });


    //로고에 대한 클릭이벤트
    $(".logo>a, aside").on('click', function(evt){
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