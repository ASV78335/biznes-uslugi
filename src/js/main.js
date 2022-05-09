import menu from './modules/menu';
import time from './modules/time';
import calcScroll from './utils/calcScroll';
import accordion from './modules/accordion';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    menu();
    time('.top__current-state', '.top__current-text');
    calcScroll();
    accordion('.accordion__header');
    slider('.slider__item', '.arrow_left', '.arrow_right');





});