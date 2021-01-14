
//현재 웹페이지 문서의 DOM-Tree 구성이 완료(준비)된 시점에 .read() 메소드가 호출된다. 
//그때 인자로 넣어준 익명함수를 실행하게 된다.
$(document).ready(function(){
    
    const $thmbs = $(".slides>.slides-pagination>li>a");
    
    //썸네일에 대한 클릭이벤트 구문 작성
    //evt는 이벤트객체(사용자로부터 일어나는 여러가지 이벤트를 기억하고 있는 변수)
    $thmbs.on("click",function(evt){
        //a태그의 기본 기능 작동을 멈춤 (기본 기능 :다른 탭으로 이동하는 기능)
        evt.preventDefault();

        //이번에 클릭한 바로 그<a>의 href 속성값을 가져온다.
       const imgSrc = $(this).attr("href");
       console.log("imgSrc = %s", imgSrc);

        //.slides>.slides-pagination>li>a>img 의 src 속성값을 바꾼다
        $(".slides>.slides-container>img").attr({"src":imgSrc});
    });
    
});