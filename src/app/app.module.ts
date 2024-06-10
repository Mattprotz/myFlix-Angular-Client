import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from "./app.component";

import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatDialogModule, MatDialogContent } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {UserRegistrationFormComponent} from './user-registration-form/user-registration-form.component'
import { UserLoginFormComponent } from "./user-login-form/user-login-form.component";
import { MovieCardComponent } from "./movie-card/movie-card.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { FormsModule } from "@angular/forms";


const routes: Routes = [
    { path: 'welcome', component: WelcomePageComponent },
    { path: 'movies', component: MovieCardComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
  ];
@NgModule({
    declarations: [
        AppComponent,
        UserRegistrationFormComponent,
        UserLoginFormComponent,
        MovieCardComponent,
        WelcomePageComponent,
    ],
    imports:[
        RouterModule.forRoot(routes),
        BrowserModule,
        AppRoutingModule, 
        RouterModule,
        HttpClientModule,
        RouterOutlet,
        BrowserAnimationsModule,
        MatDialogModule,
        MatDialogContent,
        MatInputModule,
        MatLabel,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatSnackBarModule,
        FormsModule,
        UserRegistrationFormComponent,
        MovieCardComponent,
        WelcomePageComponent
    ],
    providers:[provideClientHydration()],
    exports:[AppComponent],
    bootstrap:[AppComponent]  
})
export class AppModule { }