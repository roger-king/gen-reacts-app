export interface ILoginProps {
    login: (username: string, password: string) => any;
    isLoggedIn: boolean;
}

export interface ILoginState {
    username: string;
    password: string;
}
