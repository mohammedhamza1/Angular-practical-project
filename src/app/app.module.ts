import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginService } from './services/login.service';
import { EditComponent } from './edit/edit.component';
import { ManagementComponent } from './management/management.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        NotFoundComponent,
        EditComponent,
        ManagementComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule

    ],
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
