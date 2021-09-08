const slideContainer = document.querySelector(".slider-container");
const menuSection = document.querySelector('#menu-section'); 
 
const navBar = document.querySelector('#navBar'); 
const NavMenu = document.querySelectorAll('#Nav-menu'); 
const menuItems = document.querySelectorAll(".menu-item");
 
let ContainerSize = slideContainer.clientWidth;

const item0 = document.getElementById("0");
const item1 = document.getElementById("1");
const item2 = document.getElementById("2");
const item3 = document.getElementById("3");
const item4 = document.getElementById("4");
const item5 = document.getElementById("5");
 

item0.addEventListener("click", () => {slideContainer.scrollTo({ top: 0, left: item0.clientWidth*parseInt(item0.id), behavior: "smooth" });});
item1.addEventListener("click", () => {slideContainer.scrollTo({ top: 0, left: document.body.clientWidth*parseInt(item1.id), behavior: "smooth" });});
item2.addEventListener("click", () => {slideContainer.scrollTo({ top: 0, left: document.body.clientWidth*parseInt(item2.id), behavior: "smooth" });});
item3.addEventListener("click", () => {slideContainer.scrollTo({ top: 0, left: document.body.clientWidth*parseInt(item3.id), behavior: "smooth" });});
item4.addEventListener("click", () => {slideContainer.scrollTo({ top: 0, left: document.body.clientWidth*parseInt(item4.id), behavior: "smooth" });});
 
NavMenu[0].addEventListener('click', ()=>{
    window.scroll({
        top: (menuSection.offsetTop - navBar.clientHeight),
         behavior: 'smooth'
      });
} )
NavMenu[1].addEventListener('click', ()=>{
    window.scroll({
        top: (menuSection.offsetTop - navBar.clientHeight),
         behavior: 'smooth'
      });
} )