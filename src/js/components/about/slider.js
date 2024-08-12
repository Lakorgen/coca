import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    modules: [Navigation, Pagination],
    slidesPerView: '1',
    autoplay: {
      delay: 3000,
    },
    spaceBetween: 32,
    centeredSlides: true,
    pagination: {
      el: '.hero__pagination',
      dynamicBullets: true,
    },
    breakpoints: {
      577: {
        slidesPerView: '1.5',
      },
      993: {
        slidesPerView: '2.5',
        centeredSlides: false,
      },
    },
  });
};

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    modules: [Navigation, Pagination],
    slidesPerView: '1.5',
    autoplay: {
      delay: 3000,
    },
    spaceBetween: 32,
    centeredSlides: true,
    pagination: {
      el: '.team__pagination',
      dynamicBullets: true,
    },
    breakpoints: {
      577: {
        slidesPerView: '2.5',
      },
      993: {
        slidesPerView: '3',
        centeredSlides: false,
      },
    },
  });
};
