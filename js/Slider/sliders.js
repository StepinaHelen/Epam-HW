function Slider(list, buttonRight, buttonLeft) {
  this.galleryItems = document.querySelectorAll(list);
  this.currentIndex = 0;
  this.buttonNext = document.querySelector(buttonRight);
  this.buttonPrev = document.querySelector(buttonLeft);

  this.nextSlide = function () {
    this.galleryItems[this.currentIndex].classList.add("unvisible");
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex >= this.galleryItems.length) {
      this.currentIndex = this.galleryItems.length - 1;
    }
    this.galleryItems[this.currentIndex].classList.remove("unvisible");
    this.galleryItems[this.currentIndex].classList.add("visible");
  };

  this.prevSlide = function () {
    this.galleryItems[this.currentIndex].classList.add("unvisible");
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    }
    this.galleryItems[this.currentIndex].classList.remove("unvisible");
    this.galleryItems[this.currentIndex].classList.add("visible");
  };
}

function rightLeftSlider() {
  Slider.apply(this, arguments);
  let parentNextSlide = this.nextSlide;
  this.nextSlide = function () {
    parentNextSlide.call(this);
    if (this.currentIndex === this.galleryItems.length - 1) {
      this.buttonNext.setAttribute("disabled", true);
      this.buttonPrev.removeAttribute("disabled");
    }
  };

  let parentPrevSlide = this.prevSlide;
  this.prevSlide = function () {
    parentPrevSlide.call(this);
    if (this.currentIndex === 0) {
      this.buttonPrev.setAttribute("disabled", true);
      this.buttonNext.removeAttribute("disabled");
    }
  };
}
function sliderWithDots() {
  rightLeftSlider.apply(this, arguments);
  this.dots = document.getElementsByClassName("slider-dots_item");
  this.dots[this.currentIndex].className += " active";

  let parentNextSlide = this.nextSlide;
  this.nextSlide = function () {
    parentNextSlide.call(this);

    for (i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace("active", "");
    }

    this.dots[this.currentIndex].className.replace("active", "");
    this.dots[this.currentIndex].className += " active";
  };

  let parentPrevSlide = this.prevSlide;
  this.prevSlide = function () {
    parentPrevSlide.call(this);
    for (i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace("active", "");
    }

    this.dots[this.currentIndex].className.replace("active", "");
    this.dots[this.currentIndex].className += " active";
  };

  this.buttonNext.addEventListener("click", this.nextSlide.bind(this));
  this.buttonPrev.addEventListener("click", this.prevSlide.bind(this));
}

let slider1 = new sliderWithDots(
  ".testimonials-infrom-item",
  ".testimonials-button-right",
  ".testimonials-button-left"
);

function infiniteSlider() {
  Slider.apply(this, arguments);

  this.nextSlide = function () {
    this.galleryItems[this.currentIndex].classList.add("unvisible");
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex >= this.galleryItems.length) {
      this.currentIndex = 0;
    }
    this.galleryItems[this.currentIndex].classList.remove("unvisible");
    this.galleryItems[this.currentIndex].classList.add("visible");
  };

  this.prevSlide = function () {
    this.galleryItems[this.currentIndex].classList.add("unvisible");
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.galleryItems.length - 1;
    }
    this.galleryItems[this.currentIndex].classList.remove("unvisible");
    this.galleryItems[this.currentIndex].classList.add("visible");
  };
}

function selfleafingSlider() {
  infiniteSlider.apply(this, arguments);
  this.timerId = setInterval(this.nextSlide.bind(this), 3000);

  let parentNextSlide = this.nextSlide;
  this.nextSlide = function () {
    parentNextSlide.call(this);
  };

  this.handlerNextButton = function () {
    this.nextSlide.bind(this)();
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.timerId = setInterval(this.nextSlide.bind(this), 3000);
  };

  let parentPrevSlide = this.prevSlide;
  this.prevSlide = function () {
    parentPrevSlide.call(this);
  };

  this.handlerPrevButton = function () {
    this.prevSlide.bind(this)();
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.timerId = setInterval(this.nextSlide.bind(this), 3000);
  };

  this.buttonNext.addEventListener("click", this.handlerNextButton.bind(this));
  this.buttonPrev.addEventListener("click", this.handlerPrevButton.bind(this));
}

let slider2 = new selfleafingSlider(
  ".portfolio-container-item",
  ".portfolio-button-right",
  ".portfolio-button-left"
);
