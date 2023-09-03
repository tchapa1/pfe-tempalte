import { AfterViewInit, Component, OnInit, NgZone } from '@angular/core';
import { AdminapiavancementprojetService } from './../../service/adminapiavancementprojet.service';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { AdminapiprojetService } from './../../service/adminapiprojet.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';







declare var $: any;


@Component({
  selector: 'app-adminlistavancementprojet',
  templateUrl: './adminlistavancementprojet.component.html',
  styleUrls: ['./adminlistavancementprojet.component.css']
})
export class AdminlistavancementprojetComponent implements OnInit, AfterViewInit {


  avancementprojet:any = [];
  user:any = [];
  projet:any = [];


  constructor(private apiService: AdminapiavancementprojetService,
    private apiService2: AdminapiuserService,
    private apiService3: AdminapiprojetService,
    private router: Router
    ) 
    { 
    this.readavancementprojet();
    this.readuser();
    this.readprojet();
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      // Initialisation de DataTables avec la fonctionnalité de recherche et de pagination
      $('#avancementprojet-list-table').DataTable({
        searching: true, // Activer la recherche
        lengthMenu: [5, 10, 50, 100], // Nombre d'éléments par page
        pageLength: 5 // Nombre d'éléments affichés par défaut par page
        // Autres options de configuration de DataTables, le cas échéant
      });
    });
  }


  ngOnInit() {}
  readavancementprojet(){
    this.apiService.getAvancementprojets().subscribe((data) => {
     this.avancementprojet = data;
    })    
  }

  readuser(){
    this.apiService2.getUsers().subscribe((data) => {
     this.user = data;
    })    
  }
  readprojet(){
    this.apiService3.getProjets().subscribe((data) => {
     this.user = data;
    })    
  }

  removeavancementprojet(projetId: string) {
    if (window.confirm('Are you sure?')) {
      // Trouver l'index de l'utilisateur dans le tableau avancementprojet
      const index = this.avancementprojet.findIndex((projetItem) => projetItem._id === projetId);
      if (index !== -1) {
        // Supprimer l'utilisateur de la base de données en utilisant l'ID de l'utilisateur
        this.apiService.deleteAvancementprojet(projetId).subscribe(
          () => {
            // Utiliser la méthode splice pour supprimer l'utilisateur du tableau
            this.avancementprojet.splice(index, 1);
            // Rediriger vers la page adminlistprojet après la suppression
            this.router.navigateByUrl('/adminlistavancementprojet');
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
    let DATA: any = document.getElementById('avancementprojet-list-table');
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
import { Component, OnInit } from '@angular/core';
import { AdminapiavancementprojetService } from './../../service/adminapiavancementprojet.service';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { AdminapiprojetService } from './../../service/adminapiprojet.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-adminlistavancementprojet',
  templateUrl: './adminlistavancementprojet.component.html',
  styleUrls: ['./adminlistavancementprojet.component.css']
})
export class AdminlistavancementprojetComponent implements OnInit {
  
  avancementprojet:any = [];
  user:any = [];
  projet:any = [];
  constructor(private apiService: AdminapiavancementprojetService,private apiService2: AdminapiuserService,private apiService3: AdminapiprojetService) { 
    this.readavancementprojet();
    this.readuser();
    this.readprojet();
  }
  ngOnInit() {}
  readavancementprojet(){
    this.apiService.getAvancementprojets().subscribe((data) => {
     this.avancementprojet = data;
    })    
  }

  readuser(){
    this.apiService2.getUsers().subscribe((data) => {
     this.user = data;
    })    
  }
  readprojet(){
    this.apiService3.getProjets().subscribe((data) => {
     this.user = data;
    })    
  }


  removeavancementprojet(avancementprojet, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteAvancementprojet(avancementprojet._id).subscribe((data) => {
          this.avancementprojet.splice(index, 1);
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