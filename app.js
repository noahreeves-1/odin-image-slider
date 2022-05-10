// function that removes the "visible" class from the current photo and adds the class to the NEXT photo
const initial = 0; // does this need to be outside the function?
const amount = 1000; // does this need to be outside the function?
const allSlides = document.getElementsByClassName("slide");
const allSlidesArray = [...allSlides];
const visibleDots = document.querySelectorAll(".visible-dot");
const visibleDotArray = [...visibleDots];
const firstDot = document.querySelector(".first-dot");
const lastDot = document.querySelector(".last-dot");
const dotsNodeList = document.querySelectorAll(".dot");
const dotsArray = [...dotsNodeList];
const slidesContainer = document.querySelector(".slides-container");

function nextPhoto() {
  const visibleElement = document.getElementsByClassName("visible");
  const firstSlide = document.querySelector(".first");
  const allSlides = document.getElementsByClassName("slide");
  const allSlidesArray = [...allSlides];
  const negativeAmount = initial - amount;
  const positiveAmount = initial + amount;
  // const firstDot = document.querySelector(".first-dot");
  const visibleDots = document.querySelectorAll(".visible-dot");
  const visibleDotArray = [...visibleDots];

  if (
    visibleElement[0].classList.contains("last") &&
    visibleElement[0].classList.contains("visible")
  ) {
    allSlidesArray.forEach((element) => {
      element.style.transform = "";
      element.firstElementChild.style.transform = "";
    });

    visibleElement[0].classList.remove("visible");

    firstSlide.classList.add("visible");
    firstSlide.style.transform = "translateX(" + negativeAmount + "px)";
    firstSlide.firstElementChild.style.transform =
      "translateX(" + positiveAmount + "px)";

    firstDot.classList.add("visible-dot");
    visibleDotArray[0].classList.remove("visible-dot");

    console.log(visibleElement[0]); // not applying css properly to first slide after it loops
  } else if (visibleElement[0].classList.contains("visible")) {
    visibleElement[0].nextElementSibling.classList.add("visible");
    visibleElement[0].classList.remove("visible");
    visibleElement[0].style.transform = "translateX(-1000px)";
    visibleElement[0].firstElementChild.style.transform = "translateX(1000px)";
    // make the dot move to the next one
    visibleDotArray[0].nextElementSibling.classList.add("visible-dot");
    visibleDotArray[0].classList.remove("visible-dot");
  }
}

// function that removes the "visible" class from the current photo and adds the class to the PREVIOUS photo
function previousPhoto() {
  const visibleElement = document.getElementsByClassName("visible");
  const lastSlide = document.querySelector(".last");
  const visibleDots = document.querySelectorAll(".visible-dot");
  const visibleDotArray = [...visibleDots];

  if (
    visibleElement[0].classList.contains("first") &&
    visibleElement[0].classList.contains("visible")
  ) {
    allSlidesArray.forEach((element) => {
      element.style.transform = "";
      element.firstElementChild.style.transform = "";
    });

    visibleElement[0].classList.remove("visible");

    lastSlide.classList.add("visible");
    lastSlide.style.transform = "translateX(1000px)";
    lastSlide.firstElementChild.style.transform = "translateX(-1000px)";

    // make dot move back one
    lastDot.classList.add("visible-dot");
    console.log(visibleDotArray[0]);
    visibleDotArray[0].classList.remove("visible-dot");
    console.log(visibleDotArray[0]);
  } else if (visibleElement[0].classList.contains("visible")) {
    visibleElement[0].previousElementSibling.classList.add("visible");
    visibleElement[1].classList.remove("visible");
    visibleElement[0].style.transform = "translateX(1000px)";
    visibleElement[0].firstElementChild.style.transform = "translateX(-1000px)";

    // make dot move back one
    visibleDotArray[0].previousElementSibling.classList.add("visible-dot");
    visibleDotArray[0].classList.remove("visible-dot");
  }
}

dotsArray.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    // // TESTING IF DOTSARRAY.INDEXOF GETS ME THE RIGHT INDEX
    // console.log(dotsArray.indexOf(e.target));

    // // TESTING IF I CAN GET THE DATA-SLIDE NUMBER
    // allSlidesArray.forEach((slide) => {
    //   // slide.classList.remove("visible"); // removes "visible" class from all slides
    //   console.log(slide.dataset.slide); // data-slide numbers of all 5 slides
    // });

    // removes "visible-dot" class from all dots
    dotsArray.forEach((dot) => {
      dot.classList.remove("visible-dot");
    });
    // adds "visible-dot" class to clicked dot
    e.target.classList.add("visible-dot");

    allSlidesArray.forEach((slide) => {
      // removes "visible" class from all slides
      slide.classList.remove("visible");
      // adds "visible" class to slide with dataset-slide number that matches index of clicked dot
      if (slide.dataset.slide === dotsArray.indexOf(e.target).toString()) {
        console.log("hello");
        slide.classList.add("visible");
      }
    });
  });
});

setInterval(() => {
  setTimeout(() => {
    nextPhoto();
  }, 3000);
}, 3000);
