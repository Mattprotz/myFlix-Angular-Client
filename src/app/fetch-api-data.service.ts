import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const apiUrl = "https://myflix-movienet-6e137990a158.herokuapp.com/";
@Injectable({
  providedIn: 'root',
})
export class FetchApiDataService {

//Inject HttpClient module to the constructor params, provides HttpClient to class, available via this.http
  constructor(private httpClient: HttpClient) {
    console.log('FetchApiDataService instantiated');
   }

   private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some Error Occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error Body is: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  private extractResponseData(res: any): any {
    const body = res;
    return body || { };
  }

/**
 * User Registration
 * @param {Object} userDetails requires username and password
 * @returns 
 */

  public userRegistration(userDetails: any ): //takes argument of type 'any' that's 'userDetails' to post API endpoint
  Observable<any>{ //says: 'we return this type almost like an enhanced promise: allows async event processes
    console.log(userDetails)
    return this.httpClient.post(apiUrl + 'users', userDetails).pipe( //'pipe' from RxJS, combines multiple funcs into single (only one in this case: 'catchError')
      catchError(this.handleError),
      map(this.extractResponseData)
      );
  }

/**
 * User Login
 * @param {Object} userDetails requires username and password
 * @returns 
 */

  public userLogin(userDetails: any):
      Observable<any>{
        console.log(userDetails)
        return this.httpClient.post(apiUrl + 'login', userDetails).pipe(
          catchError(this.handleError),
          map(this.extractResponseData)
        )
      }
      
/**
 * Get All Movies
 * @returns if token invalid, status error, else returns array of movies
 */

    public getAllMovies(): Observable<any> {
      const token = localStorage.getItem('token')
      return this.httpClient.get(apiUrl + 'movies')
        .pipe(catchError(this.handleError));
    }

/**
 * Get Movie
 * @param movieDetails
 * @returns movie object
 */

    public getMovie(movieDetails: any):
      Observable<any>{
        console.log(movieDetails)
        return this.httpClient.get(apiUrl + 'movies', movieDetails).pipe(
          catchError(this.handleError)
        )
      }

/**
 * Get Director
 * @param directorDetails
 * @returns director object
 */

    public getDirector(directorDetails: any):
      Observable<any>{
        console.log(directorDetails)
        return this.httpClient.get(apiUrl + 'director', directorDetails).pipe(
          catchError(this.handleError)
        )
      }

/**
 * Get Genre
 * @param genre
 * @returns genre
 */

    public getGenre(genre: any):
      Observable<any>{
        console.log(genre)
        return this.httpClient.get(apiUrl + 'genre', genre).pipe(
          catchError(this.handleError)
        )
      }

/**
 * Get Use List
 * @param userDetails
 * @returns user object
 */

    public getUser(userDetails: any):
      Observable<any>{
        console.log(userDetails)
        return this.httpClient.get(apiUrl + 'users', userDetails).pipe(
          catchError(this.handleError)
        )
      }

/**
 * Get User Favorites list
 * @param userFavorite
 * @returns movie array
 */

    public getUserFavorite(userFavorite: any):
      Observable<any>{
        console.log(userFavorite)
        return this.httpClient.get(apiUrl + 'userFavorite', userFavorite).pipe(
          catchError(this.handleError)
        )
      }
    public addFavorite(userFavorite: any):
      Observable<any>{
        console.log(userFavorite)
        return this.httpClient.post(apiUrl + 'userFavorite', userFavorite).pipe(
          catchError(this.handleError)
        )
      }
    public editUser(userDetails: any):
      Observable<any>{
        console.log(userDetails)
        return this.httpClient.patch(apiUrl + 'userDetails', userDetails).pipe(
          catchError(this.handleError)
        )
      }
    public deleteUser(userDetails: any):
      Observable<any>{
        console.log(userDetails)
        return this.httpClient.delete(apiUrl + 'user', userDetails).pipe(
          catchError(this.handleError)
        )
      }
    public deleteFavoriteMovie(userDetails: any):
      Observable<any>{
        console.log(userDetails)
        return this.httpClient.delete(apiUrl + 'userDetails', userDetails).pipe(
          catchError(this.handleError)
        )
      }

}
