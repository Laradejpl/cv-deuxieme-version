/*pour fair un scroll ancre fluid https://www.design-fluide.com/17-11-2013/un-defilement-anime-smooth-scroll-en-jquery-sans-plugin/ */




$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 850; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });
});
//ONT REGARDE SI ONT SCROLL
window.addEventListener('scroll',()=>{
    console.log('ca scroll');
    if (window.scrollY> 300) {
        document.getElementById('burger').style.visibility="visible";
        
    }
    
})
