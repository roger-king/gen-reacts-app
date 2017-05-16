import {AuthService} from './../../services/authentication/auth.service';

export class LoginService {
    login(email: string, password: string){
        let Auth = new AuthService();
        Auth.login(email, password)
            .then((response) => {
                console.log('testing', response);
            });
    }
}