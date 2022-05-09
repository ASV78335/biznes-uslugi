const slider = (selector, prev, next) => {
    const slides = document.querySelectorAll(selector),
    leftArrow = document.querySelector(prev),
    rightArrow = document.querySelector(next);
    
    let slideIndex = 0;

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => {
            item.classList.add("animated");
            item.style.display = "none";
        });

        slides[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    leftArrow.addEventListener('click', () => {
        plusSlides(-1);
        slides[slideIndex - 1].classList.remove('slider__item_hide');
        slides[slideIndex - 1].classList.add('slider__item_hide');
    });

    rightArrow.addEventListener('click', () => {
        plusSlides(1);
        slides[slideIndex - 1].classList.remove('slider__item_hide');
        slides[slideIndex - 1].classList.add('slider__item_hide');
    });

};

export default slider;