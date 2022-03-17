'use strict';

// Select the elements
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let curSlide = 0;
const maxSlide = slides.length;

// For presentation only
// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.3) translateX(-1000px)';
// slider.style.overflow = 'visible';

const gotToSlide = function (slide) {
  slides.forEach((s, i) => {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  });
};

// 0%, 100%, 200%, 300%
// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
gotToSlide(0);

// Next slide
// -100%, 0%, 100%, 200%

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  // slides.forEach((s, i) => {
  //   slides.forEach(
  //     (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  //   );
  // });

  gotToSlide(curSlide);
};

btnLeft.addEventListener('click', nextSlide);

// Previous Slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  gotToSlide(curSlide);
};

btnRight.addEventListener('click', prevSlide);

/*
Part 1: 
Takeaways:
  - Manipulating css using transform: translateX() to implement slider effect
*/
