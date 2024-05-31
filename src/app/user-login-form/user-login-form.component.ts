import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; 
import {FetchApiDataService} from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user-login-form',
  standalone: true,
  templateUrl: './user-login-form.component.html',
  styleUrl: './user-login-form.component.scss',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatLabel
  ],
})
export class UserLoginFormComponent implements OnInit{
  @Input() userData = {Username: '', Password:''};

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar
  ){
    console.log('UserLoginFormComponent instantiated')
  }
  ngOnInit(): void{}

  loginUser(): void{
    console.log('loginUser called');
    this.fetchApiData.userLogin(this.userData).subscribe((result)=>{
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token', result.token)
      this.dialogRef.close();
      this.snackBar.open(result, 'OK',{
        duration: 2000
      });
    },(result)=>{
      console.error('Error Status code', result.status, 'Error body is:', this.snackBar.open(result,'OK',{
        duration:2000
      }))
    })
  }
}
