import { AdminapiabsenceService } from './../../service/adminapiabsence.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AfterViewInit, Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { switchMap } from 'rxjs/operators';



declare var $: any;


@Component({
  selector: 'app-adminlistabsence',
  templateUrl: './adminlistabsence.component.html',
  styleUrls: ['./adminlistabsence.component.css']
})
export class AdminlistabsenceComponent implements OnInit, AfterViewInit {




  absence: any = [];
  absencesss: any = [];
  absencefind: any = [];
  absencefinded: any = [];
  user: any = [];
  nom: any = [];
  prenom: any = [];

  public ss: string;
  absenceForm: FormGroup;
  findformForm: FormGroup;
  submitted = false;



  constructor(
    private apiService: AdminapiabsenceService,
    private router: Router,
    private ngZone: NgZone,
    private apiService1: AdminapiuserService,
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
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],

    });
  }

  ngOnInit() {
    this.apiService1.getUsers().subscribe((data) => {
      this.user = data;
    })

  }

  ngAfterViewInit() {
    $(document).ready(function () {
      // Initialisation de DataTables avec la fonctionnalité de recherche et de pagination
      $('#absence-list-table').DataTable({
        searching: true, // Activer la recherche
        lengthMenu: [5, 10, 50, 100], // Nombre d'éléments par page
        pageLength: 5 // Nombre d'éléments affichés par défaut par page
        // Autres options de configuration de DataTables, le cas échéant
      });
    });
  }


  readabsence() {
    this.apiService.getAbsences().subscribe((data) => {
      this.absence = data;
      for (let i in this.absence) {
        if (this.absence[i].idemploye = this.user[i]._id)
          this.nom.push(this.user[i].nom)
        this.prenom.push(this.user[i].prenom)

      }
    })
  }


  // Getter to access form control
  get myForm() {
    return this.absenceForm.controls;
  }



  onSubmitssss() {

    let creatorId = []
    for (let i in this.absence) {
      if (this.absenceForm.value.idemploye == this.absence[i].idemploye)
        this.absencefind.push(this.absence[i])

    }
    for (let i in this.absence) {
      if (this.absenceForm.value.datedebut == this.absence[i].datedebut)
        this.absencefind.push(this.absence[i])

    }
    for (let i in this.absence) {
      if (this.absenceForm.value.datefin == this.absence[i].datefin)
        this.absencefind.push(this.absence[i])

    }

    for (let i in this.user) {
      if (this.absenceForm.value.nom == this.user[i].nom)
        this.ss = this.user[i]._id;
      for (let i in this.absence) {
        if (this.absence[i].idemploye == this.ss)
          this.absencefind.push(this.absence[i])

      }

    }

    for (let i in this.user) {
      if (this.absenceForm.value.prenom == this.user[i].prenom)
        this.ss = this.user[i]._id;
      for (let i in this.absence) {
        if (this.absence[i].idemploye == this.ss)
          this.absencefind.push(this.absence[i])
      }
    }
    this.absence = this.absencefind;
  }


  removeabsence(absenceId: string) {
    if (window.confirm('Are you sure?')) {
      // Trouver l'index de l'utilisateur dans le tableau absence
      const index = this.absence.findIndex((absenceItem) => absenceItem._id === absenceId);
      if (index !== -1) {
        // Supprimer l'utilisateur de la base de données en utilisant l'ID de l'utilisateur
        this.apiService.deleteAbsence(absenceId).subscribe(
          () => {
            // Utiliser la méthode splice pour supprimer l'utilisateur du tableau
            this.absence.splice(index, 1);
            // Rediriger vers la page adminlistabsence après la suppression
            this.router.navigateByUrl('/adminlistabsence');
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
    let DATA: any = document.getElementById('absence-list-table');
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

/*

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


  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  

  findformForm: FormGroup;
  submitted = false;
  absencesss:any = [];
  user:any = [];
  absenceForm: FormGroup;
  absence:any = [];

  absencefind:any = [];

  nom:any = [];
  prenom:any = [];
  public ss: string;


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
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],

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



  readabsence(){
    this.apiService.getAbsences().subscribe((data) => {
    this.absence = data;

    for (let i in this.absence) {
      if(this.absence[i].idemploye=this.user[i]._id)
         this.nom.push(this.user[i].nom)
         this.prenom.push(this.user[i].prenom)

    }




    })    
  }
  // Getter to access form control
  get myForm() {
    return this.absenceForm.controls;
  }

  onSubmitssss() {


    let creatorId = []
    for (let i in this.absence) {
      if(this.absenceForm.value.idemploye==this.absence[i].idemploye)
           this.absencefind.push(this.absence[i])

    }
    for (let i in this.absence) {
      if(this.absenceForm.value.datedebut==this.absence[i].datedebut)
           this.absencefind.push(this.absence[i])

    }
    for (let i in this.absence) {
      if(this.absenceForm.value.datefin==this.absence[i].datefin)
           this.absencefind.push(this.absence[i])

    }

    for (let i in this.user) {
      if(this.absenceForm.value.nom==this.user[i].nom)
           this.ss = this.user[i]._id;
           for (let i in this.absence) {
            if(this.absence[i].idemploye==this.ss)
                 this.absencefind.push(this.absence[i])
      
          }

    }


    for (let i in this.user) {
      if(this.absenceForm.value.prenom==this.user[i].prenom)
           this.ss = this.user[i]._id;
           for (let i in this.absence) {
            if(this.absence[i].idemploye==this.ss)
                 this.absencefind.push(this.absence[i])
      
          }

    }




    this.absence =this.absencefind;
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

*/