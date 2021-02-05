$(function(){

    let nowIdx = 0;
    let oldIdx = null;

    const $indicator = $("#slides>.slides-pagination>li>a");


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

    //인디케이터에 대한 클릭이벤트 구문을 작성해야 한다.
    $indicator.on('click',function(evt){
        evt.preventDefault();

        oldIdx = nowIdx;//인덱스 값 보존
        nowIdx = $indicator.index(this);


        fadeActionFn();
    });


    //이전
    $(".slides-prev").on('click', function(evt){
        evt.preventDefault();

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

        oldIdx = nowIdx;//인덱스 값 보존

        //인덱스 추출
        if(nowIdx<3){
            nowIdx++;
        }else{
            nowIdx = 0;
        }

        fadeActionFn();
    });

});