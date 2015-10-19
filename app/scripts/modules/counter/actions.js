import flux from '../../flux';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './action-types';

export function increment() {
  flux.dispatch(INCREMENT_COUNTER);
}

export function decrement() {
  flux.dispatch(DECREMENT_COUNTER);
}

export default {
  increment,
  decrement
}
