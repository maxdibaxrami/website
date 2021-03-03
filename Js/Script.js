
const loadingpage=()=>{
    var divloading=document.getElementById("loadingdiv");
    var maindiv=document.getElementById("maindiv");
    maindiv.style.overflow="hidden";
    setTimeout(()=>{
        divloading.style.display="none";
        maindiv.style.overflow="auto";

    },500);
}

const MoveScroll=(moveto)=>{
    var div=document.getElementById("cartslider");
    let scrolvalue=div.scrollLeft;
    switch (moveto) {
        case "left":
            div.scroll({
                top: 0, 
                left: scrolvalue+270, 
                behavior: 'smooth' 
              });
            break;
        
        case "right":
            div.scroll({
                top: 0, 
                left: scrolvalue-270, 
                behavior: 'smooth' 
              });
            break;
    
        
    }
    
}


const MoveScrollsec=(moveto)=>{
  var div=document.getElementById("cartslidersec");
  let scrolvalue=div.scrollLeft;
  switch (moveto) {
      case "left":
          div.scroll({
              top: 0, 
              left: scrolvalue+291, 
              behavior: 'smooth' 
            });
          break;
      
      case "right":
          div.scroll({
              top: 0, 
              left: scrolvalue-291, 
              behavior: 'smooth' 
            });
          break;
  
      
  }
  
}

const MoveScroll3=(moveto)=>{
  var div=document.getElementById("cartslider3");
  let scrolvalue=div.scrollLeft;
  switch (moveto) {
      case "left":
          div.scroll({
              top: 0, 
              left: scrolvalue+291, 
              behavior: 'smooth' 
            });
          break;
      
      case "right":
          div.scroll({
              top: 0, 
              left: scrolvalue-291, 
              behavior: 'smooth' 
            });
          break;
  
      
  }
  
}


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})