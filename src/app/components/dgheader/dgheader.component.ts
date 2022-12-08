


import { Component, OnInit } from '@angular/core';



import { AdminapiabsenceService } from './../../service/adminapiabsence.service';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { AdminapicongeService } from './../../service/adminapiconge.service';
import { AdminapiprojetService } from './../../service/adminapiprojet.service';


@Component({
  selector: 'app-dgheader',
  templateUrl: './dgheader.component.html',
  styleUrls: ['./dgheader.component.css']
})
export class DgheaderComponent implements OnInit {


  absence:any = [];
  user:any = [];
  conge:any = [];
  projet:any = [];

  constructor(
    private apiServiceabsence: AdminapiabsenceService,
    private apiServiceuser: AdminapiuserService,
    private apiServiceconge: AdminapicongeService,
    private apiServiceprojet: AdminapiprojetService

  ) {

    this.readabsence();


   }

  ngOnInit(): void {
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
    
    

  }


}
