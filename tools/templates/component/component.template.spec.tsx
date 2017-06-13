import * as React from 'react';
import * as ReactDom from 'react-dom';
import {mount, render} from 'enzyme';
import * as TestUtils from 'react-addons-test-utils';
import * as ReactTestUtils from 'react-dom/test-utils';
import {expect, assert} from 'chai';
import { {{pascalCase name}}Component as {{pascalCase name}} } from './{{pascalCase name}}.component';
import {CounterStore} from './../../services/stores';

const store = {
    counter: new CounterStore()
};

describe("<{{pascalCase name}}/>", function () {
    let wrapper;

    beforeEach(function () {
        wrapper = mount(<{{pascalCase name}}/>)
    });

    it("should render correctly", () => {
        assert(wrapper.type, "div");
    });
})