const formatDate = (date) => {
    //разбиваем дату
    let dayOfMonth = date.getDate(); //получили день
    let month = date.getMonth() + 1; //получили месяц
    let year = date.getFullYear();//получили год
    let hour = date.getHours(); //получили часы
    let minutes = date.getMinutes();//получили минуты

    let differenceMiliSec = new Date() - date; //разница в милисекундах
    let differenceSec = Math.round(differenceMiliSec / 1000); //разница в секундах
    let differenceMin = differenceSec / 60; //разница в минутах
    let differenceHour = differenceMin / 60; //разница в часах

    year = year.toString().slice(2);//преобразовываем год в строку и отрежим 2 цифры сначала строки
    // если месяц, день месяца, часы или минуты меньше цифры 10, т.е. от 0 до 9, то в начале подставляем 0
    if(month < 10){
        month = '0' + month;
    } else {
        month = month;
    }

    if(dayOfMonth < 10){
        dayOfMonth = '0' + dayOfMonth;
    } else {
        dayOfMonth = dayOfMonth;
    }

    if(hour < 10){
        hour = '0' + hour;
    } else {
        hour = hour;
    }

    if(minutes < 10){
        minutes = '0' + minutes;
    } else {
        minutes = minutes;
    }
    
    
    if (differenceSec < 1) {
        return 'Прямо сейчас!';
    } else if (differenceMin < 1) {
        return differenceSec;
    } else if (differenceHour < 1) {
        return differenceMin;
    } else {
        return (dayOfMonth + "." + month + "." + year + " " + hour + ":" + minutes);
        //`${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}
alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
alert( formatDate(new Date(new Date - 30 * 1000)) + " секунд назад!" ); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) + " минут назад!"); // "5 мин. назад"
alert( "День назад: " + formatDate(new Date(new Date - 86400 * 1000)) );//день назад