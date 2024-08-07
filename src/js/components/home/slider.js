import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.insight__pagination',
      dynamicBullets: true,
    },
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const usePartnersSlider = () => {
  new Swiper('.partners__slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    height: 'auto',
    width: 160,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    slidesPerView: 1,
    loop: true,
    spaceBetween: 22,
    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
  });
};
