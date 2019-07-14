// Gestion de la fin du chargement de la page web
window.addEventListener("load", function () {
    console.log("Page entièrement chargée");
});



let etatMenu=0;/*ont declare un etat */
function openfollow()
{

    document.getElementById('follome').style.display="block";
    console.log('ca marche');
    }  

   function closeform(){

        document.getElementById('follome').style.display="none";
        console.log('ca marche');
    }


function openNav1() {
    document.getElementById('moi1').style.visibility= "visible";
    document.getElementById('comp1').style.visibility= "visible";
    document.getElementById('exp1').style.visibility= "visible";
    document.getElementById('proj1').style.visibility= "visible";
    document.getElementById('moi1').style.height= "3em";
    document.getElementById('proj1').style.height= "3em";
    document.getElementById('comp1').style.height= "3em";
    document.getElementById('exp1').style.height= "3em";
    document.getElementById('bando').style.display="none";

    
   
   
}
function closeNav1(){
    document.getElementById('moi1').style.visibility= "hidden";
    document.getElementById('proj1').style.visibility= "hidden";
    document.getElementById('comp1').style.visibility= "hidden";
    document.getElementById('exp1').style.visibility= "hidden";
    document.getElementById('moi1').style.height= "0em";
    document.getElementById('proj1').style.height= "0em";
    document.getElementById('comp1').style.height= "0em";
    document.getElementById('exp1').style.height= "0em";
    document.getElementById('bando').style.display="block";

}

function ouvrirFermer(){
    if(etatMenu==0){
        //console.log("ouvrir");
        openNav1();//fonction ouvert
        etatMenu=1;//1 est affecter a etatMenu
    }
    else{
        //console.log("fermer");
        closeNav1();//fonction fermer
        etatMenu=0;//0 est affecter a etatMenu
    }
}

setTimeout(function(){//compteur suite a ca ca déclenche un evenement//
    document.getElementById("toggle1").style.marginLeft="100px";
    document.getElementById("toggle1").style.transition="4s";
   document.getElementById("toggle2").style.marginLeft="100px";
   document.getElementById("toggle2").style.transition="4s";
   document.getElementById("toggle3").style.marginLeft="100px";
   document.getElementById("toggle3").style.transition="4s";
  
  },1000);
//pour le draggable
$(document).ready(
    function(){
    
    $("#follome").draggable()
    
    
    
    }
);
//email vérification

// Contrôle du courriel en fin de saisie
 document.getElementById("mail").addEventListener("blur", function (e) {
    var validiteCourriel = "";
    var regex1 =/./;
    if (e.target.value.indexOf("@") === -1 && regex1.test(".")) {
        // Le courriel saisi ne contient pas le caractère @
        validiteCourriel = "Adresse invalide";
        
        
        
    }else{
        validiteCourriel="correct";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
});

   






