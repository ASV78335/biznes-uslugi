const buttons = () => {
    const btnPopup = document.querySelectorAll('.btn_popup'),
        wrapper = document.querySelector('.feedback-wrapper'),
        popup = document.querySelector('.feedback_popup');


    btnPopup.forEach(item => {
        item.addEventListener('click', () => {
            wrapper.style.display = 'block';
            popup.style.display = 'block';
        })
    })


    
};

export default buttons;