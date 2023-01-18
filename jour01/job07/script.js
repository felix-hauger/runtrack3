let isWorkingDay = function (date) {

    const day = date.getDate(), // from 1 to 28-31
        weekDay = date.getDay(), // from 0 to 6
        month = date.getMonth(), // from 0 to 11
        year = date.getFullYear(), // format YYYY

        // to compare
        formattedDate = day + '/' + parseInt(month+1),
        nonWorkingDays = [
            '1/1',
            '13/4',
            '1/5',
            '8/5',
            '21/5',
            '1/6',
            '14/7',
            '15/8',
            '1/11',
            '11/11',
            '25/12'
        ],

        // to display
        weekDaysFr = [
            'lundi',
            'mardi',
            'mercredi',
            'jeudi',
            'vendredi',
            'samedi',
            'dimanche'
        ],
        monthListFr = [
            'janvier',
            'février',
            'mars',
            'avril',
            'mai',
            'juin',
            'juillet',
            'août',
            'septembre',
            'octobre',
            'novembre',
            'décembre'
        ];

    for (let i = 0; i < nonWorkingDays.length; i++) {
        console.log(nonWorkingDays[i], formattedDate);
        if (formattedDate == nonWorkingDays[i]) {
            return 'Le ' + weekDaysFr[weekDay] + ' ' + day + ' ' + monthListFr[month] + ' ' + year + ' est un jour férié';
        }
    }
    
    if (weekDay >= 5) {
        return 'Non, ' + weekDaysFr[weekDay] + ' ' + day + ' ' + monthListFr[month] + ' ' + year + ' est un week-end';
    } else {
        return 'Oui, ' + weekDaysFr[weekDay] + ' ' + day + ' ' + monthListFr[month] + ' ' + year + ' est un jour travaillé';
    }
}

let myDate = new Date(2022, 10, 13);

console.log(isWorkingDay(myDate));
