import { AfterViewInit, Component, OnInit, NgZone } from '@angular/core';
import { AdminapiavancementtacheService } from './../../service/adminapiavancementtache.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AdminapitacheService } from 'src/app/service/adminapitache.service';

declare var $: any;


@Component({
  selector: 'app-adminlistavancementtache',
  templateUrl: './adminlistavancementtache.component.html',
  styleUrls: ['./adminlistavancementtache.component.css']
})


export class AdminlistavancementtacheComponent implements OnInit, AfterViewInit {


  avancementtache:any = [];
  tache:any = [];

  constructor(
    private apiService: AdminapiavancementtacheService,
    private apiService1: AdminapitacheService,
    private router: Router
    )
     { 
    this.readavancementtache();
  }


  ngOnInit() {}


  readavancementtache(){
    this.apiService.getAvancementtaches().subscribe((data) => {
     this.avancementtache = data;
    })    
  }

readprojet(){
this.apiService1.getTaches().subscribe((data) => {
 this.tache = data;
})    
}

  ngAfterViewInit() {
    $(document).ready(function () {
      // Initialisation de DataTables avec la fonctionnalité de recherche et de pagination
      $('#avancementtache-list-table').DataTable({
        searching: true, // Activer la recherche
        lengthMenu: [5, 10, 50, 100], // Nombre d'éléments par page
        pageLength: 5 // Nombre d'éléments affichés par défaut par page
        // Autres options de configuration de DataTables, le cas échéant
      });
    });
  }

  removeavancementtache(tacheId: string) {
    if (window.confirm('Are you sure?')) {
      // Trouver l'index de l'avancement tache dans le tableau avancementtache
      const index = this.avancementtache.findIndex((tacheItem) => tacheItem._id === tacheId);
      if (index !== -1) {
        // Supprimer l'avancement tache de la base de données en utilisant l'ID de l'avancement tache
        this.apiService.deleteAvancementtache(tacheId).subscribe(
          () => {
            // Utiliser la méthode splice pour supprimer l'avancement tache du tableau
            this.avancementtache.splice(index, 1);
            // Rediriger vers la page adminlisttache après la suppression
            this.router.navigateByUrl('/adminlistavancementtache');
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
    let DATA: any = document.getElementById('avancementtache-list-table');
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
import { AdminapiavancementtacheService } from './../../service/adminapiavancementtache.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-adminlistavancementtache',
  templateUrl: './adminlistavancementtache.component.html',
  styleUrls: ['./adminlistavancementtache.component.css']
})
export class AdminlistavancementtacheComponent implements OnInit {
  
  avancementtache:any = [];
  constructor(private apiService: AdminapiavancementtacheService) { 
    this.readavancementtache();
  }
  ngOnInit() {}
  readavancementtache(){
    this.apiService.getAvancementtaches().subscribe((data) => {
     this.avancementtache = data;
    })    
  }
  removeavancementtache(avancementtache, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteAvancementtache(avancementtache._id).subscribe((data) => {
          this.avancementtache.splice(index, 1);
        }
      )    
    }
  }


  public openPDF(): void {
  let DATA: any = document.getElementById('avancementtache-list-table');
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