import '../assets/scss/main.scss';

//components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider, usePartnersSlider } from './components/slider.js';

useTheme();
useBurger();
useInsightSlider();
usePartnersSlider();
