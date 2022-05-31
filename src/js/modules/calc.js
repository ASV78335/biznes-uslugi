const calc = () => {
    const textDoc = document.getElementById('doc'),
        inputDoc = document.querySelector('input[name="doc"]'),
        textPerson = document.getElementById('person'),
        inputPerson = document.querySelector('input[name="person"]'),
        inputDocRect = inputDoc.getBoundingClientRect();

    
    function roundTo5 (num) {
        let res = Math.round(num / 5) * 5;
        if (res == 1) res = 0;
        return res
    };
    
    inputDoc.addEventListener('change', () => {
            textDoc.innerHTML = inputDoc.value;
        });

    inputDoc.addEventListener('click', (event) => {
        inputDoc.value = roundTo5(Math.round((event.clientX - inputDocRect.left) / 5));
        textDoc.innerHTML = inputDoc.value;
        textDoc.style.left = 2 + inputDoc.value * 5 + 'px';
        console.log(inputDoc.value, textDoc.style.left);
        });
        
    inputPerson.addEventListener('change', () => {
        textPerson.innerHTML = inputPerson.value;
    })

};

export default calc;