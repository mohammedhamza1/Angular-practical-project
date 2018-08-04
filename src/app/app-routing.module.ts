import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home/:id', component: HomeComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent},
];


@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}