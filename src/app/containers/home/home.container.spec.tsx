import * as React from 'react';
import * as ReactDom from 'react-dom';
import {mount, render} from 'enzyme';
import * as TestUtils from 'react-addons-test-utils';
import * as ReactTestUtils from 'react-dom/test-utils';
import {expect, assert} from 'chai';
import { HomeContainer as Home } from './home.container';

describe('<Home/>', function () {
    let wrapper;

    beforeEach(function () {
        wrapper = mount(<Home/>);
    });

    it('should render correctly', () => {
        assert(wrapper.type, 'div');
    });
});
