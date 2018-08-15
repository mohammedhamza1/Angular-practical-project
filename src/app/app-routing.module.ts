import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {EditComponent} from './edit/edit.component';
import {ManagementComponent} from './management/management.component';
import {NewUserComponent} from './new-user/new-user.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home/:id', component: HomeComponent},
    {path: 'home/edit/:id', component: EditComponent},
    {path: 'management/:id', component: ManagementComponent},
    {path: 'management/:id/add', component: NewUserComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent},
];


@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}