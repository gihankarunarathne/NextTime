/**
 * A schedule forecaster for NodeJS which expose a generic API to
 * calculate number of occurrences within given time period.
 * Useful for API clients and sms, email, notification daemons
 * which tasks that need to calculate occurrence of a given event.
 *
 * USAGE:
 *   let NextTime = require('nexttime').NextTime;
 */

'use strict';

let debug = require('debug')('NextTime:lib:Index');

exports.NextTime = require('./lib/NextTime');
