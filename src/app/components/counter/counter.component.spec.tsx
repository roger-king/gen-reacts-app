import * as React from 'react';
import * as ReactDom from 'react-dom';
import {shallow, render} from 'enzyme';
import * as TestUtils from 'react-addons-test-utils';
import * as ReactTestUtils from 'react-dom/test-utils';
import {expect, assert} from 'chai';
import {CounterComponent as Counter} from './counter.component';
import {CounterStore} from './../../services/stores';

const store = {
    counter: new CounterStore()
};

describe("<Counter/>", function(){
    let wrapper;

    beforeEach(function() {
        wrapper = shallow(<Counter counter_store={store.counter}/>)
    });

    it("should render correctly", () => {
        assert(wrapper.type, "div");
    });
})