### Multiple User Availability Problem

The goal is to find available times for users with different schedules. For a given set of user schedules, the function should determine which time spans are free for all users.

The schedule is an array of events, which contain a `start` and `end` field.

```js
const userScheduleA = [
  {
    "start": "2017-02-21T12:00:00-05:00",
    "end": "2017-02-21T12:30:00-05:00",
  },
  {
    "start": "2017-02-21T14:00:00-05:00",
    "end": "2017-02-21T16:00:00-05:00"
  }
];
const userScheduleB = [
  {
    "start": "2017-02-21T12:00:00-05:00",
    "end": "2017-02-21T12:30:00-05:00",
  },
  {
    "start": "2017-02-21T14:00:00-05:00",
    "end": "2017-02-21T16:00:00-05:00"
  }
];

const start = moment('2017-02-21T08:00:00-05:00');
const end = moment('2017-02-21T18:00:00-05:00');

const freeSlots = findCommonFreeTimes(
  [userScheduleA, userScheduleB],
  start,
  end,
  30
);

/**
 * Outputs
 * [
 *   {
 *     "start": "2017-02-21T08:00:00-05:00",
 *     "end": "2017-02-21T12:00:00-05:00"
 *   },
 *   {
 *     "start": "2017-02-21T12:30:00-05:00",
 *     "end": "2017-02-21T14:00:00-05:00"
 *   },
 *   {
 *     "start": "2017-02-21T16:00:00-05:00",
 *     "end": "2017-02-21T18:00:00-05:00"
 *   }
 * ]
 */
```
