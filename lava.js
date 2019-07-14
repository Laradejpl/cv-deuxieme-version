var etat =0;
function lavaFunc(){
    window.lavaVar += 90;
    document.getElementsByClassName("lavaLamp")[0].style.filter = "hue-rotate("+window.lavaVar+"deg)";
    document.getElementsByClassName("lavaLamp")[0].style.animationName = "none";
    setTimeout(function(){
      document.getElementsByClassName("lavaLamp")[0].style.animationName = "";
      document.getElementsByClassName("lavaLamp")[0].style.animationPlayState = "running";
    }, 50);
    /*window.location.href="index.html"*/
    
  }
  window.lavaVar = 0;




  function opencv(){
    window.lavaVar += 90;
    document.getElementsByClassName("lavaLamp")[0].style.filter = "hue-rotate("+window.lavaVar+"deg)";
    document.getElementsByClassName("lavaLamp")[0].style.animationName = "none";
    setTimeout(function(){
      document.getElementsByClassName("lavaLamp")[0].style.animationName = "";
      document.getElementsByClassName("lavaLamp")[0].style.animationPlayState = "running";
    }, 50);
    window.location.href="acceuil.html"
    
  }
  



  function deuxiemeClick(){

if (etat==0) {
  lavaFunc();
  etat=1;
  
}else{

  opencv();
  etat=0;
}


  }


   
    
   
    
   
  
   
   
      
      
  
