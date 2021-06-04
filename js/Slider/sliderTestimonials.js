let galleryItems = document.querySelectorAll(".testimonials-infrom-item");
let galleryList = document.querySelector(".testimonials-infrom-list");
let buttonNext = document.querySelector(".testimonials-button-right");
let buttonPrev = document.querySelector(".testimonials-button-left");

let currentIndex = 0;
let timerId = setInterval(nextSlide, 3000);
let startPoint = {};
let endPoint;

buttonNext.addEventListener("click", handlerNextButton);
buttonPrev.addEventListener("click", handlerPrevButton);
galleryList.addEventListener("mouseenter", clearTimer);
galleryList.addEventListener("mouseleave", handlerMouseLeave);
galleryList.addEventListener("touchstart", handlerStartPoint);
galleryList.addEventListener("touchend", handlerEndPoint);

function handlerNextButton() {
  nextSlide();
  clearTimer();
  timerId = setInterval(nextSlide, 3000);
}

function handlerPrevButton() {
  prevSlide();
  clearTimer();
  timerId = setInterval(nextSlide, 3000);
}

function nextSlide() {
  galleryItems[currentIndex].classList.add("unvisible");
  currentIndex = currentIndex + 1;
  if (currentIndex >= galleryItems.length) {
    currentIndex = 0;
  }
  galleryItems[currentIndex].classList.remove("unvisible");
  galleryItems[currentIndex].classList.add("visible");
}

function prevSlide() {
  galleryItems[currentIndex].classList.add("unvisible");
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = galleryItems.length - 1;
  }
  galleryItems[currentIndex].classList.remove("unvisible");
  galleryItems[currentIndex].classList.add("visible");
}

function handlerMouseLeave() {
  if (timerId === null) {
    timerId = setInterval(nextSlide, 3000);
  }
}

function handlerStartPoint(event) {
  startPoint.x = event.changedTouches[0].pageX;
}

function handlerEndPoint(event) {
  endPoint = event.changedTouches[0];
  if (event.changedTouches[0].pageX > endPoint) {
    handlerPrevButton();
  } else {
    handlerNextButton();
  }
}

function clearTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}
