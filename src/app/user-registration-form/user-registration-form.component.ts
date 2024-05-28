import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; //import to close dialog on success
import {UserRegistrationService} from '../fetch-api-data.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormField,
    FormsModule
  ]
})
export class UserRegistrationFormComponent implements OnInit{
  @Input() userData = {Username: '', Password:'', Email:'', Birthday:''};

  constructor(
    public fetchApiData: UserRegistrationService,
    private http: HttpClientModule,
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
      this.snackBar.open(result, 'OK',{
        duration:2000
      });
    }, (result)=>{
      this.snackBar.open(result, 'OK',{
        duration:2000
      });
    }
    );
  }
}
