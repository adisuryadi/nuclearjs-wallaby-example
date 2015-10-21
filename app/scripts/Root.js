import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import App from './App';

const Component = React.createClass({
  propTypes: {
    history: PropTypes.object.isRequired,
  },
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={App} />
      </Router>
    );
  },
});

export default Component;
