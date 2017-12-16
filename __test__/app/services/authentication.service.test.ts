import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Login } from './../../../src/app/services/actions';
import authReducer from './../../../src/app/services/authentication/authentication.reducer';
import { INITIAL_STATE as authState} from './../../../src/app/services/authentication/authentication.reducer';

describe('Login Actions', function () {
    let store;
    beforeEach(() => {
        store = createStore(
            authReducer,
            authState,
            applyMiddleware(thunk)
        );
    });
    test('Should have initial state', () => {
        expect(authState).toEqual({loggedIn: false});
    });

    test('it should succesfully log user in', () => {
        store.dispatch(Login('admin', 'password'));
        expect(store.getState()).toEqual({loggedIn: true});
    });

    test('it should unsuccessfully log user in', () => {
        store.dispatch(Login('admin', 'wrong'));
        expect(store.getState()).toEqual({loggedIn: false});
    });

});
