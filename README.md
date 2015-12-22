# NextTime
Simple tool set to calculate next event occurring date.

## Installation

Use NPM to install using;

`npm install nexttime --save`

## Getting Started

NextTime module contains an API to predict next event occurring date or dates.
Lets assume that current date is `Tue Dec 01 2015 00:00:00 GMT+0530 (IST)`.
Then following method calls will calculate required events as below;

```JavaScript
// Create a NextTime instance
let nextTime = require('nexttime').NextTime;

nextTime.nextDate();
// Wed Dec 02 2015 00:00:00 GMT+0530 (IST)
nextTime.nextDate(new Date(2015, 11, 1));
// Wed Dec 02 2015 00:00:00 GMT+0530 (IST)

nextTime.nextDate(new Date(2015,11,1), new Date(2015,11,4));
// ['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Wed Dec 02 2015 00:00:00 GMT+0530 (IST)', 'Thu Dec 03 2015 00:00:00 GMT+0530 (IST)']
nextTime.nextDate(new Date(2015,11,4));
// ['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Wed Dec 02 2015 00:00:00 GMT+0530 (IST)', 'Thu Dec 03 2015 00:00:00 GMT+0530 (IST)']

nextTime.nextWeek();
// Tue Dec 08 2015 00:00:00 GMT+0530 (IST)
nextTime.nextWeek(new Date(2015, 11, 1));
// Tue Dec 08 2015 00:00:00 GMT+0530 (IST)

nextTime.nextWeeks(new Date(2015,11,1), new Date(2015,11,10));
// ['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)']
nextTime.nextWeeks(new Date(2015,11,11));
// ['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)']

nextTime.nextMonth();
// Fri Jan 01 2016 00:00:00 GMT+0530 (IST)
nextTime.nextMonth(new Date(2015, 11, 1));
// Fri Jan 01 2016 00:00:00 GMT+0530 (IST)
nextTime.nextMonth(new Date(2016,1,29), 31);
// 'Thu Mar 31 2015 00:00:00 GMT+0530 (IST)'

nextTime.nextMonths(new Date(2015,11,31), new Date(2016,2,24));
// ['Thu Dec 31 2015 00:00:00 GMT+0530 (IST)', 'Sun Jan 31 2015 00:00:00 GMT+0530 (IST)', 'Mon Feb 29 2015 00:00:00 GMT+0530 (IST)']
nextTime.nextMonths(new Date(2016,2,24));
// ['Thu Dec 31 2015 00:00:00 GMT+0530 (IST)', 'Sun Jan 31 2015 00:00:00 GMT+0530 (IST)', 'Mon Feb 29 2015 00:00:00 GMT+0530 (IST)']
```

## API

1. [nextDate(\[date\])](#nextdatedate)
2. [nextDates(\[startDate\], endDate)](#nextdatesstartdate-enddate)
3. [nextWeek(\[date\])](#nextweekdate)
4. [nextWeeks(\[startDate\], endDate)](#nextweeksstartdate-enddate)
5. [nextMonth(\[date\] \[,upto\])](#nextmonthdate-upto)
6. [nextMonths(\[startDate\], endDate)](#nextmonthsstartdate-enddate)

*********************************************************************

### nextDate(date)

Get next date after a given date

##### Parameters

- **date** : *{Integer/Date/Date String}* A valid date format

 *__(optional)__* Default `new Date()`

##### Return

- *{Date}* Next Date instance

###### USAGE:

> If current date is _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)',_ then following method return _'Wed Dec 02 2015 00:00:00 GMT+0530 (IST)'_

```javascript
nextTime.nextDate();
```

> If feed with a date _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)',_ then following method return _'Wed Dec 02 2015 00:00:00 GMT+0530 (IST)'_

```javascript
nextTime.nextDate(new Date(2015,11,1));
```

*********************************************************************

### nextDates(startDate, endDate)

Get next dates between given `startDate` and `endDate` period

##### Parameters

- **startDate** : *{Integer/Date/Date String}* A valid date format

 *__(optional)__* Default `new Date()`

- **endDate** : *{Integer/Date/Date String}* A valid date format

 *__(required)__* If `endDate` isn't provided, take `startDate` as `endDate`

##### Return

- *{Array of Date}* Next Dates instance

###### USAGE:

> If `startDate` is _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)'_ and `endDate` is _'Fri Dec 04 2015 00:00:00 GMT+0530 (IST)',_ then following method return
> _['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Wed Dec 02 2015 00:00:00 GMT+0530 (IST)', 'Thu Dec 03 2015 00:00:00 GMT+0530 (IST)']_

```javascript
nextTime.nextDates(new Date(2015,11,1), new Date(2015,11,4));
```

> If current time is _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)'_ and call method with _'Fri Dec 04 2015 00:00:00 GMT+0530 (IST)'_ will return
> _['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Wed Dec 02 2015 00:00:00 GMT+0530 (IST)', 'Thu Dec 03 2015 00:00:00 GMT+0530 (IST)']_

```javascript
nextTime.nextDates(new Date(2015,11,4));
```

*********************************************************************

### nextWeek(date)

Get date of next week for a given date

##### Parameters

- **date** : *{Integer/Date/Date String}* A valid date format

 *__(optional)__* Default `new Date()`

##### Return

- *{Date}* Next week Date instance

###### USAGE:

> If current date is _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)',_ then following method return _'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)'_

```javascript
nextTime.nextWeek();
```

> If feed with a date _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)',_ then following method return _'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)'_

```javascript
nextTime.nextWeek(new Date(2015,11,1));
```

*********************************************************************

### nextWeeks(startDate, endDate)

Get dates of next weeks between given `startDate` and `endDate` period

##### Parameters

- **startDate** : *{Integer/Date/Date String}* A valid date format

 *__(optional)__* Default `new Date()`

- **endDate** : *{Integer/Date/Date String}* A valid date format

 *__(required)__* If `endDate` isn't provided, take `startDate` as `endDate`

##### Return

- *{Array of Date}* Next weeks' Date objects

###### USAGE:

> If `startDate` is _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)'_ and `endDate` is _'Fri Dec 11 2015 00:00:00 GMT+0530 (IST)',_ then following method return
> _['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)']_

```javascript
nextTime.nextWeeks(new Date(2015,11,1), new Date(2015,11,10));
```

> If current time is _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)'_ and call method with _'Fri Dec 11 2015 00:00:00 GMT+0530 (IST)'_ will return
> _['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)']_

```javascript
nextTime.nextWeeks(new Date(2015,11,11));
```

*********************************************************************

### nextMonth(date, upto)

Get date of next month for a given date
**NOTE**: When end of month provided, it'll return possible end of next month

##### Parameters

- **date** : *{Integer/Date/Date String}* A valid date format

 *__(optional)__* Default `new Date()`

- **upto** : *{Integer}* Most value end of month can change

 *__(optional)__* Default set to date of `date` parameter

##### Return

- *{Date}* Next month Date instance

###### USAGE:

> If current date is _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)',_ then following method return _'Fri Jan 01 2015 00:00:00 GMT+0530 (IST)'_

```javascript
nextTime.nextMonth();
```

> If feed with a date _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)',_ then following method return _'Fri Jan 01 2015 00:00:00 GMT+0530 (IST)'_

```javascript
nextTime.nextMonth(new Date(2015,11,1));
```

**NOTE**:
> If `upto` provided _'Mon Feb 29 2016 00:00:00 GMT+0530 (IST)',_ then return _'Thu Mar 31 2015 00:00:00 GMT+0530 (IST)'_

```javascript
nextTime.nextMonth(new Date(2016,1,29), 31);
```

*********************************************************************

### nextMonths(startDate, endDate)

Get dates of next months between given `startDate` and `endDate` period

##### Parameters

- **startDate** : *{Integer/Date/Date String}* A valid date format

 *__(optional)__* Default `new Date()`

- **endDate** : *{Integer/Date/Date String}* A valid date format

 *__(required)__* If `endDate` isn't provided, take `startDate` as `endDate`

##### Return

- *{Array of Date}* Next months' Date objects

###### USAGE:

> If `startDate` is _'Thu Dec 31 2015 00:00:00 GMT+0530 (IST)'_ and `endDate` is _'Thu Mar 24 2016 00:00:00 GMT+0530 (IST)',_ then following method return
> _['Thu Dec 31 2015 00:00:00 GMT+0530 (IST)', 'Sun Jan 31 2015 00:00:00 GMT+0530 (IST)', 'Mon Feb 29 2015 00:00:00 GMT+0530 (IST)']_

```javascript
nextTime.nextMonths(new Date(2015,11,31), new Date(2016,2,24));
```

> If current time is _'Thu Dec 31 2015 00:00:00 GMT+0530 (IST)'_ and call method with _'Thu Mar 24 2016 00:00:00 GMT+0530 (IST)'_ will return
> _['Thu Dec 31 2015 00:00:00 GMT+0530 (IST)', 'Sun Jan 31 2015 00:00:00 GMT+0530 (IST)', 'Mon Feb 29 2015 00:00:00 GMT+0530 (IST)']_

```javascript
nextTime.nextMonths(new Date(2016,2,24));
```

## Testing

1. Install dependencies with `npm install`
2. Run test cases

 - `npm run test` (just tests)
 - `npm run test-debug` (test with more debug logs)

## License

This Software is licensed under [MIT License](/LICENSE)

Copyright (c) 2015 Gihan Karunarathne <gckarunarathne@gmail.com>
