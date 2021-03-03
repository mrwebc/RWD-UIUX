$(function(){
    const $gnb = $("header>nav>.gnb>li");
    const $sub = $gnb.children("ul");
    let nowIdx = 0;


    //메인메뉴 영역에 마우스 포인터가 진입하면 ....
    $gnb.on("mouseenter", function(){
        nowIdx = $gnb.index(this);
        $sub.eq(nowIdx).show();
    });


    //메인메뉴 영역에서 마우스 포인터가 떠나면 ....
    $gnb.on("mouseleave", function(){
        $sub.hide();
    });
});