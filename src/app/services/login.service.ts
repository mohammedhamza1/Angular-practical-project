import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {
    invalid: boolean;
    users: any;
    admins: any;

    constructor(private adminsApi: HttpClient, private sendAdmins: HttpClient, private router: Router, private http: HttpClient, private send: HttpClient, private update: HttpClient, private _delete: HttpClient, private _post: HttpClient) {
        this.invalid = false;
        this.http.get('http://localhost:3000/users').subscribe(value => {
            this.users = value;
        });
        this.adminsApi.get('http://localhost:3000/admins').subscribe(value => {
            this.admins = value;
        });
    }

    deleteUser(uId) {
        this._delete.delete(`http://localhost:3000/users/${uId}`).subscribe(data => data
            , error1 => error1
            , () => {
                console.log('Done!');
            });
    }

    updateUser(id, name) {
        this.update.patch(`http://localhost:3000/users/${id}`, {
            fname: name,
        }).subscribe(data => data);
    }

    getAdmins() {
        return this.sendAdmins.get('http://localhost:3000/admins');
    }

    getUsers() {
        return this.send.get('http://localhost:3000/users');
    }

    login(name, password) {
        for (const user of this.users) {
            if (name == user.username && password == user.username) {
                this.router.navigate(['/home/' + user.username]);
            } else {
                this.invalid = true;
            }
        }
        for (const user of this.admins) {
            if (name == user.username && password == user.username) {
                this.router.navigate(['/management/' + user.username]);
            } else {
                this.invalid = true;
            }
        }
    }
}
