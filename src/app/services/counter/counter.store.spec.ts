import { CounterStore } from './counter.store';
import { expect } from 'chai';

describe('Counter Store', function(){
    it('should return 0', function(){
        let store = new CounterStore();
        expect(store.count).to.equal(0);
    });

    it('should increase store count by 1 and return 1', function(){
        let store = new CounterStore();
        store.increase();
        expect(store.count).to.equal(1);
    });

    it('should decrease store count by 1 and return -1', function(){
        let store = new CounterStore();
        store.decrease();
        expect(store.count).to.equal(-1);
    });
});
