
import { Tache } from './../../model/tache';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapitacheService } from './../../service/adminapitache.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-admindetailtache',
  templateUrl: './admindetailtache.component.html',
  styleUrls: ['./admindetailtache.component.css']
})
export class AdmindetailtacheComponent implements OnInit {

  submitted = false;
  detailForm: FormGroup;
  tacheData: Tache[];

  tache:any = [];


  tacheProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapitacheService,
    private router: Router
  ) {
    this.readtache();
  }

  readtache(){
    this.apiService.getTaches().subscribe((data) => {
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



  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getTache(id);
    this.detailForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      idprojet: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      idemploye: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.detailForm.controls;
  }
  getTache(id) {
    this.apiService.getTache(id).subscribe((data) => {
      this.detailForm.setValue({
        nom: data['nom'],
        description: data['description'],
        datecreation: data['datecreation'],
        idprojet: data['idprojet'],
        etat: data['etat'],
        idemploye: data['idemploye'],
      });
    });
  }


}