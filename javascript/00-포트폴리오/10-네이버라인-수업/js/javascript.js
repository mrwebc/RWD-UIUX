$(function(){


    //언어선택 옵션박스에 대한 설정
    const $form = $('header>.container>form');
    const $langlist = $('header>.container>form>fieldset>.langlist');
    const $lang = $('header>.container>form>fieldset>.langlist>li>a');

    $form.on('click', function(){
        console.log('언어선택 클릭');
        $langlist.toggle();
    });

    $form.on('mouseleave', function(){
        $langlist.hide();
    });

    $lang.on('click', function(evt){
        //이번에 선택한 요소의 텍스트를 가져온다.
        const selectedLang = $(this).text();
        
        //input 요소의 value 속성값으로 넣어준다.
        $("#lang").val(selectedLang);

        evt.preventDefault();
    });


});


//슬라이드 코드구현
$(function(){

    const $indicators = $('section>.line-visual>.line-visual-pagination>li>a');
    const $container = $('section>.line-visual>.line-visual-container');

    $indicators.on('click', function(evt){
        evt.preventDefault();

        const nowIdx = $indicators.index(this);

        $container.stop().animate({
            left : -(100 * nowIdx) + '%'
        });

        //인디케이터 활성화
        $(this).parent().addClass('on').siblings().removeClass('on');
        $indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    });

   
});