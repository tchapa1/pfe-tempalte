


import { AdminapiabsenceService } from './../../service/adminapiabsence.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';





import { NgForm } from '@angular/forms';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AdminapiuserService } from './../../service/adminapiuser.service';


@Component({
  selector: 'app-rhlistabsence',
  templateUrl: './rhlistabsence.component.html',
  styleUrls: ['./rhlistabsence.component.css']
})
export class RhlistabsenceComponent implements OnInit {
  
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];


  
  absence:any = [];

  user:any = [];
  absencefind:any = [];
  absenceForm: FormGroup;

  constructor(private apiService: AdminapiabsenceService,private apiService1: AdminapiuserService,public fb: FormBuilder,) { 
    this.readabsence();
    this.mainForm();
  }
  mainForm() {
    this.absenceForm = this.fb.group({
      idemploye: ['', [Validators.required]],
      datedebut: ['', [Validators.required]],
      datefin: ['', [Validators.required]],

    });
  }


  ngOnInit() {

    this.apiService1.getUsers().subscribe((data) => {
      this.user = data;
     })


  }
  

  onTableDataChange(event: any) {
    this.page = event;
    this.readabsence();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.readabsence();
  }




  onSubmitssss() {


    let creatorId = []
    for (let i in this.absence) {
      if(this.absenceForm.value.idemploye==this.absence[i].idemploye)
           this.absencefind.push(this.user[i])

    }
    this.absence =this.absencefind;
  }


  readabsence(){
    this.apiService.getAbsences().subscribe((data) => {
     this.absence = data;
    })    
  }
  removeabsence(absence, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteAbsence(absence._id).subscribe((data) => {
          this.absence.splice(index, 1);
        }
      )    
    }
  }

  public openPDF(): void {
  let DATA: any = document.getElementById('htmlData');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('angular-demo.pdf');
  });
}
}