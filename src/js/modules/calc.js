const calc = () => {
    const textDoc = document.getElementById('doc'),
        inputDoc = document.querySelector('input[name="doc"]'),
        textPerson = document.getElementById('person'),
        inputPerson = document.querySelector('input[name="person"]'),
        inputDocRect = inputDoc.getBoundingClientRect(),
        inputPersonRect = inputPerson.getBoundingClientRect();

    
    function roundTo5 (num) {
        let res = Math.round(num / 5) * 5;
        if (res == 1) res = 0;
        return res
    };
    
    inputDoc.addEventListener('change', () => {
            textDoc.innerHTML = inputDoc.value;
        });

    inputDoc.addEventListener('click', (event) => {
        const offset = 13;
        let left;

        inputDoc.value = roundTo5(Math.round((event.clientX - inputDocRect.left) / 5));
        textDoc.innerHTML = inputDoc.value;
        
        left = offset * (100 - inputDoc.value) / 100;
        
        left = inputDoc.value * 5 + left;
        if (left < offset) left = offset;
        textDoc.style.left =  left + 'px';

        // console.log(event.clientX - inputDocRect.left, inputDoc.value, left);
        });
        
    inputPerson.addEventListener('change', () => {
        textPerson.innerHTML = inputPerson.value;
    });

    inputPerson.addEventListener('click', (event) => {
        const offset = 13;
        let left;

        inputPerson.value = Math.round((event.clientX - inputPersonRect.left) / 50);
        textPerson.innerHTML = inputPerson.value;
        
        left = offset * (10 - inputPerson.value) / 10;
        
        left = inputPerson.value * 50 + left;
        if (left < offset) left = offset;
        textPerson.style.left =  left + 'px';
        
        // console.log(event.clientX - inputPersonRect.left, inputPerson.value, left);
        });
};

export default calc;