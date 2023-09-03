import { AdminapicongeService } from './../../service/adminapiconge.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AfterViewInit, Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
declare var $: any;



@Component({
  selector: 'app-adminlistconge',
  templateUrl: './adminlistconge.component.html',
  styleUrls: ['./adminlistconge.component.css']
})
export class AdminlistcongeComponent implements OnInit , AfterViewInit {


  conge:any = [];
  congefind:any = [];
  congefinded:any = [];
  user: any = [];
  

  
  absenceForm: FormGroup;
  findformForm: FormGroup;
  submitted = false;


  


  constructor(
    private apiService: AdminapicongeService,
    private router: Router,
    private ngZone: NgZone,
    private apiService1: AdminapiuserService,
    public fb: FormBuilder
    )
     {
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




  ngAfterViewInit() {
    $(document).ready(function() {
      // Initialisation de DataTables avec la fonctionnalité de recherche et de pagination
      $('#conge-list-table').DataTable({
        searching: true, // Activer la recherche
        lengthMenu: [5, 10, 50, 100], // Nombre d'éléments par page
        pageLength: 5 // Nombre d'éléments affichés par défaut par page
        // Autres options de configuration de DataTables, le cas échéant
      });
    });
  }




  readconge() {
    this.apiService.getConges().subscribe((data) => {
      this.conge = data;
    })
  }


  removeconge(congeId: string) {
    if (window.confirm('Are you sure?')) {
      // Trouver l'index de l'utilisateur dans le tableau conge
      const index = this.conge.findIndex((congeItem) => congeItem._id === congeId);
      if (index !== -1) {
        // Supprimer l'utilisateur de la base de données en utilisant l'ID de l'utilisateur
        this.apiService.deleteConge(congeId).subscribe(
          () => {
            // Utiliser la méthode splice pour supprimer l'utilisateur du tableau
            this.conge.splice(index, 1);
            // Rediriger vers la page adminlistconge après la suppression
            this.router.navigateByUrl('/adminlistconge');
          },
          (error) => {
            // Gérer les erreurs ici, si nécessaire
            console.log(error);
          }
        );
      }
    }
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('conge-list-table');
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

    let creatorId = []
    for (let i in this.conge) {
      if (this.absenceForm.value.idemploye == this.conge[i].idemploye)
        this.congefind.push(this.conge[i])

    }
    this.conge = this.congefind;
  }



}





/*
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
  

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];



  findformForm: FormGroup;
  submitted = false;
  user:any = [];
  absenceForm: FormGroup;
  conge:any = [];
  congefind:any = [];
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



  onTableDataChange(event: any) {
    this.page = event;
    this.readconge();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.readconge();
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
  let DATA: any = document.getElementById('conge-list-table');
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

    let creatorId = []
    for (let i in this.conge) {
      if(this.absenceForm.value.idemploye==this.conge[i].idemploye)
           this.congefind.push(this.conge[i])

    }
    this.conge =this.congefind;
}



}
*/