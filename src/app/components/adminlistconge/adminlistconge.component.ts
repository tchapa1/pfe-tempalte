



import { AdminapicongeService } from './../../service/adminapiconge.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


import { AdminapiuserService } from './../../service/adminapiuser.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-adminlistconge',
  templateUrl: './adminlistconge.component.html',
  styleUrls: ['./adminlistconge.component.css']
})
export class AdminlistcongeComponent implements OnInit {
  findformForm: FormGroup;
  submitted = false;
  user:any = [];
  absenceForm: FormGroup;
  conge:any = [];
  constructor(private apiService: AdminapicongeService,    private router: Router,
    private ngZone: NgZone,private apiService1: AdminapiuserService,
    public fb: FormBuilder) { 
      this.mainForm();
    this.readconge();
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
  readconge(){
    this.apiService.getConges().subscribe((data) => {
     this.conge = data;
    })    
  }
  removeconge(conge, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteConge(conge._id).subscribe((data) => {
          this.conge.splice(index, 1);
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

  // Getter to access form control
  get myForm() {
    return this.absenceForm.controls;
  }


  onSubmitssss() {


    this.apiService.findconge(this.absenceForm.value).subscribe((data) => {
      this.conge = data;

    })  
}



}