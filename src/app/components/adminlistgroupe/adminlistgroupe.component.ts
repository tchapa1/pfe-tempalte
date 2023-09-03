
import { AdminapigroupeService } from './../../service/adminapigroupe.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AfterViewInit, Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { switchMap } from 'rxjs/operators';

declare var $: any;


@Component({
  selector: 'app-adminlistgroupe',
  templateUrl: './adminlistgroupe.component.html',
  styleUrls: ['./adminlistgroupe.component.css']
})
export class AdminlistgroupeComponent implements OnInit, AfterViewInit {


  groupe: any = [];
  private router: Router;


  constructor(
    private apiService: AdminapigroupeService
  )
   {
    this.readgroupe();
  }


  ngOnInit() { }


  
  readgroupe() {
    this.apiService.getGroupes().subscribe((data) => {
      this.groupe = data;
    })
  }

  ngAfterViewInit() {
    $(document).ready(function() {
      // Initialisation de DataTables avec la fonctionnalité de recherche et de pagination
      $('#groupe-list-table').DataTable({
        searching: true, // Activer la recherche
        lengthMenu: [5, 10, 50, 100], // Nombre d'éléments par page
        pageLength: 5 // Nombre d'éléments affichés par défaut par page
        // Autres options de configuration de DataTables, le cas échéant
      });
    });
  }


  public openPDF(): void {
    let DATA: any = document.getElementById('groupe-list-table');
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

  removegroupe(groupeId: string) {
    if (window.confirm('Are you sure?')) {
      // Trouver l'index de l'utilisateur dans le tableau groupe
      const index = this.groupe.findIndex((groupeItem) => groupeItem._id === groupeId);
      if (index !== -1) {
        // Supprimer l'utilisateur de la base de données en utilisant l'ID de l'utilisateur
        this.apiService.deleteGroupe(groupeId).subscribe(
          () => {
            // Utiliser la méthode splice pour supprimer l'utilisateur du tableau
            this.groupe.splice(index, 1);
            // Rediriger vers la page adminlistgroupe après la suppression
            this.router.navigateByUrl('/adminlistgroupe');
          },
          (error) => {
            // Gérer les erreurs ici, si nécessaire
            console.log(error);
          }
        );
      }
    }
  }







}


/*
import { Component, OnInit } from '@angular/core';
import { AdminapigroupeService } from './../../service/adminapigroupe.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-adminlistgroupe',
  templateUrl: './adminlistgroupe.component.html',
  styleUrls: ['./adminlistgroupe.component.css']
})
export class AdminlistgroupeComponent implements OnInit {
  

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];



  
  groupe:any = [];
  constructor(private apiService: AdminapigroupeService) { 
    this.readgroupe();
  }
  ngOnInit() {}
  readgroupe(){
    this.apiService.getGroupes().subscribe((data) => {
     this.groupe = data;
    })    
  }
  

  onTableDataChange(event: any) {
    this.page = event;
    this.readgroupe();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.readgroupe();
  }



  removegroupe(groupe, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteGroupe(groupe._id).subscribe((data) => {
          this.groupe.splice(index, 1);
        }
      )    
    }
  }

  public openPDF(): void {
  let DATA: any = document.getElementById('groupe-list-table');
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