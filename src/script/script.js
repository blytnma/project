$(document).ready(function(){
    $(".carousel").owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        autoplayTimeout:2000,
    });
});

let popupBg = document.querySelector('.popup-bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.header-btn',);
let closePopupButton = document.querySelector('.close-popup');



    openPopupButtons.forEach((button) =>{
        button.addEventListener('click',(e )=>{
            e.preventDefault();
            popupBg.classList.add('active');
            popup.classList.add('active');
        })
    });

closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e )  => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

let popupBg2 = document.querySelector('.popup-bg');
let popup2 = document.querySelector('.popup');
let openPopupButtons2 = document.querySelectorAll('.illustration-btn',);
let closePopupButton2 = document.querySelector('.close-popup');

openPopupButtons2.forEach((button) =>{
    button.addEventListener('click',(e )=>{
        e.preventDefault();
        popupBg2.classList.add('active');
        popup2.classList.add('active');
    })
});

closePopupButton2.addEventListener('click', () => {
    popupBg2.classList.remove('active');
    popup2.classList.remove('active');
});

document.addEventListener('click', (e )  => {
    if(e.target === popupBg) {
        popupBg2.classList.remove('active');
        popup2.classList.remove('active');
    }
});



let popupBg3 = document.querySelector('.popup-bg');
let popup3 = document.querySelector('.popup');
let openPopupButtons3 = document.querySelectorAll('.btn-tools',);
let closePopupButton3 = document.querySelector('.close-popup');

openPopupButtons3.forEach((button) =>{
    button.addEventListener('click',(e )=>{
        e.preventDefault();
        popupBg3.classList.add('active');
        popup3.classList.add('active');
    })
});

closePopupButton3.addEventListener('click', () => {
    popupBg3.classList.remove('active');
    popup3.classList.remove('active');
});

document.addEventListener('click', (e )  => {
    if(e.target === popupBg) {
        popupBg3.classList.remove('active');
        popup3.classList.remove('active');
    }
});
