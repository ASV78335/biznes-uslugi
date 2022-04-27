import menu from './modules/menu';
import time from './modules/time';
import calcScroll from './utils/calcScroll';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    menu();
    time('.top__current-state', '.top__current-text');
    calcScroll();





});