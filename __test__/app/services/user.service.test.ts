import { UserGet, UserSet } from './../../../src/app/services/actions';
import userReducer, { INITIAL_STATE } from './../../../src/app/services/user/user.reducer';
import { INITIAL_STATE as userState} from './../../../src/app/services/user/user.reducer';

describe('User Actions', function () {
    test('Should create an action to set current user', () => {
        const currUserAction = UserSet('testuser');
        expect(currUserAction.username).toEqual('testuser');
        expect(currUserAction.type).toEqual('USER_SET');
    });

    test('Should create an action to get current user', () => {
        const currUserAction = UserGet();
        expect(currUserAction.username).toEqual('Erlich Bachman');
        expect(currUserAction.type).toEqual('USER_GET');
    });
});

describe('User Reducers', function () {
    test('Should have initial state', () => {
        expect(userState).toEqual({username: ''});
    });

    test('Should handle USER_GET', () => {
        expect(userReducer(INITIAL_STATE, {type: 'USER_GET', username: 'Erlich Bachman'})).toEqual({username: 'Erlich Bachman'});
    });

    test('Should handle USER_SET', () => {
        expect(userReducer(INITIAL_STATE, {type: 'USER_SET', username: 'testuser'})).toEqual({username: 'testuser'});
    });
});
