//준비핸들러 실행시점은 언제? 돔 트리 구성이 끝나고 나서요 .!
$(function(){

    //변수선언부
    const $thmbs = $('section>.slides>.slides-top>.slides-pagination>li>a');
    const $container = $('section>.slides>.slides-container');
    const $btnNext = $('section>.slides>.slides-navigation.slides-next');
    const $btnPrev = $('section>.slides>.slides-navigation.slides-prev');
    const $btnPlay = $('section>.slides>.control.play');
    const $btnStop = $('section>.slides>.control.stop');
    let intervalKey = null;
    
    /*
        nowIdx 변수에 기본값, 초기값으로 0을 할당하는 이유?
         1) 로딩시 맨처음 보이는 슬라이드의 인덱스가 0 이기 때문
         2) nowIdx 라고는 변수에 할당하는 값이 숫자형이라서
            숫자형을 대표하는 기본값 0을 할당            
    */
    let nowIdx = 0;



    //함수선언부
    const moveFn = function(){
        //썸네일 활성화
        $thmbs.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');


        //컨테이너 이동
        $container.stop().animate({
            left : -706*nowIdx
        },400,function(){
            console.log('슬라이드 이동완료');
        });


        //현재슬라이드 카운팅
        const count = "현재 " + (nowIdx+1);
        $('section>.slides>.slides-top>.page>span>strong').text(count);
    };

    const nextIdxFn = function(){
        //인덱스추출
        if(nowIdx<7){
            nowIdx++;
        }else{
            nowIdx=0;
        }        
    };


    //이벤트 구문
    $thmbs.on('click', function(evt){
        evt.preventDefault();

        //인덱스 추출
        nowIdx = $thmbs.index(this);

        moveFn();
    });

    $btnNext.on('click', function(evt){
        evt.preventDefault();

        nextIdxFn();
        moveFn();
    });

    $btnPrev.on('click', function(evt){
        evt.preventDefault();

        //인덱스 추출
        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=7;
        }

        moveFn();
    });

    //자동재생
    $btnPlay.on('click', function(evt){
        evt.preventDefault();
        clearInterval(intervalKey);
        intervalKey = setInterval(function(){
            nextIdxFn();    
            moveFn();
        },2000);
    });


    //재생멈춤
    $btnStop.on('click', function(evt){
        evt.preventDefault();
        clearInterval(intervalKey);
    });

});