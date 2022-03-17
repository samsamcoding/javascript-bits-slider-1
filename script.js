'use strict';

// Select the elements
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  let curSlide = 0;
  const maxSlide = slides.length;
  const dotContainer = document.querySelector('.dots');

  // For presentation only
  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.3) translateX(-1000px)';
  // slider.style.overflow = 'visible';

  // Functions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}">`
      );
    });
  };
  createDots();

  const activateDots = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    });
  };

  // 0%, 100%, 200%, 300%
  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
  // goToSlide(0);

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

    goToSlide(curSlide);
    activateDots(curSlide);
  };

  // Previous Slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDots(curSlide);
  };

  const init = function () {
    goToSlide(0);
    activateDots(0);
  };

  init();

  // Event Listeners
  btnLeft.addEventListener('click', nextSlide);
  btnRight.addEventListener('click', prevSlide);

  // Keyboard keys(left and right)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') nextSlide();
    e.key === 'ArrowRight' && prevSlide();
  });

  // Event delegation
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
    }
  });
};
slider();

/*
Takeaways:
Part 1: 
  - Manipulating css using transform: translateX() to implement slider effect

Part 2: 
  - Using keydown addEventListener 
  - Inserting elements using insertAdjacentHTML('beforeend', '<code>')
  - Familiarize with dataset attributes (ex. e.target.dataset.slide // return "slide-value"
*/
