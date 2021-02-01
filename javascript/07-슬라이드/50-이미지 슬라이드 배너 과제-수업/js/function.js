$(function(){
    
    const $indicators = $('#slides>.slides-pagination>li>a');
    const $container = $('#slides>.slides-container');

    const $btnPrev = $('#slides>.slides-navigation.slides-prev');
    const $btnNext = $('#slides>.slides-navigation.slides-next');

    let nowIdx = 0;


    //이전 버튼에 대한 클릭이벤트 구문
    $btnPrev.on('click',function(evt){
        evt.preventDefault();
        
        if(nowIdx>0){
            nowIdx --;
        }else{
            nowIdx=4;
        }
        
        $container.stop().animate({
            left : -1180 * nowIdx
        });

        $indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    });




    //다음 버튼에 대한 클릭이벤트 구문
    $btnNext.on('click', function(evt){
        evt.preventDefault();

        if(nowIdx<=3){
            nowIdx++;
        }else{ 
            nowIdx=0;
        }
        
        //컨테이너 이동
        $container.stop().animate({
            left : -1180*nowIdx
        });

        //인디케이터 활성화표시
        $indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
        /**
         * nowIdx 값의 변경
         * 
         * 현재 => next
         * 0       1
         * 1       2
         * 2       3
         * 3       4
         * 4       계속4이던가 아니면 0(설정하기 나름)
         */
    });


    //인디케이터에 대한 click 이벤트 구문
    $indicators.on('click', function(evt){
        evt.preventDefault();

        //이번에 클릭한 요소의 인덱스를 추출
        nowIdx = $indicators.index(this);

        //컨테이너 이동
        $container.stop().animate({
            left : -1180*nowIdx
        });

        //인디케이터 활성화표시
        $indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    });


});