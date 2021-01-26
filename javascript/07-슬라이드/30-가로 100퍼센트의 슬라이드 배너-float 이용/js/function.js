$(function(){

    const $indicators = $('.moa-slides>.moa-slides-pagination>li>a');
    const $container = $('.moa-slides>.moa-slides-container');

    $indicators.on('click', function(evt){

        //이번에 클릭한 인디케이터의 인덱스번호 nowIdx 추출
        const nowIdx = $indicators.index(this);//0,1,2

        $container.stop().animate({
            left : -100 * nowIdx + "%"
        })        

        //인디케이터 활성화표시
        $(this).parent().addClass('on').siblings().removeClass('on');

        $indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
        
        
        evt.preventDefault();
    });

});