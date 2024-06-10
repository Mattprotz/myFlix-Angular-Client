import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports: [RouterOutlet, RouterModule]
})
export class AppComponent {
  title = 'myFlix-Angular-client';

  // constructor(public dialog: MatDialog) { }

  // openMoviesDialog(): void {
  //   this.dialog.open(MovieCardComponent, {
  //     width: '500px'
  //   });
  // }
}
