
import { Component, OnInit } from '@angular/core';



import { AdminapiabsenceService } from './../../service/adminapiabsence.service';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { AdminapicongeService } from './../../service/adminapiconge.service';
import { AdminapiprojetService } from './../../service/adminapiprojet.service';
import { AdminapinotificationService } from './../../service/adminapinotification.service';

import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  profile: any;
  username: string
  profileisSet = false


  notif:any = [];
  absence:any = [];
  user:any = [];
  conge:any = [];
  projet:any = [];

  constructor(
    private apiServiceabsence: AdminapiabsenceService,
    private apiServiceuser: AdminapiuserService,
    private apiServiceconge: AdminapicongeService,
    private apiServiceprojet: AdminapiprojetService,
    private apiService: AdminapinotificationService,
    private authService: AuthService, 
    private route: ActivatedRoute

  ) {

    this.readabsence();


   }

  ngOnInit(): void {

    this.userIsAuthenticated = this.authService.getIsAuth();
    console.log(this.userIsAuthenticated)
    if (this.userIsAuthenticated) {
      console.log(this.userIsAuthenticated)
    }

    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        console.log(isAuthenticated)
        this.userIsAuthenticated = isAuthenticated;
        if (this.userIsAuthenticated) {
          console.log(this.userIsAuthenticated)
        }
      });


  }
  readabsence(){

    this.apiServiceabsence.getAbsences().subscribe((data) => {
     this.absence = data;
    })  
    this.apiServiceuser.getUsers().subscribe((data) => {
      this.user = data;
     })  
     this.apiServiceconge.getConges().subscribe((data) => {
      this.conge = data;
     })  
     this.apiServiceprojet.getProjets().subscribe((data) => {
      this.projet = data;
     })  
     this.apiService.getNotifications().subscribe((data) => {
      this.notif = data;
     })  
    
    

  }


  
  onLogout() {
    this.authService.logout();
  }




  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }



}
