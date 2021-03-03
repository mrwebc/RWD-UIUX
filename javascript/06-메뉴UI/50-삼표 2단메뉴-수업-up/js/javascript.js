$(function(){

    const $gnb = $("header>nav>.gnb>li");
    const $sub = $gnb.find(".sub");
    let nowIdx = 0;

    //각 메뉴글자의 width값을 추출해야 margin-left 값 설정가능
    // console.log($gnb.eq(0).find('span').width());
    // console.log($gnb.eq(1).find('span').width());
    // console.log($gnb.eq(2).find('span').width());
    // console.log($gnb.eq(3).find('span').width());
    // console.log($gnb.eq(4).find('span').width());

    
    
    $gnb.on({
        "mouseenter":function(){
            nowIdx = $gnb.index(this);
            $sub.eq(nowIdx).fadeIn(100);

            //활성화 표시용 .bar 요소를 동적으로 추가
            $gnb.eq(nowIdx).children("a").append("<span class='bar'></span>");
            
            //해당 메뉴문자의 width를 동적으로 측정
            const barW = $gnb.eq(nowIdx).find('span').first().width();

            //활성화 표시용 .bar의 CSS속성 설정
            $gnb.eq(nowIdx).find(".bar").css({
                width : barW,
                marginLeft : -barW/2
            });
        }
        ,
        "mouseleave":function(){
            $(".bar").remove();//특정요소만 제거하는 .remove()
            $sub.hide();
        }
    });

});