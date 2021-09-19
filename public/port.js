
 let drop= document.getElementById('dropdown'); 
 let mobile= document.getElementById('mobile-dropdown'); 
 let arrow= document.getElementById('check'); 
 let logo= document.getElementById('logo');
 const svg = document.getElementById('svg');

 const projectsWebView1 = document.querySelector('.projectsWebView');
 const projectsWebView2 = document.querySelector('.projectsWebView2');
 const projectsMobileView = document.querySelector('.projectsMobileView');

 const SkillsWebView = document.querySelector('.SkillsWebView');
 const SkillsMobileView = document.querySelector('.SkillsMobileView');


 const contactWebView = document.querySelector('.contactWebView');
 const contactMobileView = document.querySelector('.contactMobileView');


 const ProjectScroller = ()=>{
      const hero = document.querySelector('#hero'); 
      const nav = document.querySelector('#nav'); 
     window.scroll({
        top:hero.clientHeight+nav.clientHeight+svg.clientHeight,
         behavior: 'smooth'
      });
 }

 const SkillsScroller = ()=>{
   let rect = document.querySelector('.skillsSection').getBoundingClientRect();
   window.scroll({
        top: rect.top + window.scrollY,
        behavior: 'smooth'
     });
}


 
const SkillsScrollerMobile = ()=>{
   let rect = document.querySelector('.skillsSection').getBoundingClientRect();
    
   window.scroll({
        top: rect.top + window.scrollY - document.querySelector('.mobile-dropdown').clientHeight,
        behavior: 'smooth'
     }); 
   };

   
 const ContactScroller = ()=>{
   let rect = document.querySelector('.contactSection').getBoundingClientRect();
 
   window.scroll({
        top: rect.top + window.scrollY,
        behavior: 'smooth'
     });
};

 const ContactScrollerMobile = ()=>{
   let rect = document.querySelector('.contactSection').getBoundingClientRect();
    
   window.scroll({
        top: rect.top + window.scrollY - document.querySelector('.mobile-dropdown').clientHeight,
        behavior: 'smooth'
     });
};




   
 projectsWebView1.addEventListener('click',ProjectScroller);
 projectsWebView2.addEventListener('click',ProjectScroller);
 projectsMobileView.addEventListener('click',ProjectScroller);

 SkillsWebView.addEventListener('click',SkillsScroller);
 SkillsMobileView.addEventListener('click',SkillsScrollerMobile);

 
 contactWebView.addEventListener('click',ContactScroller)
 contactMobileView.addEventListener('click',ContactScrollerMobile)


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
