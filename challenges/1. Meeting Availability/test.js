import {findFreeTimes} from './challenge';
import moment from 'moment';
import data from './data';

test('findFreeTimes 1', () => {
  const start = moment('2017-02-21').startOf('day').hour(3);
  const end = start.clone().hour(18);
  var result = findFreeTimes(start, end, 60, data);

  var expected = [
    {start: '2017-02-21T03:00:00-05:00', end: '2017-02-21T05:00:00-05:00'},
    {start: '2017-02-21T06:00:00-05:00', end: '2017-02-21T07:00:00-05:00'},
    {start: '2017-02-21T08:00:00-05:00', end: '2017-02-21T09:10:00-05:00'},
    {start: '2017-02-21T13:00:00-05:00', end: '2017-02-21T15:45:00-05:00'}
  ];

  expect(result).toMatchObject(expected);
});

test('findFreeTimes 2', () => {
  const start = moment('2017-02-21').startOf('day').hour(8).minute(5);
  const end = start.clone().hour(23);
  var result = findFreeTimes(start, end, 15, data);

  var expected = [
    {start: '2017-02-21T08:05:00-05:00', end: '2017-02-21T09:10:00-05:00'},
    {start: '2017-02-21T09:30:00-05:00', end: '2017-02-21T09:45:00-05:00'},
    {start: '2017-02-21T11:59:00-05:00', end: '2017-02-21T12:15:59-05:00'},
    {start: '2017-02-21T13:00:00-05:00', end: '2017-02-21T15:45:00-05:00'},
    {start: '2017-02-21T19:30:00-05:00', end: '2017-02-21T20:45:00-05:00'},
    {start: '2017-02-21T21:15:00-05:00', end: '2017-02-21T23:05:00-05:00'}
  ];

  expect(result).toMatchObject(expected);
});

test('findFreeTimes 3', () => {
  const start = moment('2017-02-22').startOf('day').hour(3);
  const end = start.clone().hour(23);
  var result = findFreeTimes(start, end, 15, data);

  var expected = [
    {start: '2017-02-22T03:00:00-05:00', end: '2017-02-22T23:00:00-05:00'}
  ];

  expect(result).toMatchObject(expected);
});
