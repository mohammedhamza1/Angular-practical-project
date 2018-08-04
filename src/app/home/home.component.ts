import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    id: any;
    name: any;
    users: any;

    constructor(private route: ActivatedRoute, private serviceLogin: LoginService) {
    }

    ngOnInit() {
        this.users = this.serviceLogin.users;
        this.id = this.route.snapshot.paramMap.get('id');
        for (const user of this.users) {
            if (user.id === this.id) {
                this.name = user.name;
            }
        }
    }


}
