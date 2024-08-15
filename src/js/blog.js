import '/scss/blog.scss';

//components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/header.js';
import { useHeroSlider, useArticlesSlider } from './components/blog/slider.js';
import { useTabControls } from './components/blog/tabControl.js';

useTheme();
useBurger();
useHeader();
useHeroSlider();
useTabControls();
useArticlesSlider();
