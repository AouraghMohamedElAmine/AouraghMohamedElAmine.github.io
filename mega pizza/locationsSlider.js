let Slider_location = document.querySelector(".locationSlider");
/*
let PrevBtn_location = document.querySelector("#locationPrevBtn");
let NextBtn_location = document.querySelector("#locationNextBtn");*/
let Size_location = Slider_location.clientWidth;
let counter_location = 1;


   
window.addEventListener("resize", () => {
  Slider_location = document.querySelector(".locationSlider");
     
  Size_location = Slider_location.clientWidth
 

});
  
const sliderLocationLoop = () => {
    setInterval(() => {
        Slider_location.style.transition = "transform 0.4s ease-in-out";
        Slider_location.style.transform = "translateX(" + -Size_location * counter_location + "px)";
        counter_location++;
      if (counter_location > 14) {
        counter_location = 0;
        Slider_location.style.transition = "transform 0.4s ease-in-out";
        Slider_location.style.transform = "translateX(" + -Size_location * counter_location + "px)";
        counter_location++;
      }
     }, 3000);
  };
  
   
   sliderLocationLoop();
  
  