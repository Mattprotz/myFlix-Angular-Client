import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  movies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ){}

  ngOnInit(): void{
    this.getMovies();
  }

  getMovies(): void{
    this.fetchApiData.getAllMovies().subscribe((resp:any)=>{
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }
  
}

