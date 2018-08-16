import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {
    invalid: boolean;
    users: any;
    admins: any;
    userToken: any;
    adminToken: any;
    routeError: boolean;

    constructor(private adminsApi: HttpClient, private sendAdmins: HttpClient, private router: Router, private http: HttpClient, private send: HttpClient, private update: HttpClient, private _delete: HttpClient, private _post: HttpClient) {
        this.routeError = true;
        this.invalid = false;
        this.http.get('http://localhost:3000/users').subscribe(value => {
            this.users = value;
        });
        this.adminsApi.get('http://localhost:3000/admins').subscribe(value => {
            this.admins = value;
        });
    }

    // add new user
    postUser(id, fname, lname, username) {
        this._post.post(`http://localhost:3000/users/`, {
            id: id,
            fname: fname,
            lname: lname,
            username: username
        }).subscribe(data => data, error1 => error1, () => console.log('User Added!'));
    }

    // delete user
    deleteUser(uId) {
        this._delete.delete(`http://localhost:3000/users/${uId}`).subscribe(data => data
            , error1 => error1
            , () => {
                console.log('Done!');
            });
    }

    // update user name
    updateUser(id, name) {
        this.update.patch(`http://localhost:3000/users/${id}`, {
            fname: name,
        }).subscribe(data => data);
    }

    // get admins to send them to admins components
    getAdmins() {
        return this.sendAdmins.get('http://localhost:3000/admins');
    }

    // get users to send them to homes components
    getUsers() {
        return this.send.get('http://localhost:3000/users');
    }

    // add access control to route
    canActivate() {
        if (this.userToken || this.adminToken) {
            this.routeError = false;
            return true;
        } else {
            this.router.navigate(['/login']);
            this.routeError = false;
            return false;
        }
    }

    // Login operation
    login(name, password) {
        // user login
        for (const user of this.users) {
            this.userToken = 'khkgh;kljfgh!#@$@#!54fghlkfhd';
            if (name == user.username && password == user.username) {
                this.router.navigate(['/home/' + user.username]);
            } else {
                this.invalid = true;
            }
        }
        // admin login
        for (const user of this.admins) {
            this.adminToken = 'wqwwhgfhfgdsfrwds@@#$%^&jhgvfghjk525';
            if (name == user.username && password == user.username) {
                this.router.navigate(['/management/' + user.username]);
            } else {
                this.invalid = true;
            }
        }
    }
}
