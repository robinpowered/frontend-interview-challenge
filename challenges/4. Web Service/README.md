### Web Services

Write a web service that will provide the free and busy schedules for a space.

This website will have two fixed endpoints:
- `GET /free`
- `GET /busy`

Assume that a "slot" is the following type:
```ts
type Slot {
  startedAt: string,
  endedAt: string
}
```

```
GET /free
```
Produces a list of free time slots, `Array<Slot>`

```json
[
  {startedAt, endedAt},
  {startedAt, endedAt},
  {startedAt, endedAt}
]
```

```
GET /busy
```
Produces a list of busy time slots, `Array<Slot>`
```json
[
  {startedAt, endedAt},
  {startedAt, endedAt},
  {startedAt, endedAt}
]
```
