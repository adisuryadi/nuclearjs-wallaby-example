import flux from '../../flux';
import counter from './stores/counter';
import actions from './actions';
import getters from './getters';

flux.registerStores({
  counter
});

export default { actions, getters };

