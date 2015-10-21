import flux from '../../flux';
import CounterModule from './index';

describe('module/counter', function() {
  afterEach(function() {
    flux.reset();
  });

  describe('#actions', function() {
    describe('increment', function() {
      it('should increase the state', function() {
        flux.loadState({
          counter: 0
        });
        CounterModule.actions.increment();
        const actualCounter = flux.evaluate(CounterModule.getters.counter);
        expect(actualCounter).toBe(1);
      });
    });

    describe('decrease', function () {
      it('should decrease the state', function() {
        flux.loadState({
          counter: 10
        });
        CounterModule.actions.decrement();
        const actualCounter = flux.evaluate(CounterModule.getters.counter);
        expect(actualCounter).toBe(9);
      });
    })
  });
});
