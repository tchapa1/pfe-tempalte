


import { Avancementtache } from './../../model/avancementtache';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiavancementtacheService } from './../../service/adminapiavancementtache.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapitacheService } from './../../service/adminapitache.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-admindetailavancementtache',
  templateUrl: './admindetailavancementtache.component.html',
  styleUrls: ['./admindetailavancementtache.component.css']
})
export class AdmindetailavancementtacheComponent implements OnInit {
  tache:any = [];
  submitted = false;
  detailForm: FormGroup;
  avancementtacheData: Avancementtache[];
  avancementtacheProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiavancementtacheService,
    private router: Router,
    private apiService2222: AdminapitacheService
  ) {}
  ngOnInit() {

    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getavancementtache(id);
    this.detailForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idtache: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
    });
  }


  readtache(){
    this.apiService2222.getTaches().subscribe((data) => {
     this.tache = data;
    })    
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



  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.detailForm.controls;
  }
  getavancementtache(id) {
    this.apiService.getAvancementtache(id).subscribe((data) => {
      this.detailForm.setValue({
        titre: data['titre'],
        description: data['description'],
        idtache: data['idtache'],
        datecreation: data['datecreation'],

      });
    });
  }


}