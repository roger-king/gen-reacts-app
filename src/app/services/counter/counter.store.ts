import { observable, useStrict, action, computed } from 'mobx';

useStrict(true);
export class CounterStore {
    @observable public count: number;

    constructor() {
        this.count = 0;
    }

    @action
    increase() {
        this.count++;
    }

    @action
    decrease() {
        this.count--;
    }
}
