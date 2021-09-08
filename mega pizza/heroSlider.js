document.getElementsByClassName("image")[0].classList.toggle("item-big");
let slide = document.querySelector(".slide");
let prevBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");
let size = slide.clientWidth;
let counter = 1;
let imgcounter = 1;

 

window.addEventListener("resize", () => {
  slide = document.querySelector(".slide");
  prevBtn = document.querySelector("#prevBtn");
  nextBtn = document.querySelector("#nextBtn");
  size = slide.clientWidth;
 

});

nextBtn.addEventListener("click", () => {
  document
    .getElementsByClassName("image")
    [imgcounter].classList.toggle("item-big");
  if (imgcounter > 0) {
    document
      .getElementsByClassName("image")
      [imgcounter - 1].classList.remove("item-big");
  } else {
    document.getElementsByClassName("image")[2].classList.remove("item-big");
  }
  imgcounter++;
  if (imgcounter > 2) {
    imgcounter = 0;
  }
});

nextBtn.addEventListener("click", () => {
  slide.style.transition = "transform 0.4s ease-in-out";
  slide.style.transform = "translateX(" + -size * counter + "px)";
  counter++;
  if (counter > 3) {
    counter = 0;
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transform = "translateX(" + -size * counter + "px)";
    counter++;
  }
});

const sliderLoop = () => {
  setInterval(() => {
    document
      .getElementsByClassName("image")
      [imgcounter].classList.toggle("item-big");
    if (imgcounter > 0) {
      document
        .getElementsByClassName("image")
        [imgcounter - 1].classList.remove("item-big");
    } else {
      document.getElementsByClassName("image")[2].classList.remove("item-big");
    }
    imgcounter++;
    if (imgcounter > 2) {
      imgcounter = 0;
    }
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transform = "translateX(" + -size * counter + "px)";
    counter++;
    if (counter > 3) {
      counter = 0;
      slide.style.transition = "transform 0.4s ease-in-out";
      slide.style.transform = "translateX(" + -size * counter + "px)";
      counter++;
    }
  }, 3000);
};

sliderLoop();
