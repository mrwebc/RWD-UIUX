$(function(){
    //입력상자와 버튼에 대한 클릭이벤트 구문
    $('#path input, #path button').on('click', function(){
        //$(".list").toggle();
        //$(this).parent().siblings().toggle();
        $(this).parent().next().toggle();
    });

    const $list = $('#path .list');

    //#path 영역에서 mouseleave 이벤트 구문
    $('#path .group').on('mouseleave', function(){
        $list.hide();
    });


    //리스트 항목 클릭시 input 요소에 값 넣기
    $list.find('a').on('click', function(evt){
        evt.preventDefault();

        //이번에 클릭한 요소의 텍스트를 가져온다.
        const sitename = $(this).text();

        //가져온 텍스트를 input의 value로 넣어준다.
        //$('input').val(sitename); 
        $(this).parents(".list").prev().children('input').val(sitename);

        //$list 숨김처리
        $list.hide();
    });
});