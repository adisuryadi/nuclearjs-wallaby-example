import React, { PropTypes } from 'react';

const Counter = React.createClass({
  propTypes: {
    counter: PropTypes.number.isRequired
  },

  render() {
    return (
        <div>{this.props.counter}</div>
    );
  },
});

export default Counter;
