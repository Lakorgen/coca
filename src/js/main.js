import '/scss/main.scss';

//components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/header.js';
import {
  useInsightSlider,
  usePartnersSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';

useTheme();
useBurger();
useHeader();
useInsightSlider();
usePartnersSlider();
useTestimonialsSlider();
