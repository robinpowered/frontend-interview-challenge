import React from 'react';

export class TimeAvailabilityPills extends React.Component {
  static propTypes = {
    start: React.PropTypes.object,
    end: React.PropTypes.object,
    duration: React.PropTypes.number,
    events: React.PropTypes.arrayOf(React.PropTypes.object),
  };

  render() {
    return null;
  }
}

export function Pill ({className, children, ...props}) {
  className = Array.isArray(className) ? className : [className];
  const classes = ['pill', ...className];
  return (
    <div className={classes}>
      {children}
    </div>
  );
}
