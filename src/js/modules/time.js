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

    // Текущий день недели

    let dayWeek = [7, 1, 2, 3, 4, 5, 6][curTime.getDay()];

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
        });
    };

    // Если суббота/воскресенье

    if (dayWeek === 6 || dayWeek === 7) {
        indicator.forEach(item => {
            item.style.backgroundColor = 'red';
        });
        info.forEach(item => {
            item.innerHTML = 'Закрыто';
        });
    };

};

export default time;