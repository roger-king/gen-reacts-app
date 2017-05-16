import {API_URL} from './../../app.constants';
import {User} from './../user/user.model';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export class AuthService {
    login(username: string, password: string){
        const endpoint: string = API_URL + '/sessions';
        const data: Object = {
            email: username,
            password: password
        };

        return axios.post(endpoint, data);
    }

    getToken(){
        return localStorage.getItem("user-token");
    }

    /*setToken(token){
        let user = new User();
        if(token){
            localStorage.setItem("user-token", token);
        }else{
            localStorage.removeItem("user-token");
        }
    }

    isExpired(){
        let expired: boolean = false;

        if(_.isNull(this.getToken())){
            expired = false;
        }else{
            let tokenExpiration = jwt_decode(this.getToken()).exp;
            let diff = moment().diff(moment.unix(tokenExpiration));
            if(diff > 0){
                expired = true;
            }
        }

        return expired;
    }

    isAuthenticated(){
        if(this.getToken()){
            return true;
        }

        return false;
    }*/
}
