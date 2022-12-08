



import { AdminapiprojetService } from './../../service/adminapiprojet.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dglistprojet',
  templateUrl: './dglistprojet.component.html',
  styleUrls: ['./dglistprojet.component.css']
})
export class DglistprojetComponent implements OnInit {

  
  findformForm: FormGroup;
  submitted = false;
  
  projet:any = [];
  constructor(private apiService: AdminapiprojetService,private router: Router, private ngZone: NgZone) { 
    this.readprojet();
  }
  ngOnInit() {}
  readprojet(){
    this.apiService.getProjets().subscribe((data) => {
     this.projet = data;
    })    
  }
  removeprojet(projet, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteProjet(projet._id).subscribe((data) => {
          this.projet.splice(index, 1);
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
    return this.apiService.deleteProjet(this.findformForm.value).subscribe({
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