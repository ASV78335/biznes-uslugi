import menu from './modules/menu';
import time from './modules/time';
import calcScroll from './utils/calcScroll';
import accordion from './modules/accordion';
import slider from './modules/slider';
import feedback from './modules/feedback';
import buttons from './modules/buttons';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    document.addEventListener('mousedown', (e) => {
        e.preventDefault();
    });
    
    menu();
    time('.top__current-state', '.top__current-text');
    time('.contacts__current-state', '.contacts__current-text');
    calcScroll();
    accordion('.accordion__header');
    slider('.slider__item', '.arrow_left', '.arrow_right');
    feedback();
    buttons();
    calc();
});
