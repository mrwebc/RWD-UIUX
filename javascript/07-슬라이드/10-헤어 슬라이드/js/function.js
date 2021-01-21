$(function(){

    //하단 인디케이터
    const $indicator = $(".slides>.slides-pagination>li>a");

    //인디케이터에 대한 클릭이벤트 구문 
    $indicator.on('click', function(evt){

        //이번에 클릭한 인디케이터의 인덱스번호 추출
        const nowIdx = $indicator.index(this);//0~4값

        //헤어컨테이너의 left 좌표값 변경
        $(".slides>.slides-hair").animate({
            left : -250*nowIdx
        });

        //앵커태그의 기본기능 작동 방지
        evt.preventDefault();
    })
});