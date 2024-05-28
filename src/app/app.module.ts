import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http'; //Angular API for client-server/API communication
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import {UserRegistrationFormComponent} from './user-registration-form/user-registration-form.component'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        UserRegistrationFormComponent
    ],
    imports:[
        BrowserModule,
        HttpClientModule,
        AppRoutingModule, 
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatSnackBarModule
    ],
    providers:[HttpClientModule],
    bootstrap:[AppComponent]  
})
export class AppModule { }