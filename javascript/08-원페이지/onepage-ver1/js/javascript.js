$(function(){

    //어떤 요소의 width, height 값을 추출
    console.log('header의 width = ', $('header').css('width'));
    console.log('header의 height = ', $('header').css('height'));
    
    console.log('header의 width = ', $('header').width());
    console.log('header의 height = ', $('header').height());

    //header의 높이값을 동적으로 구하여 margin-top 값을 넣어주세요.
    $('header').css({
        'margin-top': -($('header').height()/2)
    });


    //메뉴 a에 대한 click 이벤트 구문
    $('header>nav>.gnb>li>a').on('click', function(evt){
        evt.preventDefault();

        //a를 클릭하면 문서전체가 해당 article 시작지점까지 이동

        /**
         * body의 시작지점부터 각 article의 시작점에 이르는 거리
         * 
            0 - AboutMe             scrollTop : 0
            1 - UX-Design           scrollTop : 1000
            2 - WebPofol            scrollTop : 1845
            3 - Graphics            scrollTop : 2645
            4 - My-Project          scrollTop : 3245
         */

         const arrArticleTop = [0, 1000, 1845, 2645, 3245];

         const nowIdx = $('header>nav>.gnb>li>a').index(this);

         $('html, body');//문서전체를 의미

         $('html, body').stop().animate({
             scrollTop : arrArticleTop[nowIdx]
         });

         //메뉴 활성화 표시
         $(this).parent().addClass('on').siblings().removeClass('on');
    });
});