import { Store } from 'nuclear-js';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../action-types';

export function increment(state) {
  return state + 1;
}

export function decrement(state) {
  return state - 1;
}

export default new Store({
  getInitialState() {
    return 0;
  },

  initialize() {
    this.on(INCREMENT_COUNTER, increment);
    this.on(DECREMENT_COUNTER, decrement);
  }
});
