import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const apiUrl = "https://myflix-movienet-6e137990a158.herokuapp.com";

@Injectable({
  providedIn: 'root',
})
export class FetchApiDataService {
//Inject HttpClient module to the constructor params, provides HttpClient to class, available via this.http
  constructor(private http: HttpClient) {
    console.log('UserRegistrationService instantiated');
   }

  public userRegistration(userDetails: any ): //takes argument of type 'any' that's 'userDetails' to post API endpoint
  Observable<any>{ //says: 'we return this type almost like an enhanced promise: allows async event processes
    console.log('userRegistration called with:',userDetails)
    return this.http.post(apiUrl + 'users', userDetails).pipe( //'pipe' from RxJS, combines multiple funcs into single (only one in this case: 'catchError')
      catchError(this.handleError)
      );
  }
  public userLogin(userDetails: any):
      Observable<any>{
        console.log(userDetails)
        return this.http.get(apiUrl + 'users', userDetails).pipe(
          catchError(this.handleError)
        )
      }
    public getAllMovies(movieDetails: any):
      Observable<any>{
        console.log(movieDetails)
        return this.http.get(apiUrl + 'movies', movieDetails).pipe(
          catchError(this.handleError)
        )
      }
    public getMovie(movieDetails: any):
      Observable<any>{
        console.log(movieDetails)
        return this.http.get(apiUrl + 'movies', movieDetails).pipe(
          catchError(this.handleError)
        )
      }
    public getDirector(directorDetails: any):
      Observable<any>{
        console.log(directorDetails)
        return this.http.get(apiUrl + 'director', directorDetails).pipe(
          catchError(this.handleError)
        )
      }
    public getGenre(genre: any):
      Observable<any>{
        console.log(genre)
        return this.http.get(apiUrl + 'genre', genre).pipe(
          catchError(this.handleError)
        )
      }
    public getUser(userDetails: any):
      Observable<any>{
        console.log(userDetails)
        return this.http.get(apiUrl + 'users', userDetails).pipe(
          catchError(this.handleError)
        )
      }
    public getUserFavorite(userFavorite: any):
      Observable<any>{
        console.log(userFavorite)
        return this.http.get(apiUrl + 'userFavorite', userFavorite).pipe(
          catchError(this.handleError)
        )
      }
    public addFavorite(userFavorite: any):
      Observable<any>{
        console.log(userFavorite)
        return this.http.post(apiUrl + 'userFavorite', userFavorite).pipe(
          catchError(this.handleError)
        )
      }
    public editUser(userDetails: any):
      Observable<any>{
        console.log(userDetails)
        return this.http.patch(apiUrl + 'userDetails', userDetails).pipe(
          catchError(this.handleError)
        )
      }
    public deleteUser(userDetails: any):
      Observable<any>{
        console.log(userDetails)
        return this.http.delete(apiUrl + 'user', userDetails).pipe(
          catchError(this.handleError)
        )
      }
    public deleteFavoriteMovie(userDetails: any):
      Observable<any>{
        console.log(userDetails)
        return this.http.delete(apiUrl + 'userDetails', userDetails).pipe(
          catchError(this.handleError)
        )
      }

  private handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent){
      console.error('Some error ocurred:', error.error.message);
    }else{
      console.error(
        'Error Status code ${error.status},'+'Error body is: ${error.error}'
      )
    } return throwError(
      'Something really bad happened; Please try again later'
    )
  }
}
