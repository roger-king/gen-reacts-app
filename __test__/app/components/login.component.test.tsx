import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import createMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Login, ConnectedLogin } from './../../../src/app/components/login/login.component';
import { Login as LoginService } from './../../../src/app/services/actions';
import { shallowWithStore } from './../../enzyme-setup';

const props = {
    login: () => jest.fn,
    authentication: {
        loggedIn: false
    }
};

const mockStore = createMockStore();
let store, container, wrapper;

describe('<Login/> Snapshot', () => {
    test('Capture snapshot', () => {
        const component = renderer.create(<Login login={props.login} authentication={props.authentication} />);
        expect(component).toMatchSnapshot();
    });
});

describe('ConnectedLogin', () => {
    beforeEach(() => {
        store = mockStore(props);
        container = shallow(<ConnectedLogin store={store}/>);
    });

    test('it renders connect component', () => {
        expect(container.length).toBe(1);
    });

    test('it will login successfully', () => {
        store.dispatch({
            type: 'AUTH_LOGIN',
            loggedIn: true,
        });
        const actions = store.getActions();
        expect(actions[0].loggedIn).toBeTruthy();
    });

});
