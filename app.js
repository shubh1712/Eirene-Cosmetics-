// scroll about us 

const abt =  document.querySelector('#about-us');
abt.addEventListener('click',scrollDown())
function scrollDown(){
    window.scrollTo(0,555.5999755859375);
}


// scroll contact
const contact = document.querySelector('#contact-us');
contact.addEventListener('click',scrollDown())
function scrollDown(){
    window.scrollTo(0,1293.5999755859375);
}

// home

// const  = document.querySelector('#contact-us');
// contact.addEventListener('click',scrollDown())
// function scrollDown(){
//     window.scrollTo(0,1293.5999755859375);
// }

// hamburger menu

const ham = document.querySelector('.hamburger-menu');
const burger= document.querySelector('.burger')
const container = document.querySelector('.cont')
ham.addEventListener('click' , () => {
  container.classList.toggle('burger')
});