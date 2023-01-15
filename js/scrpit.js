// Mobile responsive naverbar sticky
const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100);
});


// Naverbar open and close
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');

};
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}

// Effect on page
const sr = ScrollReveal ({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.home-image',{delay:200, origin:'right'});
sr.reveal('.container, .about, .menu',{delay:200, origin:'bottom'});