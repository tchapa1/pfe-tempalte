

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AdminapiuserService {


  baseUri: string = 'http://localhost:4000/Adminapiuser';


  baseUrispring: string = 'http://localhost:4000/api';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }


  /*
    // Create
    createUser(data: any, image: File): Observable<any> {
      let url = `${this.baseUri}/create`;
    
      // Vérifier d'abord si l'adresse e-mail est déjà utilisée
      return this.finduser(data.email).pipe(
        mergeMap((existingUser) => {
          if (existingUser) {
            return throwError('Cette adresse e-mail est déjà utilisée.');
          }
    
          // Créer un objet FormData pour envoyer les données du formulaire
          const formData: FormData = new FormData();
          formData.append('nom', data.nom);
          formData.append('prenom', data.prenom);
          formData.append('status', data.status);
          formData.append('pays', data.pays);
          formData.append('role', data.role);
          formData.append('departement', data.departement);
          formData.append('password', data.password);
          formData.append('matricule', data.matricule);
          formData.append('email', data.email);
    
          // Ajoutez le fichier image s'il existe
          if (image) {
            formData.append('imagePath', image, image.name);
          }
    
          return this.http.post(url, formData).pipe(catchError(this.errorMgmt));
        })
      );
    }
  */
  // Create
  createUser(formData: FormData): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, formData).pipe(catchError(this.errorMgmt));
  }


  /*
    // Update User
    updateUser(id, data): Observable<any> {
      let url = `${this.baseUri}/update/${id}`;
      return this.http.put(url, data, { headers: this.headers }).pipe(catchError(this.errorMgmt));
    }
  */

    updateUser(id: string, formData: FormData): Observable<any> {
      let url = `${this.baseUri}/update/${id}`;
      return this.http.put(url, formData).pipe(catchError(this.errorMgmt));
    }

  finduserbyadmin(data) {
    let url = `${this.baseUri}/finddduserssss`;
    return this.http.get(url, data).pipe(catchError(this.errorMgmt));
  }


  // Get all Users
  getUsers() {
    return this.http.get(`${this.baseUri}`);
  }



  finduser(data): Observable<any> {
    let url = `${this.baseUri}/find`;
    return this.http.get(url, data).pipe(catchError(this.errorMgmt));
  }


  // Get User
  getUser(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }




  // Delete User
  deleteUser(id): Observable<any> {
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