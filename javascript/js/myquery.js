//셀렉팅 통합함수
const $ = function(query){

  /**
   * 매개변수 query로 넘어오는 값
   * 
   * "span"
   * ".minus"
   * "#plus"
   */

  //console.log('query = ', query[0]);
  
  if(query[0]=='#'){
    return document.getElementById(query.slice(1));
  }else if(query[0]=='.'){
    return document.querySelector(query);
  }else{
    return document.querySelectorAll(query)[0];
  }

};

