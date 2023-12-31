import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthadminData } from 'src/app/auth/admin.model';



import {environment} from '../../environments/environment'
const BACKEND_URL = environment.apiUrl 





@Injectable({
  providedIn: 'root'
})
export class AuthadminService {

  baseUri: string = 'http://localhost:4000/adminapiadmin';


  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;
  private authStatusListener = new Subject<boolean>();
  public err = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient, private router: Router) { }


  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

//-------------------------------------------------------------------------------------------------------------------------

    signIn(email: string, password: string) {
      const authData: AuthadminData = { 

        email: email,
        password: password

       
       };
      return this.http
        .post<any>(`${this.baseUri}/login`, authData)
        .subscribe((res: any) => {
          this.router.navigate(["/adminlistjob"]);

        });
    }


    
//-------------------------------------------------------------------------------------------------------------------------

  createUser(email: string, password: string) {
    const authData: AuthadminData = { 
      email: email,
      password: password
     
     };    this.http
      .post(BACKEND_URL + "signup", authData)
      .subscribe(response => {
        this.err.next(null)
        this.router.navigate(["/"]);

      },
        err => {
          this.err.next(err)
          console.log(err)
        });
  }



  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/"]);
  }


  autoAuthUser() {
    const authInformation = this.getAuthData();

    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();

    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId
    }
  }



  private setAuthTimer(duration: number) {

    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userId", userId);
  }


  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");

    localStorage.removeItem("profile");
    localStorage.removeItem("uname");
  }

}
