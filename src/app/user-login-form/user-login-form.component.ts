import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; 
import {FetchApiDataService} from '../fetch-api-data.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrl: './user-login-form.component.scss',
})

export class UserLoginFormComponent implements OnInit{
  @Input() userData = {Username: '', Password:''};

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router

  ){
    console.log('UserLoginFormComponent instantiated')
  }
  ngOnInit(): void{}

  loginUser(): void{
    console.log('loginUser called');

    this.fetchApiData.userLogin(this.userData).subscribe({
      next: (result)=>{
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('token', result.token)
        console.log('user logged in')
        this.snackBar.open('Login Successful', 'OK',{
          duration: 2000
        });
        this.router.navigate(['movies'])
        this.dialogRef.close();
      },
      error:(result)=>{
        console.error('Error Status code', result.status, 'Error body is:') 
        this.snackBar.open(result,'OK',
          {
          duration:2000
        })
        }
      })
  }
}
