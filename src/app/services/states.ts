// Import INITIAL_STATE of our services

import { INITIAL_STATE as UserState } from './user/user.reducer';
import { INITIAL_STATE as AuthenticationState } from './authentication/authentication.reducer';

export default {
    user: UserState,
    authentication: AuthenticationState,
};
