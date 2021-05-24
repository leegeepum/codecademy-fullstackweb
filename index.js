const getSleepHours = (day) => {
    switch (day) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 7;
        case 'wednesday':
            return 6;
        case 'thursday':
            return 7;
        case 'friday':
            return 8;
        case 'saturday':
            return 4;
        case 'sunday':
            return 9;
        default:
            return 8;
    }
}

const getActualSleepHours = () => {
    const totalHours = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

    return totalHours;
}

const getIdealSleepHours = (idealHours=8) => idealHours * 7;

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(9);

    if (actualSleepHours === idealSleepHours) {
        console.log(`Perfect amount of sleep! You slept ${idealSleepHours}!`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`Too much sleep! You slept ${actualSleepHours - idealSleepHours} hours more than you need to!`);
    } else {
        console.log(`You need more sleep! Please sleep ${idealSleepHours - actualSleepHours} more hours!`);
    }
}

calculateSleepDebt();