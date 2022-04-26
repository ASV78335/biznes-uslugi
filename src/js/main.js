import time from './modules/time';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    time('.top-info-header__current-state', '.top-info-header__current-text');

    const scroll = calcScroll();

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    };

    function setCurrentState() {
        var now = new Date();
        alert(now);
    };


    // =================================================================
    // Submenu
    // =================================================================

    const menu = () => {
        const menuUL = document.getElementById('menu-ul');
        const menuFL = document.getElementById('menu-fl');
        const subMenuUL = document.getElementById('submenu-ul');
        const subMenuFL = document.getElementById('submenu-fl');
        const subMenuUlItems = document.querySelectorAll('.submenu-ul-items');
        const subMenuFlItems = document.querySelectorAll('.submenu-fl-items');
        const subMenuNoItems = document.querySelectorAll('.submenu-no-items');
        const menuWrapper = document.getElementById('menu-wrapper');

        function toggleUL() {
            if (subMenuUL.style.display == 'grid') {
                subMenuUL.style.display = 'none';
                menuWrapper.style.display = 'none';
            } else {
                subMenuUL.style.display = 'grid';
                menuWrapper.style.display = 'block';
            };
        };

        function toggleFL() {
            if (subMenuFL.style.display == 'grid') {
                subMenuFL.style.display = 'none';
                menuWrapper.style.display = 'none';
            } else {
                subMenuFL.style.display = 'grid';
                menuWrapper.style.display = 'block';
            };
        };
    
        menuUL.addEventListener('mouseenter', function () {
            toggleUL();
        });

        menuUL.addEventListener('mouseleave', function () {
            toggleUL();
        });

        menuFL.addEventListener('mouseenter', function () {
            toggleFL();
        });

        menuFL.addEventListener('mouseleave', function () {
            toggleFL();
        });

        menuUL.addEventListener('mouseenter', function () {
            subMenuUlItems.forEach(function(item) {
                item.style.display = 'block';
            });
            subMenuFlItems.forEach(function(item) {
                item.style.display = 'none';
            });
        });

        menuFL.addEventListener('mouseenter', function () {
            subMenuUlItems.forEach(function(item) {
                item.style.display = 'none';
            });
            subMenuFlItems.forEach(function(item) {
                item.style.display = 'block';
            });
        });

        subMenuNoItems.forEach(function(item) {
            item.addEventListener('mouseenter', function () {
                subMenuUL.style.display = 'none';
                menuWrapper.style.display = 'none';
            });
        });
    };

    menu();
});