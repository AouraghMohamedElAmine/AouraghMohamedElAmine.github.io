
 let drop= document.getElementById('dropdown'); 
 let mobile= document.getElementById('mobile-dropdown'); 
 let arrow= document.getElementById('check'); 
 let logo= document.getElementById('logo');
 const projects = document.querySelector('#projects');
console.log('js is working')
 projects.addEventListener('click',()=>{
    const hero = document.querySelector('#hero'); 
    const nav = document.querySelector('#nav'); 

   window.scroll({
      top:hero.clientHeight+nav.clientHeight,
       behavior: 'smooth'
    });

 })

 logo.addEventListener('mouseenter',()=>{ 

    let border= document.getElementsByClassName('logo-border');
    border[0].classList.toggle('logo-border-after');

 })

 logo.addEventListener('mouseleave',()=>{ 

    let border= document.getElementsByClassName('logo-border');
    border[0].classList.toggle('logo-border-after');

 })


drop.addEventListener('change',()=> {   
mobile.classList.toggle("hidden"); 
mobile.classList.toggle("is-open");
mobile.classList.toggle("scale-y-0");

 


     
 })
 
 
 window.addEventListener('scroll',()=>{ 
     if(mobile.classList.contains("is-open")){
         drop.dispatchEvent(new Event("change")); 
         arrow.checked=false;




     }
   })

