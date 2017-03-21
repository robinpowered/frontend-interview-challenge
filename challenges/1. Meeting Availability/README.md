### Meeting Availability Problem

The goal is to find available time ranges within a schedule of events.

The schedule is an array of events, which contain a `start` and `end` field.

```js
const events = [
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

const freeSlots = findFreeTimes(start, end, 30, events);
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
