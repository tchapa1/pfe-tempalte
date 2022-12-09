


import { AdminapiabsenceService } from './../../service/adminapiabsence.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { NgForm } from '@angular/forms';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AdminapiuserService } from './../../service/adminapiuser.service';


@Component({
  selector: 'app-adminlistabsence',
  templateUrl: './adminlistabsence.component.html',
  styleUrls: ['./adminlistabsence.component.css']
})
export class AdminlistabsenceComponent implements OnInit {
  

  findformForm: FormGroup;
  submitted = false;
  absencesss:any = [];
  user:any = [];
  absenceForm: FormGroup;
  absence:any = [];
  constructor(private apiService: AdminapiabsenceService,private router: Router, private ngZone: NgZone,private apiService1: AdminapiuserService,
    public fb: FormBuilder,
) { 
  this.mainForm();
    this.readabsence();
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
  readabsence(){
    this.apiService.getAbsences().subscribe((data) => {
     this.absence = data;
    })    
  }
  // Getter to access form control
  get myForm() {
    return this.absenceForm.controls;
  }

  onSubmitssss() {
    this.submitted = true;
    if (!this.absenceForm.valid) {
      return false;
    } else {
      return this.apiService.findabsence(this.absenceForm.value).subscribe({
        complete: () => {
          console.log('absence finded created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistabsence'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
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