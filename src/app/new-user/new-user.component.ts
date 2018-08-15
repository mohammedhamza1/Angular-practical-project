import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
    newID: any;
    newFName: any;
    newLName: any;
    newUsername: any;
    usersCount: any;
    adminUsername: any;

    constructor(private addUser: LoginService, private getUsers: LoginService, private route: ActivatedRoute) {
        this.adminUsername = this.route.snapshot.paramMap.get('id');
        this.getUsers.getUsers().subscribe(data => {
            this.usersCount = data;
            this.newID = this.usersCount.length + (13 * (this.usersCount.length + 1));
            console.log(this.newID);
        });
    }

    ngOnInit() {
    }

    AddNewUser() {
        this.addUser.postUser(this.newID, this.newFName, this.newLName, this.newUsername);
        this.newUsername = '';
        this.newLName = '';
        this.newID += 25;
        this.newFName = '';
    }
}
