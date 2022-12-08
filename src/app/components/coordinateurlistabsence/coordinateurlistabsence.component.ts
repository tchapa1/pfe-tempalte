

import { AdminapiabsenceService } from './../../service/adminapiabsence.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coordinateurlistabsence',
  templateUrl: './coordinateurlistabsence.component.html',
  styleUrls: ['./coordinateurlistabsence.component.css']
})
export class CoordinateurlistabsenceComponent implements OnInit {
  

  findformForm: FormGroup;
  submitted = false;


  absence:any = [];
  constructor(private apiService: AdminapiabsenceService,private router: Router, private ngZone: NgZone) { 
    this.readabsence();
  }
  ngOnInit() {}
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

onSubmitss() {
  this.submitted = true;
  if (!this.findformForm.valid) {
    return false;
  } else {
    return this.apiService.createAbsence(this.findformForm.value).subscribe({
      complete: () => {
        console.log('absence successfully created!'),
          this.ngZone.run(() => this.router.navigateByUrl('/adminlistabsence'));
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}



}