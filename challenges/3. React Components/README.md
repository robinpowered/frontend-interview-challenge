### React Components

The goal of this challenge is to create a React component for a range of "availability time pills", a concept seen within our applications:

<img width="1000" alt="screen shot 2017-03-21 at 4 34 59 pm" src="https://cloud.githubusercontent.com/assets/656630/24169546/5e2610b6-0e54-11e7-87cd-0b70744dc269.png">

```js
<TimeAvailabilityPills
  start={startOfTimeRange}
  end={endOfTimeRange}
  duration={timeRangeOfEachPill}
  events={collectionOfEvents}
/>
```

Which would output

```html
<div class="time-availability-pills">
  <div class="pill available">
    8:00am
  </div>
  <div class="pill available">
    8:30am
  </div>
  <div class="pill unavailable">
    9:00am
  </div>
  <div class="pill unavailable">
    9:30am
  </div>
  <div class="pill available">
    10:00am
  </div>
  <div class="pill available">
    10:30am
  </div>
</div>
```
