

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiaffectationgroupeService {

  baseUri: string = 'http://localhost:4000/apiaffectationgroupe';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  // Create
  createaffectationgroupe(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  // Get all affectationgroupes
  getaffectationgroupes() {
    return this.http.get(`${this.baseUri}`);
  }

  

  getaffectationgroupessssssss(id): Observable<any> {
    let url = `${this.baseUri}/readsssssss/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }



  
  // Get affectationgroupe
  getaffectationgroupe(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  // Update affectationgroupe
  updateaffectationgroupe(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Delete affectationgroupe
  deleteaffectationgroupe(id): Observable<any> {
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


    // Delete all affectations of a specific group
    deleteAllAffectationsByGroupId(groupId: string): Observable<any> {
      let url = `${this.baseUri}/delete/group/${groupId}`;
      return this.http.delete(url, { headers: this.headers }).pipe(catchError(this.errorMgmt));
    }

      // Add user to group
  addUserToGroup(groupId: string, userId: string): Observable<any> {
    let url = `${this.baseUri}/adduser/${groupId}/${userId}`;
    return this.http.put(url, null, { headers: this.headers }).pipe(catchError(this.errorMgmt));
  }
  // Remove user from group
  removeUserFromGroup(groupId: string, userId: string): Observable<any> {
    let url = `${this.baseUri}/removeuser/${groupId}/${userId}`;
    return this.http.put(url, null, { headers: this.headers }).pipe(catchError(this.errorMgmt));
  }


}