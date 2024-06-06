import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; 
import {FetchApiDataService} from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit{
  @Input() userData = {Username: '', Password:'', Email:'', Birthday:''};

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {
    console.log('UserRegistrationFormComponent instantiated');
  }
  ngOnInit(): void {}
      
  
//send form input to backend
  registerUser(): void{
    console.log('registerUser called');
    this.fetchApiData.userRegistration(this.userData).subscribe((result)=>{
      this.dialogRef.close(); //close dialog modal on success
      this.snackBar.open('Sign Up Sucessful', 'OK',{
        duration:2000
      });
    }, (result)=>{
      if (result.status === 400 && result.error.includes('already exists')) {
      console.error ( 'Username already exists. Please choose a different username.');
      }
      this.snackBar.open(result, 'OK',{
        duration:2000
      });
    }
    );
  }
}
