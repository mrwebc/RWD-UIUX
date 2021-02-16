$(function(){

    let nowIdx = 0;
    let oldIdx = null;

    const $indicator = $("#slides>.slides-pagination>li>a");
    const $btnAuto = $('#slides>.slides-auto');
    let intervalKey = null;


    //공통부분 함수처리
    const fadeActionFn = function(){
        //슬라이드 페이드 처리
        //1)이전 슬라이드는 사라지는 코드
        $("#slides>.slides-container>li").eq(oldIdx).stop().fadeOut(1000);

        //2)이번에 나타날 슬라이드에 대한 코드
        $("#slides>.slides-container>li").eq(nowIdx).stop().fadeIn(1000);

        //인디케이터 활성화 구문을 작성해야 한다.
        //그렇다면 이걸 하는데 필요한 건 뭐가 있을까?
        $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    };


    //다음번 나타날 슬라이드의 인덱스 번호를 추출하는 함수
    const nextIdx = function(){
        if(nowIdx<3){
            nowIdx++;
        }else{
            nowIdx = 0;
        }        
    };


    //자동재생 함수
    const autoPlay = function(){
        //자동재생 하는 코드
        intervalKey = setInterval(function(){

            oldIdx = nowIdx;//인덱스 값 보존

            //인덱스 추출
            nextIdx();
    
            fadeActionFn();

        },2000);

        $btnAuto.addClass('pause');
    };

    //재생멈춤 함수
    const autoStop = function(){
        clearInterval(intervalKey);
    };


    //인디케이터에 대한 클릭이벤트 구문을 작성해야 한다.
    $indicator.on('click',function(evt){
        evt.preventDefault();

        autoStop();

        oldIdx = nowIdx;//인덱스 값 보존
        nowIdx = $indicator.index(this);


        fadeActionFn();
    });


    //이전
    $(".slides-prev").on('click', function(evt){
        evt.preventDefault();

        autoStop();

        oldIdx = nowIdx;//인덱스 값 보존

        //인덱스 추출
        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx = 3;
        }

        fadeActionFn();
    });

    
    //다음
    $(".slides-next").on('click', function(evt){
        evt.preventDefault();

        autoStop();

        oldIdx = nowIdx;//인덱스 값 보존

        //인덱스 추출
        nextIdx();

        fadeActionFn();
    });


    //윈도우창에 대한 로드 이벤트 구문
    $(window).on('load', function(){
        //자동재생 하는 코드
        autoPlay();
    });


    //자동실행 버튼에 대한 클릭이벤트 구문
    $btnAuto.on('click', function(evt){
        evt.preventDefault();

        //버튼 모양 바꾸기
        if($(this).hasClass('pause')){//재생중 상태
            
            //재생을 멈추는 코드
            autoStop();
            $(this).removeClass('pause');

        }else{//멈춰진 상태

            //자동재생 하는 코드
            autoPlay();
            
        }
    });

});