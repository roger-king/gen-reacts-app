import * as React from 'react';
import * as ReactDom from 'react-dom';
import {mount, render} from 'enzyme';
import * as TestUtils from 'react-addons-test-utils';
import * as ReactTestUtils from 'react-dom/test-utils';
import {expect, assert} from 'chai';
import { ProfileContainer as Profile } from './profile.container';

describe('<Profile/>', function () {
    let wrapper;

    beforeEach(function () {
        wrapper = mount(<Profile/>);
    });

    it('should render correctly', () => {
        assert(wrapper.type, 'div');
    });
});
