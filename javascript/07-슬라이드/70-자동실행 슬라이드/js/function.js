//준비핸들러 실행시점은 언제? 돔 트리 구성이 끝나고 나서요 .!
$(function(){

    //변수선언부
    const $thmbs = $('section>.slides>.slides-top>.slides-pagination>li>a');

    //함수선언부


    //이벤트 구문
    $thmbs.on('click', function(evt){
        evt.preventDefault();


    });
});