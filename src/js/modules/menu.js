    const menu = () => {
        const menuUL = document.getElementById('menu-ul');
        const menuFL = document.getElementById('menu-fl');
        const subMenuUL = document.getElementById('submenu-ul');
        const subMenuFL = document.getElementById('submenu-fl');
        const subMenuUlItems = document.querySelectorAll('.submenu-ul__items');
        const subMenuFlItems = document.querySelectorAll('.submenu-fl__items');
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
            subMenuFlItems.forEach(function(item) {
                item.style.display = 'block';
            });
            subMenuUlItems.forEach(function(item) {
                item.style.display = 'none';
            });
        });

    };

    export default menu;