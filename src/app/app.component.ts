import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[RouterOutlet]
})
export class AppComponent {
  title = 'myFlix-Angular-client';

  // openMoviesDialog(): void {
  //   this.dialog.open(MovieCardComponent, {
  //     width: '500px'
  //   });
  // }
}
