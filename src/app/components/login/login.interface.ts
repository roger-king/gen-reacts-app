export interface ILoginProps {
    login: (username: string, password: string) => any;
    authentication: {
        loggedIn: boolean;
    };
}

export interface ILoginState {
    username: string;
    password: string;
    msg: string;
}
