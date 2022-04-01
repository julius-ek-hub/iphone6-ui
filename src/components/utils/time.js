/**
 * 
 * @param {String} format The format in which the date is return.
 * Any character apart from the following, will be returned unchanged: 
 * Y = Year with full digits eg 2021,
 * y = Year with last 2 digits eg 21,
 * M = Month with full name eg January,
 * W = Month with abbreviated name eg Jan,
 * m = Month as index in a year 01,
 * D = Day with full name eg Monday
 * Z = Day with abbreviated name eg Mon
 * h = Hour
 * i = Minute
 * s = Second
 * j = Millisecond
 * 
 * @returns {String} string formated as per parameter
 */

export function formatedTime(format) {

    let date = this.date || new Date();
    let result = '';
    const months = {
        0: { M: 'January', m: 'Jan' },
        1: { M: 'February', m: 'Feb' },
        2: { M: 'March', m: 'Mar' },
        3: { M: 'April', m: 'Apr' },
        4: { M: 'May', m: 'May' },
        5: { M: 'June', m: 'Jun' },
        6: { M: 'July', m: 'Jul' },
        7: { M: 'August', m: 'Aug' },
        8: { M: 'September', m: 'Sep' },
        9: { M: 'October', m: 'Oct' },
        10: { M: 'November', m: 'Nov' },
        11: { M: 'December', m: 'Dec' }
    };
    const days = {
        sun: 'Sunday',
        mon: 'Monday',
        tue: 'Tuesday',
        wed: 'Wednesday',
        thu: 'Thursday',
        fri: 'Friday',
        sat: 'Saturday'
    }

    const hours = date.getHours();
    const month = date.getMonth();
    const year = String(date.getFullYear());
    const day = date.toDateString().split(' ')[0];
    const _month = months[month];

    const noSingleDigits = (number) => {
        return String(number).length === 1 ? `0${number}` : number;
    }
    for (let char of format.split('')) {
        switch (char) {
            case 'd':
                result += noSingleDigits(date.getDate());
                break;
            case 'm':
                result += noSingleDigits(month + 1);
                break;
            case 'y':
                result += year.split('').slice(2).join('');
                break;
            case 'D':
                result += days[day.toLowerCase()];
                break;
            case 'Z':
                result += day;
                break;
            case 'M':
                result += _month.M;
                break;
            case 'W':
                result += _month.m;
                break;
            case 'Y':
                result += year;
                break;
            case 'h':
                result += hours === 0 ? 12 : (hours % 12 === 0 ? 12 : hours % 12);
                break;
            case 'i':
                result += noSingleDigits(date.getMinutes());
                break;
            case 's':
                result += noSingleDigits(date.getSeconds());
                break;
            case 'j':
                result += noSingleDigits(date.getMilliseconds());
                break;
            case 'p':
                result += hours < 12 ? 'am' : 'pm';
                break;
            case 'P':
                result += this.format('p').toUpperCase();
                break;
            default:
                result += char;
                break;
        }
    }
    return result;
}

/**
 * 
 * Compares current time with a given time and runs callback function with 
 * current time as argument if it is not the same with given time
 * @param {String} someTime The time to be compared with current time
 * @param {Function} callBack The function to call with the current time as argument 
 * if someTime is not the same with current time
 * @param {String} format the format to use for the current time, should be the same format with someTime. 
 * eg h:i P, check formatedTime for more information on time format
 * @see http://www.github.com/julius-ek-hub/weet-time.js/#L12
 * @param {Number} interval How often should the function listen in millisecons, default = 1000
 * @returns {Object} a switch to Listen and to Stop Listening any time
 */

export function Listener(someTime, callBack, format = 'h:i P', interval = 1000) {
    let listening = false;
    const startListening = () => {
        if (listening) return;
        listening = true;
        let Interval = setInterval(() => {
            if (!listening) {
                clearInterval(Interval)
                return;
            }

            let newTime = new Time().format(format);
            if (!someTime || someTime !== newTime)
                callBack(newTime);
        }, interval);
    }
    return {
        startListening,
        stopListening: () => { listening = false; }
    }
}

/**
 * Converts Locale Dates to UTC Dates
 * @param {Object} date  Any locale date to be converted to UTC
 */
export class UTC {
    constructor(date = new Date()) {
        this.date = date;
        let d = this.date;
        d.setDate(d.getUTCDate())
        d.setMonth(d.getUTCMonth())
        d.setFullYear(d.getUTCFullYear())
        d.setMilliseconds(d.getUTCMilliseconds())
        d.setSeconds(d.getUTCSeconds())
        d.setMinutes(d.getUTCMinutes());
        d.setHours(d.getUTCHours());
    }
    format = formatedTime.bind(this);
    Listener = Listener.bind(this);
}

/**
 * Date manipulations
 */
export default class Time {
    date = new Date();
    format = formatedTime.bind(this)
    Listener = Listener.bind(this);
    get UTC() { return new UTC(this.date) }
}