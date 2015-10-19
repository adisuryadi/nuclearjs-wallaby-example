import React from 'react';
import flux from '../flux';
import CounterModule from '../modules/counter';
import Counter from '../components/Counter.react';

const CounterContainer = React.createClass({
  mixins: [flux.ReactMixin],

  getDataBindings() {
    return {
      counter: CounterModule.getters.counter
    };
  },

  componentDidMount() {
    this.timer = setInterval(() => {
      CounterModule.actions.increment();
    }, 1000);
  },

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },

  timer: null,

  render() {
    return (
       <Counter counter={this.state.counter} />
    );
  },
});

export default CounterContainer;
