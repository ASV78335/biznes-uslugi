const calc = () => {
    const textDoc = document.getElementById('doc'),
        inputDoc = document.querySelector('input[name="doc"]'),
        textPerson = document.getElementById('person'),
        inputPerson = document.querySelector('input[name="person"]'),
        inputDocRect = inputDoc.getBoundingClientRect();

    inputDoc.addEventListener('change', () => {
            textDoc.innerHTML = inputDoc.value;
        });

    inputDoc.addEventListener('click', (event) => {
        inputDoc.value = Math.round((event.clientX - inputDocRect.left - 30) / 5);    
        textDoc.innerHTML = inputDoc.value;
        });
        
    inputPerson.addEventListener('change', () => {
        textPerson.innerHTML = inputPerson.value;
    })

};

export default calc;