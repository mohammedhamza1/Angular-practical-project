import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    username: any;
    name: any;
    person: any;
    ID: any;

    constructor(private route: ActivatedRoute, private serviceLogin: LoginService) {
        this.username = this.route.snapshot.paramMap.get('id');
        this.serviceLogin.getUsers().subscribe(
            data => {
                this.person = data;
                for (const user of this.person) {
                    if (user.username == this.username) {
                        this.name = user.fname;
                        this.ID = user.id;
                    }
                }
            }
        );

    }

    ngOnInit() {
    }


}
