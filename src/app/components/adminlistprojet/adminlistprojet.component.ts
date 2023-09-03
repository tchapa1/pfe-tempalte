
import { AdminapiprojetService } from './../../service/adminapiprojet.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AfterViewInit, Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { AdminapigroupeService } from './../../service/adminapigroupe.service';


declare var $: any;

@Component({
  selector: 'app-adminlistprojet',
  templateUrl: './adminlistprojet.component.html',
  styleUrls: ['./adminlistprojet.component.css']
})
export class AdminlistprojetComponent implements OnInit, AfterViewInit {

  projet: any = [];
  projetfind: any = [];
  projetfinded: any = [];
  groupe: any = [];
  projetForm: FormGroup;


  findformForm: FormGroup;
  submitted = false;



  constructor(
    private apiService: AdminapiprojetService,
    private router: Router,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private apiService2: AdminapigroupeService
  ) {
    this.readprojet();
    this.mainForm();
    this.readgroupe();
  }


  ngOnInit() { }


  ngAfterViewInit() {
    $(document).ready(function () {
      // Initialisation de DataTables avec la fonctionnalité de recherche et de pagination
      $('#projet-list-table').DataTable({
        searching: true, // Activer la recherche
        lengthMenu: [5, 10, 50, 100], // Nombre d'éléments par page
        pageLength: 5 // Nombre d'éléments affichés par défaut par page
        // Autres options de configuration de DataTables, le cas échéant
      });
    });
  }


  mainForm() {
    this.findformForm = this.fb.group({
      email: ['', [Validators.required]],
    });
  }

  // Getter to access form control
  get myForm() {
    return this.projetForm.controls;
  }

  readgroupe() {
    this.apiService2.getGroupes().subscribe((data) => {
      this.groupe = data;
    })
  }


  readprojet() {
    this.apiService.getProjets().subscribe((data) => {
      this.projet = data;
    })
  }


  removeprojet(projetId: string) {
    if (window.confirm('Are you sure?')) {
      // Trouver l'index de l'utilisateur dans le tableau projet
      const index = this.projet.findIndex((projetItem) => projetItem._id === projetId);
      if (index !== -1) {
        // Supprimer l'utilisateur de la base de données en utilisant l'ID de l'utilisateur
        this.apiService.deleteProjet(projetId).subscribe(
          () => {
            // Utiliser la méthode splice pour supprimer l'utilisateur du tableau
            this.projet.splice(index, 1);
            // Rediriger vers la page adminlistprojet après la suppression
            this.router.navigateByUrl('/adminlistprojet');
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
    let DATA: any = document.getElementById('projet-list-table');
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
      return this.apiService.createProjet(this.findformForm.value).subscribe({
        complete: () => {
          console.log('Projet successfully created!'),
            // Rediriger vers la page /adminlistprojet après l'ajout d'un utilisateur
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistprojet'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }




}








/*
import { AdminapiprojetService } from './../../service/adminapiprojet.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-adminlistprojet',
  templateUrl: './adminlistprojet.component.html',
  styleUrls: ['./adminlistprojet.component.css']
})
export class AdminlistprojetComponent implements OnInit {



  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];



  findformForm: FormGroup;
  submitted = false;

  projetForm: FormGroup;
  projet: any = [];

  projetfind: any = [];
  user: any = [];

  constructor(private apiService: AdminapiprojetService,
     private router: Router,
     private ngZone: NgZone,
     public fb: FormBuilder,
     private apiService2: AdminapiuserService) {
    this.mainForm();
    this.readprojet();
    this.readuser();
  }

  mainForm() {
    this.projetForm = this.fb.group({
      nom: ['', [Validators.required]],


    });
  }

  readuser() {
    this.apiService2.getUsers().subscribe((data) => {
      this.user = data;
    })
  }



  // Getter to access form control
  get myForm() {
    return this.projetForm.controls;
  }

  ngOnInit() { }
  readprojet() {
    this.apiService.getProjets().subscribe((data) => {
      this.projet = data;
    })
  }


  onTableDataChange(event: any) {
    this.page = event;
    this.readprojet();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.readprojet();
  }



  removeprojet(projet, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteProjet(projet._id).subscribe((data) => {
        this.projet.splice(index, 1);
      }
      )
    }
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('projet-list-table');
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


    let creatorId = []
    this.projetfind= []
    for (let i in this.projet) {
      if (this.projetForm.value.nom == this.projet[i].nom)

        this.projetfind.push(this.projet[i])
    }
    this.projet = this.projetfind;

  }



}
*/