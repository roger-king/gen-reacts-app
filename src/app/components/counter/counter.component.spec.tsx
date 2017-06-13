import * as React from 'react';
import * as ReactDom from 'react-dom';
import {mount, render} from 'enzyme';
import * as TestUtils from 'react-addons-test-utils';
import * as ReactTestUtils from 'react-dom/test-utils';
import {expect, assert} from 'chai';
import {CounterComponent as Counter} from './counter.component';
import {CounterStore} from './../../services/stores';

const store = {
    counter: new CounterStore()
};

describe("<Counter/>", function () {
    let wrapper;

    beforeEach(function () {
        wrapper = mount(<Counter counter_store={store.counter}/>)
    });

    it("should render correctly", () => {
        assert(wrapper.type, "div");
    });

    it("should increase count from 0 to 1", () => {
        expect(wrapper.find('.increase-btn').length)
            .to
            .equal(1);
        wrapper
            .find('.increase-btn')
            .simulate('click');
        expect(wrapper.props().counter_store.count)
            .to
            .equal(1);
    });

    it("should decrease count from 1 to 0", () => {
        expect(wrapper.find('.decrease-btn').length)
            .to
            .equal(1);
        wrapper
            .find('.decrease-btn')
            .simulate('click');
        expect(wrapper.props().counter_store.count)
            .to
            .equal(0);
    });
})