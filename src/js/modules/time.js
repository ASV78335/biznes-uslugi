const time = (timeIndicator, timeInfo) => {

    const indicator = document.querySelector(timeIndicator),
        info = document.querySelector(timeInfo);
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
        indicator.style.backgroundColor = 'lime';
        info.innerHTML = 'Работаем';
    } else {
        indicator.style.backgroundColor = 'red';
        info.innerHTML = 'Закрыто';

    }

};

export default time;