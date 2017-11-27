import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import createMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Login, WrappedLogin } from './../../../src/app/components/login/login.component';
import { Login as LoginService } from './../../../src/app/services/actions';
import { shallowWithStore } from './../../enzyme-setup';

describe('<Login/>', function () {
    const initialState = {
        login: () => jest.fn,
        authentication: {
            loggedIn: false
        }
    };

    const mockStore = createMockStore();
    let store, container, wrapper;

    beforeEach(function () {
        store = mockStore(initialState);
        wrapper = shallowWithStore(<Login/>, store);
    });

    test('it renders properly', () => {
        expect(wrapper.length).toEqual(1);
    });

    test('check props match with initialState', () => {
        expect(wrapper.find(WrappedLogin).prop('authentication.loggedIn')).toBeFalsy();
    });

    test('check action LOGIN is dispatching', () => {
        console.log(wrapper.state('username'));
    });
});
