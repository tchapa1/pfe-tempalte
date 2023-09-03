import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminapicalandarService {


  baseUri: string = 'http://localhost:4000/Adminapicalandar';
  baseUrispring: string = 'http://localhost:4000/api';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  // Create
  createCalandar(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  // Get all Calandars
  getCalandars(): Observable<any> {
    return this.http.get<any>(`${this.baseUri}`);
  }


  findcalandar(data): Observable<any> {
    let url = `${this.baseUri}/find`;
    return this.http.get(url, data).pipe(catchError(this.errorMgmt));
  }


  // Get Calandar
  getCalandar(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  // Update Calandar
  updateCalandar(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Delete Calandar
  deleteCalandar(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}