import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';




import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {LoginService} from './services/login.service';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
