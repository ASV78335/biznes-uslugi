import { type } from "os";

const calc = () => {
    const 
        inputType = document.querySelectorAll('input[name="type"]'), 
        inputForm = document.querySelectorAll('input[name="pf"]'),
        inputSNO = document.querySelectorAll('input[name="sno"]'),
        textDoc = document.getElementById('doc'),
        inputDoc = document.querySelector('input[name="doc"]'),
        textPerson = document.getElementById('person'),
        inputPerson = document.querySelector('input[name="person"]'),
        inputDocRect = inputDoc.getBoundingClientRect(),
        inputPersonRect = inputPerson.getBoundingClientRect(),
        inputRAR = document.querySelector('input[name="rar"]'),
        inputDMDK = document.querySelector('input[name="dmdk"]'),
        result =  document.querySelector('.calc__footer_res');
    let sum = 0;

    
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
        
        left = offset * (100 - inputDoc.value) / 100 - inputDoc.value / 50;
        
        left = inputDoc.value * 5 + left;
        if (left < offset) left = offset;
        textDoc.style.left =  left + 'px';

        });
        
    inputPerson.addEventListener('change', () => {
        textPerson.innerHTML = inputPerson.value;
    });

    inputPerson.addEventListener('click', (event) => {
        const offset = 13;
        let left;

        inputPerson.value = Math.round((event.clientX - inputPersonRect.left) / 50);
        textPerson.innerHTML = inputPerson.value;
        
        left = offset * (10 - inputPerson.value) / 10 - inputPerson.value / 5;
        
        left = inputPerson.value * 50 + left;
        if (left < offset) left = offset;
        textPerson.style.left =  left + 'px';
        
        });
    
    // ================== Core ==================

    const calcFunc = () => {
        
        let valueType = 0,
            valueForm = 0,
            valueSNO = 0,
            valueRAR = 0,
            valueDMDK = 0;

        if (inputRAR.checked) valueRAR = inputRAR.value;
        if (inputDMDK.checked) valueDMDK = inputDMDK.value;

        for (let item of inputType) {
            if (item.checked) {
                valueType = item.value;
            }
        };

        for (let item of inputForm) {
            if (item.checked) {
                valueForm = item.value;
            }
        };

        for (let item of inputSNO) {
            if (item.checked) {
                valueSNO = item.value;
            }
        };

        sum = Math.round((+valueType) * (+valueForm) * (+valueSNO) * ((+inputDoc.value * 10) + (inputPerson.value * 1000)) + (+valueRAR) + (+valueDMDK));
        console.log(valueType, valueForm, valueSNO, inputDoc.value, inputPerson.value, valueRAR, valueDMDK);

        if (sum == 0) sum = 1000;
        result.innerHTML = sum;
    };

   

    for (let item of inputType) {
        item.addEventListener('change', calcFunc);
    };

    for (let item of inputForm) {
        item.addEventListener('change', calcFunc);
    };

    for (let item of inputSNO) {
        item.addEventListener('change', calcFunc);
    };
    inputDoc.addEventListener('click', calcFunc);
    inputPerson.addEventListener('click', calcFunc);

    inputRAR.addEventListener('change', calcFunc);
    inputDMDK.addEventListener('change', calcFunc);


    calcFunc();
              
};

export default calc;