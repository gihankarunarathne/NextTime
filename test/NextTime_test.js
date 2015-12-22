'use strict';

let assert = require('assert');
let NextTime = require('../index').NextTime;
let debug = require('debug')('NextTime:test:NextTime');

describe('NextTime ', () => {
    let nextTime = null;

    before(done => {
        nextTime = NextTime;
        done();
    });

    describe('NextDate ', () => {
        it('should return tomorrow date object ', done => {
            const d = nextTime.nextDate();
            assert.ok(d instanceof Date);
            done();
        });

        it('should return next date ', done => {
            const d = nextTime.nextDate(new Date(2015, 11, 17));
            assert.deepEqual(d, new Date(2015, 11, 18));
            done();
        });
    });

    describe('NextDates ', () => {
        it('should return array of dates ', done => {
            const dates =
                nextTime.nextDates(new Date(2015, 11, 1), new Date(2016, 0, 1));
            assert.ok(dates[0] instanceof Date);
            done();
        });

        it('should return next dates ', done => {
            const dates =
                nextTime.nextDates(new Date(2015, 11, 1), new Date(2016, 0, 1));
            debug('NextDates : ', dates.toString());
            assert.equal(dates.length, 31);
            assert.deepEqual(dates[0], new Date(2015,11,1));
            assert.deepEqual(dates[1], new Date(2015,11,2));
            assert.deepEqual(dates[2], new Date(2015,11,3));
            assert.deepEqual(dates[dates.length -1], new Date(2015,11,31));
            done();
        });
    });

    describe('NextWeek ', () => {
        it('should return next week date object ', done => {
            const d = nextTime.nextWeek();
            assert.ok(d instanceof Date);
            done();
        });

        it('should return next week ', done => {
            const d = nextTime.nextWeek(new Date(2015, 11, 17));
            assert.deepEqual(d, new Date(2015, 11, 24));
            done();
        });
    });

    describe('NextWeeks ', () => {
        it('should return next weeks date object ', done => {
            const dates =
                nextTime.nextWeeks(new Date(2015, 11, 1), new Date(2015, 11, 8));
            assert.ok(dates[0] instanceof Date);
            done();
        });

        it('should return next weeks ', done => {
            const weeks =
                nextTime.nextWeeks(new Date(2015, 11, 1), new Date(2016, 0, 1));
            debug('Weeks : ', weeks);
            assert.equal(weeks.length, 5);
            done();
        });
    });

    describe('NextMonth ', () => {
        it('should return month date object ', done => {
            const d = nextTime.nextMonth();
            assert.ok(d instanceof Date);
            done();
        });

        it('should return month date object at year end ', done => {
            const d = nextTime.nextMonth(new Date(2015, 11, 17));
            assert.deepEqual(d, new Date(2016, 0, 17));
            done();
        });

        it('should return month date object at year end ', done => {
            const d = nextTime.nextMonth(new Date(2015, 11, 31));
            assert.deepEqual(d, new Date(2016, 0, 31));
            done();
        });

        it('should return month date object for February ', done => {
            const d = nextTime.nextMonth(new Date(2016, 0, 31));
            debug(d);
            assert.deepEqual(d, new Date(2016, 1, 29));
            done();
        });

        it('should return month date object from February ', done => {
            const d = nextTime.nextMonth(new Date(2016, 1, 29), 31);
            debug(d);
            assert.deepEqual(d, new Date(2016, 2, 31));
            done();
        });
    });

});
