// alert("연결성공");

/*
    알고리즘 == 로직(Logic) == 순서도 == 시나리오 == 레시피

    1. 썸네일을 누른다. -> ul>li>a 를 클릭한다.

    2. 큰 이미지가 변한다.

        1) 큰 이미지의 파일명을 가져와서
        2) .gallery>.screen>p의 배경이미지로 지정한다.
*/

const $thmbs = $('.gallery>.pagination>.thmbs>li>a');

const $bigPhotos = [
    'wonder_gallery_pht_01.jpg',
    'wonder_gallery_pht_02.jpg',
    'wonder_gallery_pht_03.jpg',
    'wonder_gallery_pht_04.jpg',
    'wonder_gallery_pht_05.jpg',
    'wonder_gallery_pht_06.jpg',
    'wonder_gallery_pht_07.jpg',
    'wonder_gallery_pht_08.jpg',
];

//1. 썸네일에 대한 클릭이벤트 구문
$thmbs.on('click',function(){

    //this = Current HTML Element
    //.index() 는 해당요소의 인덱스번호를 알고 싶을 때 사용한다.
    const nowIdx = $thmbs.index(this);

    const bigPhoto = $bigPhotos[nowIdx];

    //.css() 사용시 인라인방식으로 요소에 적용된다.
    $('.gallery>.screen>p').css({
        "background-image":"url(./images/" + bigPhoto + ")"        
    });

    
});
