



import { AdminapiprojetService } from './../../service/adminapiprojet.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';


import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-adminlistprojet',
  templateUrl: './adminlistprojet.component.html',
  styleUrls: ['./adminlistprojet.component.css']
})
export class AdminlistprojetComponent implements OnInit {

  findformForm: FormGroup;
  submitted = false;
  
  projetForm: FormGroup;
  projet:any = [];
  constructor(private apiService: AdminapiprojetService,    private router: Router, private ngZone: NgZone,public fb: FormBuilder,) { 
    this.mainForm();
    this.readprojet();
  }

  mainForm() {
    this.projetForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.projetForm.controls;
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


onSubmitssss() {


  this.apiService.findprojet(this.projetForm.value).subscribe((data) => {
    this.projet = data;

  })  
}





}