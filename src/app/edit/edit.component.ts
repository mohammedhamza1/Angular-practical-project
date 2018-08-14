import {Component, OnInit, ɵbl} from '@angular/core';
import {LoginService} from '../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    newName: any;
    userID: any;
    showForm: boolean;
    person: any;
    username: any;
    loading: boolean;


    constructor(private editApi: LoginService, private route: ActivatedRoute, private router: Router) {
        this.userID = this.route.snapshot.paramMap.get('id');
        this.editApi.getUsers().subscribe(
            data => {
                this.person = data;
                for (const user of this.person) {
                    if (user.id == this.userID) {
                        this.username = user.username;
                    }
                }
            }
        );
    }

    ngOnInit() {
        this.showForm = true;
        this.loading = false;
    }

    editName() {
        this.editApi.updateUser(this.userID, this.newName);
        this.showForm = false;
        this.loading = true;
        setTimeout(() => {
            this.router.navigate([`/home/${this.username}`]);
        }, 1000);
    }
}
