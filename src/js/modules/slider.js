const slider = (selector, prev, next) => {
    const slides = document.querySelectorAll(selector),
    leftArrow = document.querySelector(prev),
    rightArrow = document.querySelector(next);
    
    let slideIndex = 0;

    function showSlides(n) {
        if (n > slides.length - 1) {
            slideIndex = 0;
        }

        if (n < 0) {
            slideIndex = slides.length - 1;
        }

        slides.forEach(item => {
            item.style.display = "none";
        });

        slides[slideIndex].style.display = 'block';
    }

    showSlides(slideIndex);

    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    leftArrow.addEventListener('click', () => {
        plusSlides(-1);
    });

    rightArrow.addEventListener('click', () => {
        plusSlides(1);
    });

};

export default slider;