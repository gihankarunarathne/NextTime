/**
 * A Time Forecaster
 *
 * USAGE:
 * let nextTime = require('ScheduleForecaster').NextTime;
 * nextTime.nextDate();
 * nextTime.nextDate(new Date(2015, 12, 17));
 * nextTime.nextWeek();
 * nextTime.nextWeek(new Date(2015, 12, 17));
 * nextTime.nextMonth();
 * nextTime.nextMonth(new Date(2015, 12, 17));
 */
'use strict';

let debug = require('debug')('ScheduleForecaster:lib:NextTime');

module.exports = class NextTime {

    /**
     * Get next date after a given date
     * @param date {Integer/Date/Date String} A valid date format
     *        (optional) Default `new Date()`
     * @return {Date} Next Date instance
     * USAGE:
     *   // If current date is 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', then
     *   // following method return 'Wed Dec 02 2015 00:00:00 GMT+0530 (IST)'
     *   nextTime.nextDate();
     *
     *   // If feed with a date 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', then
     *   // following method return 'Wed Dec 02 2015 00:00:00 GMT+0530 (IST)'
     *   nextTime.nextDate(new Date(2015,11,1));
     */
    static nextDate(date) {
        date = this._getValidDate(date);
        date.setDate(date.getDate() + 1);
        return date;
    }

    static nextDates(startDate, endDate) {
        const start = this._getValidDate(startDate);
        const end = this._getValidDate(endDate);

        let dates = [];
        let nextDate = new Date(start.getTime());
        while(nextDate < end) {
            dates.push(nextDate);
            // WARNING: Create a copy of nextDate before change it
            nextDate = new Date(nextDate.getTime());
            nextDate.setDate(nextDate.getDate() + 1);
        }
        return dates;
    }

    /**
     * Get date of next week for a given date
     * @param date {Integer/Date/Date String} A valid date format
     *        (optional) Default `new Date()`
     * @return {Date} Next week Date instance
     * USAGE:
     *   // If current date is 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', then
     *   // following method return 'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)'
     *   nextTime.nextDate();
     *
     *   // If feed with a date 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', then
     *   // following method return 'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)'
     *   nextTime.nextDate(new Date(2015,11,1));
     */
    static nextWeek(date) {
        date = this._getValidDate(date);
        date.setDate(date.getDate() + 7);
        return date;
    }

    static nextWeeks(startDate, endDate) {
        const start = this._getValidDate(startDate);
        const end = this._getValidDate(endDate);

        let weeks = [];
        let nextWeek = new Date(start.getTime());
        while(nextWeek < end) {
            weeks.push(nextWeek);
            nextWeek = new Date(nextWeek.getTime());
            nextWeek.setDate(nextWeek.getDate() + 7);
        }
        return weeks;
    }

    /**
     * Get date of next month for a given date
     * NOTE: When end of month provided, it'll return possible end of next month
     * @param date {Integer/Date/Date String} A valid date format
     *        (optional) Default `new Date()`
     * @param upto {Integer} Most value end of month can change
     * @return {Date} Next month Date instance
     * USAGE:
     *   // If current date is 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', then
     *   // following method return 'Fri Jan 01 2015 00:00:00 GMT+0530 (IST)'
     *   nextTime.nextDate();
     *
     *   // If feed with a date 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', then
     *   // following method return 'Fri Jan 01 2015 00:00:00 GMT+0530 (IST)'
     *   nextTime.nextDate(new Date(2015,11,1));
     *
     *   //NOTE: If `upto` provided 'Mon Feb 29 2016 00:00:00 GMT+0530 (IST)',
     *   // then return 'Thu Mar 31 2015 00:00:00 GMT+0530 (IST)'
     *   nextTime.nextDate(new Date(2016,1,29), 31);
     */
    static nextMonth(date, upto) {
        debug('NextMonth d: ', date);
        const STAMP = 1900;
        const d = this._getValidDate(date);
        // If upto is undefined, assign given date
        if (!upto) upto = d.getDate();

        let nextMonth = new Date(d.getTime()); // Create a shallow copy
        nextMonth.setDate(1); // Avoid changing date while changing month

        // WARNING: Date should change before Month, since changing month will
        // affect on Date
        let nextMonthEndWith = new Date(STAMP + d.getYear(), d.getMonth() + 2);
        nextMonthEndWith.setSeconds(-1);
        // Set next month `date`
        let nextMonthDate = upto;
        if (upto > nextMonthEndWith.getDate()) {
            nextMonthDate = nextMonthEndWith.getDate();
        } else {
            nextMonthDate = upto;
        }

        let nextMonthBeginWith = new Date(STAMP + d.getYear(), d.getMonth() + 1);
        // Set next month `year` and `month`
        nextMonth.setYear(STAMP + nextMonthBeginWith.getYear());
        nextMonth.setMonth(nextMonthBeginWith.getMonth());
        nextMonth.setDate(nextMonthDate);

        return nextMonth;
    }

    static nextMonths(startDate, endDate) {
        debug('NextMonths start: ', startDate, ' end: ', endDate);
        let occurences = [startDate];

        const s = startDate.getDate(); // Starting date
        let nextMonth = this.nextMonth(startDate, s);
        while (nextMonth < endDate) {
            occurences.push(nextMonth);
            nextMonth = this.nextMonth(nextMonth, s);
        }

        return occurences;
    }


    /**
     * @private
     */
    static _getValidDate(date) {
        if (date) {
            if (!(date instanceof Date)) {
                let stampLength = date.toString().length;
                if (!isNaN(date) && stampLength < 13) {
                    date = parseInt(date) * Math.pow(10, 13 - stampLength);
                }
            }
            date = new Date(date);
        } else {
            date = new Date();
        }
        return date;
    }

};
