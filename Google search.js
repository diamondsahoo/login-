var url="google.com";

opp('.top .ic').forEach(val=>{
  val.addEventListener('click',()=>{
    op('#shrLogo img').src=val.firstElementChild.src;
    url=val.firstElementChild.getAttribute('url');
  })
})

function search(){
  
  url="https://"+url+'/webhp?q='+op('#srh').value;
  Window.open(url);
  
}

  function op(elem){
    return document.querySelector(elem);
  }
    function opp(elem) {
      return document.querySelectorAll(elem);
    }