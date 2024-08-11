import '../assets/scss/contact.scss';

//components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePartnersSlider } from './components/home/slider.js';
import { useYandexMap } from './components/contact/map.js';
import { usePhone } from './components/contact/phone.js';
import { useValidate } from './components/contact/validate.js';

useTheme();
useBurger();
usePartnersSlider();
useYandexMap();
usePhone();
useValidate();
