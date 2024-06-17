import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from "./app.component";

import { AppRoutingModule } from './app-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
<<<<<<< HEAD
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from "./user-login-form/user-login-form.component";
import { MovieCardComponent } from "./movie-card/movie-card.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { FormsModule } from "@angular/forms";
=======
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];
>>>>>>> f50e5e96f26f0544b542834c08a023f565eb9bbb

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    MovieCardComponent,
    WelcomePageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
=======
    FormsModule,
    HttpClientModule,
>>>>>>> f50e5e96f26f0544b542834c08a023f565eb9bbb
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [provideAnimationsAsync(), provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }