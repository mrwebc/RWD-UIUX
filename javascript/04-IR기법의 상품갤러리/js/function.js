//준비핸들러
$(document).ready(function(){

    /**
     * 알고리즘
     * 
     * 1. 썸네일(a)에 대한 click이벤트 구문 작성
     * 2. a태그의 기본기능 작동 금지
     * 3. 이번에 클릭한 요소의 href 속성값을 가져온다.
     * 4. p의 배경이미지를 변경한다.
     * 5. 
     */

     const $thmbs = $(".thmbs a");

     $thmbs.on('click', function(evt){
        evt.preventDefault();

        const imgSrc = $(this).attr('href');

        $("p").css({
            'background-image' : 'url(' + imgSrc + ')'
        });

        //활성화 표시
        $(this).parent().addClass('on');
        $(this).parent().siblings().removeClass('on');
     });
});