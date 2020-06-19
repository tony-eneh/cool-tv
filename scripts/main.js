/**
 * toggle flyout menu
 */

 const hideMenu = (e)=>{
    const menu = document.querySelector('.main-menu');
    const closeBtn = e.currentTarget;

    menu.classList.add('hidden-menu');
    closeBtn.classList.add('hidden-menu');
 }

 const showMenu = (e)=>{
    const menu = document.querySelector('.main-menu');
    const closeBtn = document.querySelector('.close-btn');

    menu.classList.remove('hidden-menu');
    closeBtn.classList.remove('hidden-menu');
 }

 const toggleOverlay = ()=>{
   const navBtn = document.querySelector('.back-nav-overlay');
   navBtn.style.display = navBtn.style.display === 'block' ? 'none' : 'block'; 
 }