import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {
    invalid: boolean;
    users: object[];

    constructor(private router: Router) {
        this.invalid = false;
        this.users = [
            {id: 'a', name: 'Ahmed'},
            {id: 'b', name: 'Mohammed'},
            {id: 'c', name: 'Ali'},
            {id: 'd', name: 'Hamza'},
            {id: 'e', name: 'Khaled'},
        ];
    }


    login(name, password) {
        for (let user of this.users) {
            if (name == user.id && password == user.id) {
                this.router.navigate(['/home/' + user.id]);
            } else {
                this.invalid = true;
            }
        }
    }
}
