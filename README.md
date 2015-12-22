# NextTime
Simple tool set to calculate next event occurring date.

## Installation

Use NPM to install using;

`npm install schedule-limiter --save`

## Getting Started

```JavaScript

```

### nextDate(date)

Get next date after a given date

##### Parameters

- **date** : *{Integer/Date/Date String}* A valid date format
__(optional)__ Default `new Date()`

###### Return

- {Date} Next Date instance



**USAGE:**

If current date is 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', then following method return 'Wed Dec 02 2015 00:00:00 GMT+0530 (IST)'

```
nextTime.nextDate();
```

If feed with a date 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', then following method return 'Wed Dec 02 2015 00:00:00 GMT+0530 (IST)'

```
nextTime.nextDate(new Date(2015,11,1));
```

### nextDates(startDate, endDate)

Get next dates between given `startDate` and `endDate` period

##### Parameters

- **startDate** : *{Integer/Date/Date String}* A valid date format
(optional) Default `new Date()`
- **endDate** : *{Integer/Date/Date String}* A valid date format
(required) If `endDate` isn't provided, take `startDate` as `endDate`

###### Return

- {Array of Date} Next Dates instance

**USAGE:**

If `startDate` is 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)' and `endDate` is 'Fri Dec 04 2015 00:00:00 GMT+0530 (IST)', then following method return
['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Wed Dec 02 2015 00:00:00 GMT+0530 (IST)', 'Thu Dec 03 2015 00:00:00 GMT+0530 (IST)']

```
nextTime.nextDate(new Date(2015,11,1), new Date(2015,11,4));
```

If current time is 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)' and call method with 'Fri Dec 04 2015 00:00:00 GMT+0530 (IST)' will return
['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Wed Dec 02 2015 00:00:00 GMT+0530 (IST)', 'Thu Dec 03 2015 00:00:00 GMT+0530 (IST)']

```
nextTime.nextDate(new Date(2015,11,4));
```

### nextWeek(date)

Get date of next week for a given date

##### Parameters

- **date** : *{Integer/Date/Date String}* A valid date format
(optional) Default `new Date()`

###### Return

- {Date} Next week Date instance

**USAGE:**

If current date is 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', then following method return 'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)'

```
nextTime.nextDate();
```

If feed with a date 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', then following method return 'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)'

```
nextTime.nextDate(new Date(2015,11,1));
```

### nextWeeks(startDate, endDate)

Get dates of next weeks between given `startDate` and `endDate` period

##### Parameters

- **startDate** : *{Integer/Date/Date String}* A valid date format
(optional) Default `new Date()`
- **endDate** : *{Integer/Date/Date String}* A valid date format
(required) If `endDate` isn't provided, take `startDate` as `endDate`

###### Return

- {Array of Date} Next weeks' Date objects

**USAGE:**

If `startDate` is 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)' and `endDate` is 'Fri Dec 11 2015 00:00:00 GMT+0530 (IST)', then following method return
['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)']

```
nextTime.nextDate(new Date(2015,11,1), new Date(2015,11,10));
```

If current time is 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)' and call method with 'Fri Dec 11 2015 00:00:00 GMT+0530 (IST)' will return
['Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', 'Tue Dec 08 2015 00:00:00 GMT+0530 (IST)']

```
nextTime.nextDate(new Date(2015,11,11));
```

### nextMonth(date, upto)

Get date of next month for a given dateNOTE: When end of month provided, it'll return possible end of next month

##### Parameters

- **date** : *{Integer/Date/Date String}* A valid date format
(optional) Default `new Date()`
- **upto** : *{Integer}* Most value end of month can change

###### Return

- {Date} Next month Date instance

**USAGE:**

If current date is 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', then following method return 'Fri Jan 01 2015 00:00:00 GMT+0530 (IST)'

```
nextTime.nextDate();
```

If feed with a date 'Tue Dec 01 2015 00:00:00 GMT+0530 (IST)', then following method return 'Fri Jan 01 2015 00:00:00 GMT+0530 (IST)'

```
nextTime.nextDate(new Date(2015,11,1));
```

**NOTE**: If `upto` provided 'Mon Feb 29 2016 00:00:00 GMT+0530 (IST)', then return 'Thu Mar 31 2015 00:00:00 GMT+0530 (IST)'

```
nextTime.nextDate(new Date(2016,1,29), 31);
```

### nextMonths(startDate, endDate)

Get dates of next months between given `startDate` and `endDate` period

##### Parameters

- **startDate** : *{Integer/Date/Date String}* A valid date format
(optional) Default `new Date()`
- **endDate** : *{Integer/Date/Date String}* A valid date format
(required) If `endDate` isn't provided, take `startDate` as `endDate`

###### Return

- {Array of Date} Next months' Date objects

**USAGE:**

If `startDate` is 'Thu Dec 31 2015 00:00:00 GMT+0530 (IST)' and `endDate` is 'Thu Mar 24 2016 00:00:00 GMT+0530 (IST)', then following method return
['Thu Dec 31 2015 00:00:00 GMT+0530 (IST)', 'Sun Jan 31 2015 00:00:00 GMT+0530 (IST)', 'Mon Feb 29 2015 00:00:00 GMT+0530 (IST)']

```
nextTime.nextDate(new Date(2015,11,31), new Date(2016,2,24));
```

If current time is 'Thu Dec 31 2015 00:00:00 GMT+0530 (IST)' and call method with 'Thu Mar 24 2016 00:00:00 GMT+0530 (IST)' will return
['Thu Dec 31 2015 00:00:00 GMT+0530 (IST)', 'Sun Jan 31 2015 00:00:00 GMT+0530 (IST)', 'Mon Feb 29 2015 00:00:00 GMT+0530 (IST)']

```
nextTime.nextDate(new Date(2016,2,24));
```

## License

This Software is licensed under [MIT License](/LICENSE)

Copyright (c) 2015 Gihan Karunarathne <gckarunarathne@gmail.com>
