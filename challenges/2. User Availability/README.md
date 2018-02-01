### Multiple User Availability Problem

The goal is to find available times for users with different schedules. For a given set of user schedules, the function should determine which time spans are free for all users.

```js
/**
 * Given a collection of schedules, find all the free times within an overall time range.
 *
 * @param {Array<Array<event>>} schedules A collection of user schedules to compare.
 * @param {moment} start The starting time to seek for free periods.
 * @param {moment} end The time to stop seeking for free periods.
 * @param {number} minimumFreeDuration The minimum amount of time a period needs to be
 * @return {Array<timeRange>} A collection of free periods across all user schedules.
 */
function findCommonFreeTimes (schedules, start, end, minimumFreeDuration) { }
```

The schedule is an array of events, which contain a `start` and `end` field.

```js
const userScheduleA = [
  {
    "title": "Meeting A",
    "start": "2017-02-21T09:00:00-05:00",
    "end": "2017-02-21T10:00:00-05:00"
  },
  {
    "title": "Meeting B",
    "start": "2017-02-21T11:00:00-05:00",
    "end": "2017-02-21T12:00:00-05:00"
  },
  {
    "title": "Meeting C",
    "start": "2017-02-21T12:00:00-05:00",
    "end": "2017-02-21T12:45:00-05:00"
  },
  {
    "title": "Meeting D",
    "start": "2017-02-21T14:00:00-05:00",
    "end": "2017-02-21T15:30:00-05:00"
  }
];

const userScheduleB = [
  {
    "title": "Meeting A",
    "start": "2017-02-21T09:00:00-05:00",
    "end": "2017-02-21T09:45:00-05:00"
  },
  {
    "title": "Meeting B",
    "start": "2017-02-21T10:00:00-05:00",
    "end": "2017-02-21T10:15:00-05:00"
  },
  {
    "title": "Meeting C",
    "start": "2017-02-21T11:00:00-05:00",
    "end": "2017-02-21T13:45:00-05:00"
  },
  {
    "title": "Meeting D",
    "start": "2017-02-21T14:00:00-05:00",
    "end": "2017-02-21T14:30:00-05:00"
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
 *     "end": "2017-02-21T09:00:00-05:00"
 *   },
 *   {
 *     "start": "2017-02-21T10:15:00-05:00",
 *     "end": "2017-02-21T11:00:00-05:00"
 *   },
 *   {
 *     "start": "2017-02-21T15:30:00-05:00",
 *     "end": "2017-02-21T18:00:00-05:00"
 *   }
 * ]
 */
```
