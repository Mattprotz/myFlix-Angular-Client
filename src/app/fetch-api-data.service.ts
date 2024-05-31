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

   private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('Client-side error:', error.error.message);
    } else {
      console.error(`Server-side error: ${error.status}\nBody: ${error.error}`);
    }
    return throwError('Something went wrong; please try again later.');
  }

  private extractResponseData(res: any): any {
    const body = res;
    return body || { };
  }

  public userRegistration(userDetails: any ): //takes argument of type 'any' that's 'userDetails' to post API endpoint
  Observable<any>{ //says: 'we return this type almost like an enhanced promise: allows async event processes
    console.log(userDetails)
    return this.httpClient.post(apiUrl + 'users/', userDetails).pipe( //'pipe' from RxJS, combines multiple funcs into single (only one in this case: 'catchError')
      catchError(this.handleError),
      map(this.extractResponseData)
      );
  }
  public userLogin(userDetails: any):
      Observable<any>{
        console.log(userDetails)
        return this.httpClient.get(apiUrl + 'users/', userDetails).pipe(
          catchError(this.handleError),
          map(this.extractResponseData)
        )
      }
      
    public getAllMovies(movieDetails: any):
      Observable<any>{
        console.log(movieDetails)
        return this.httpClient.get(apiUrl + 'movies', movieDetails).pipe(
          catchError(this.handleError)
        )
      }
    public getMovie(movieDetails: any):
      Observable<any>{
        console.log(movieDetails)
        return this.httpClient.get(apiUrl + 'movies', movieDetails).pipe(
          catchError(this.handleError)
        )
      }
    public getDirector(directorDetails: any):
      Observable<any>{
        console.log(directorDetails)
        return this.httpClient.get(apiUrl + 'director', directorDetails).pipe(
          catchError(this.handleError)
        )
      }
    public getGenre(genre: any):
      Observable<any>{
        console.log(genre)
        return this.httpClient.get(apiUrl + 'genre', genre).pipe(
          catchError(this.handleError)
        )
      }
    public getUser(userDetails: any):
      Observable<any>{
        console.log(userDetails)
        return this.httpClient.get(apiUrl + 'users', userDetails).pipe(
          catchError(this.handleError)
        )
      }
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
