import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
    selector: 'app-management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
    admins: any;
    ID: any;
    username: any;
    adminName: any;
    users: any;
    userUserName: any;


    constructor(private _admins: LoginService, private _users: LoginService, private route: ActivatedRoute, private router: Router) {
        // get admins
        this.username = this.route.snapshot.paramMap.get('id');
        this._admins.getAdmins().subscribe(
            data => {
                this.admins = data;
                for (const user of this.admins) {
                    if (user.username == this.username) {
                        this.adminName = user.fname;
                        this.ID = user.id;

                    }
                }
            }
        );
        // get all users
        this.userUserName = this.route.snapshot.paramMap.get('id');
        this._users.getUsers().subscribe(
            data => {
                this.users = data;
            }
        );
    }

    ngOnInit() {
    }


    deleteUser(value) {
        this._users.deleteUser(value);
    }
}
