import React from 'react';
import {mount} from 'enzyme';
import render from 'react-test-renderer';
import {TimeAvailabilityPills, Pill} from './challenge';
import moment from 'moment';
import events from './data';

function assertPillClassname (expectedClassName) {
  return function (component) {
    expect(component.find('div').props().className).toContain(expectedClassName);
  };
}

const assertPillAvailable = assertPillClassname('available');
const assertPillUnavailable = assertPillClassname('unavailable');

test('react component', () => {
  const start = moment('2017-02-21').startOf('day').hour(8);
  const end = start.clone().hour(12);

  const rendered = mount(
    <TimeAvailabilityPills
      start={start}
      end={end}
      duration={30}
      events={events}
    />
  );

  const pills = rendered.find(Pill);

  pills.forEach((pill, i) => {
    expect(
      pill.find('div').text()
    ).toEqual(
      start.clone().add(i * 30, 'm').format('h:mm')
    );
  });

  expect(pills.length).toEqual(8)

  assertPillAvailable(pills.at(0));
  // assertPillAvailable(pills.at(1));
  // assertPillUnavailable(pills.at(2));

  // assertAvailable(pills.at(0).find('div'));
  // assertUnavailable(pills.at(1).find('div'));
});
