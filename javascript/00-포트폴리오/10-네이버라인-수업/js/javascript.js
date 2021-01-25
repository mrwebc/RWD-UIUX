$(function(){


    //언어선택 옵션박스에 대한 설정
    const $form = $('header>.container>form');
    const $langlist = $('header>.container>form>fieldset>.langlist');

    $form.on('click', function(){
        console.log('언어선택 클릭');
        $langlist.toggle();
    });

    $form.on('mouseleave', function(){
        $langlist.hide();
    })
})