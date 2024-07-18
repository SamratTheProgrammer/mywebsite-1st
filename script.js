ScrollReveal({
    //reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.wishes-content h3, .heading2, .home-content', {origin: 'top'});
ScrollReveal().reveal('.home-img, .wishes-content, .memories-content', {origin: 'bottom'});
ScrollReveal().reveal('.heading, .memories-img, .wishes-content', {origin: 'left'});

//typed


const typed= new Typed('.multiple-text',{
    strings:['Barsha !','Darling !'],
    typeSpeed:100,
    backSpeed:200,
    backDelay:200,
    loop:true
})