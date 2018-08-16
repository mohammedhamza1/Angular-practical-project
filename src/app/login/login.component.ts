import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    name: string;
    password: any;
    status: any;
    error: boolean;

    constructor(private serviceLogin: LoginService) {
        this.error = this.serviceLogin.routeError;
    }

    ngOnInit() {
    }

    signIn() {
        this.serviceLogin.login(this.name, this.password);
        this.status = this.serviceLogin.invalid;
    }

}
