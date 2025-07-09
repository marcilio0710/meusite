const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav-list');
const items = nav.querySelectorAll('li');
const menuOverlay = document.querySelector(".menu-overlay");

menu.addEventListener('click',function(){
    menu.classList.toggle('ativo');
    nav.classList.toggle('ativo');
    menuOverlay.classList.toggle('ativo');

menuOverlay.addEventListener('click',function(){
    menu.classList.remove('ativo');
    nav.classList.remove('ativo');
    menuOverlay.classList.remove('ativo');});
   
    
items.forEach(function(link, index){
    link.style.animation=link.style.animation? "":`navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;

  });

  
});
