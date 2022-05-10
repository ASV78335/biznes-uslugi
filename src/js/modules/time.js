const time = (timeIndicator, timeInfo) => {

    const indicator = document.querySelectorAll(timeIndicator),
        info = document.querySelectorAll(timeInfo);
    const ourZone = -8,
        workStart = 9,
        workEnd = 18;

    // Узнать текущее время и часовой пояс посетителя

    let curTime = new Date(),
        hours = curTime.getHours(),
        zone = curTime.getTimezoneOffset(),
        dif = zone / 60 - ourZone;

    
    // Перевести часы работы в часовой пояс посетителя

    hours = hours + dif;

    // Сравнить с режимом работы

    if ((hours > workStart) && (hours < workEnd)) {
        indicator.forEach(item => {
            item.style.backgroundColor = 'lime';
        });
        
        info.forEach(item => {
            item.innerHTML = 'Работаем';
        })
    } else {
        indicator.forEach(item => {
            item.style.backgroundColor = 'red';
        });
        info.forEach(item => {
            item.innerHTML = 'Закрыто';
        })

    }

};

export default time;