# NextTime
Simple tool set to calculate next event occurring date.

## Installation

Use NPM to install using;

`npm install nexttime --save`

## Getting Started

```JavaScript

```

### nextDate(date)

Get next date after a given date

##### Parameters

- **date** : *{Integer/Date/Date String}* A valid date format
____(optional)____ Default `new Date()`

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

### nextDates(startDate, endDate)

Get next dates between given `startDate` and `endDate` period

##### Parameters

- **startDate** : *{Integer/Date/Date String}* A valid date format
__(optional)__ Default `new Date()`
- **endDate** : *{Integer/Date/Date String}* A valid date format
__(required)__ If `endDate` isn't provided, take `startDate` as `endDate`

##### Return

- *{Array of Date}* Next Dates instance

###### USAGE:

> If `startDate` is _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)'_ and `endDate` is _'Fri Dec 04 2015 00:00:00 GMT+0530 (IST)',_ then following method return
> _['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Wed Dec 02 2015 00:00:00 GMT+0530 (IST)', 'Thu Dec 03 2015 00:00:00 GMT+0530 (IST)']_

```javascript
nextTime.nextDate(new Date(2015,11,1), new Date(2015,11,4));
```

> If current time is _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)'_ and call method with _'Fri Dec 04 2015 00:00:00 GMT+0530 (IST)'_ will return
> _['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Wed Dec 02 2015 00:00:00 GMT+0530 (IST)', 'Thu Dec 03 2015 00:00:00 GMT+0530 (IST)']_

```javascript
nextTime.nextDate(new Date(2015,11,4));
```

### nextWeek(date)

Get date of next week for a given date

##### Parameters

- **date** : *{Integer/Date/Date String}* A valid date format
__(optional)__ Default `new Date()`

##### Return

- *{Date}* Next week Date instance

###### USAGE:

> If current date is _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)',_ then following method return _'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)'_

```javascript
nextTime.nextDate();
```

> If feed with a date _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)',_ then following method return _'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)'_

```javascript
nextTime.nextDate(new Date(2015,11,1));
```

### nextWeeks(startDate, endDate)

Get dates of next weeks between given `startDate` and `endDate` period

##### Parameters

- **startDate** : *{Integer/Date/Date String}* A valid date format
__(optional)__ Default `new Date()`
- **endDate** : *{Integer/Date/Date String}* A valid date format
__(required)__ If `endDate` isn't provided, take `startDate` as `endDate`

##### Return

- *{Array of Date}* Next weeks' Date objects

###### USAGE:

> If `startDate` is _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)'_ and `endDate` is _'Fri Dec 11 2015 00:00:00 GMT+0530 (IST)',_ then following method return
> _['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)']_

```javascript
nextTime.nextDate(new Date(2015,11,1), new Date(2015,11,10));
```

> If current time is _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)'_ and call method with _'Fri Dec 11 2015 00:00:00 GMT+0530 (IST)'_ will return
> _['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)']_

```javascript
nextTime.nextDate(new Date(2015,11,11));
```

### nextMonth(date, upto)

Get date of next month for a given date
**NOTE**: When end of month provided, it'll return possible end of next month

##### Parameters

- **date** : *{Integer/Date/Date String}* A valid date format
__(optional)__ Default `new Date()`
- **upto** : *{Integer}* Most value end of month can change

##### Return

- *{Date}* Next month Date instance

###### USAGE:

> If current date is _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)',_ then following method return _'Fri Jan 01 2015 00:00:00 GMT+0530 (IST)'_

```javascript
nextTime.nextDate();
```

> If feed with a date _'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)',_ then following method return _'Fri Jan 01 2015 00:00:00 GMT+0530 (IST)'_

```javascript
nextTime.nextDate(new Date(2015,11,1));
```

**NOTE**: If `upto` provided _'Mon Feb 29 2016 00:00:00 GMT+0530 (IST)',_ then return _'Thu Mar 31 2015 00:00:00 GMT+0530 (IST)'_

```javascript
nextTime.nextDate(new Date(2016,1,29), 31);
```

### nextMonths(startDate, endDate)

Get dates of next months between given `startDate` and `endDate` period

##### Parameters

- **startDate** : *{Integer/Date/Date String}* A valid date format
__(optional)__ Default `new Date()`
- **endDate** : *{Integer/Date/Date String}* A valid date format
__(required)__ If `endDate` isn't provided, take `startDate` as `endDate`

##### Return

- *{Array of Date}* Next months' Date objects

###### USAGE:

> If `startDate` is _'Thu Dec 31 2015 00:00:00 GMT+0530 (IST)'_ and `endDate` is _'Thu Mar 24 2016 00:00:00 GMT+0530 (IST)',_ then following method return
> _['Thu Dec 31 2015 00:00:00 GMT+0530 (IST)', 'Sun Jan 31 2015 00:00:00 GMT+0530 (IST)', 'Mon Feb 29 2015 00:00:00 GMT+0530 (IST)']_

```javascript
nextTime.nextDate(new Date(2015,11,31), new Date(2016,2,24));
```

> If current time is _'Thu Dec 31 2015 00:00:00 GMT+0530 (IST)'_ and call method with _'Thu Mar 24 2016 00:00:00 GMT+0530 (IST)'_ will return
> _['Thu Dec 31 2015 00:00:00 GMT+0530 (IST)', 'Sun Jan 31 2015 00:00:00 GMT+0530 (IST)', 'Mon Feb 29 2015 00:00:00 GMT+0530 (IST)']_

```javascript
nextTime.nextDate(new Date(2016,2,24));
```

## License

This Software is licensed under [MIT License](/LICENSE)

Copyright (c) 2015 Gihan Karunarathne <gckarunarathne@gmail.com>
