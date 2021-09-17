

const ham = document.querySelector('.hamburger-menu');
const burger= document.querySelector('.burger')
const container = document.querySelector('.cont')
ham.addEventListener('click' , () => {
  container.classList.toggle('burger')
});



