
import { AdminapitacheService } from './../../service/adminapitache.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AfterViewInit, Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { switchMap } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-adminlisttache',
  templateUrl: './adminlisttache.component.html',
  styleUrls: ['./adminlisttache.component.css']
})
export class AdminlisttacheComponent implements OnInit , AfterViewInit{

  tache:any = [];
  tachefind:any = [];
  tachefinded:any = [];
  

  findformForm: FormGroup;
  submitted = false;


  
  constructor(
    private apiService: AdminapitacheService,
    private router: Router,
    public fb: FormBuilder,
    private ngZone: NgZone
    )
   { 
    this.readtache();
    this.mainForm();
  }


  ngOnInit() {}


  ngAfterViewInit() {
    $(document).ready(function() {
      // Initialisation de DataTables avec la fonctionnalité de recherche et de pagination
      $('#tache-list-table').DataTable({
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




  readtache(){
    this.apiService.getTaches().subscribe((data) => {
     this.tache = data;
    })    
  }


  removetache(tacheId: string) {
    if (window.confirm('Are you sure?')) {
      // Trouver l'index de l'utilisateur dans le tableau tache
      const index = this.tache.findIndex((tacheItem) => tacheItem._id === tacheId);
      if (index !== -1) {
        // Supprimer l'utilisateur de la base de données en utilisant l'ID de l'utilisateur
        this.apiService.deleteTache(tacheId).subscribe(
          () => {
            // Utiliser la méthode splice pour supprimer l'utilisateur du tableau
            this.tache.splice(index, 1);
            // Rediriger vers la page adminlisttache après la suppression
            this.router.navigateByUrl('/adminlisttache');
          },
          (error) => {
            // Gérer les erreurs ici, si nécessaire
            console.log(error);
          }
        );
      }
    }
  }

  
  
  



  disableTache(tacheItem: any) {
    // Code pour désactiver l'utilisateur ici
  }


  

  public openPDF(): void {
    let DATA: any = document.getElementById('tache-list-table');
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
      return this.apiService.createTache(this.findformForm.value).subscribe({
        complete: () => {
          console.log('Tache successfully created!'),
          // Rediriger vers la page /adminlisttache après l'ajout d'un utilisateur
          this.ngZone.run(() => this.router.navigateByUrl('/adminlisttache'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }




}







/*
import { Component, OnInit } from '@angular/core';
import { AdminapitacheService } from './../../service/adminapitache.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-adminlisttache',
  templateUrl: './adminlisttache.component.html',
  styleUrls: ['./adminlisttache.component.css']
})
export class AdminlisttacheComponent implements OnInit {

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  tache:any = [];
  constructor(private apiService: AdminapitacheService) { 
    this.readtache();
  }
  ngOnInit() {}
  readtache(){
    this.apiService.getTaches().subscribe((data) => {
     this.tache = data;
    })    
  }


  onTableDataChange(event: any) {
    this.page = event;
    this.readtache();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.readtache();
  }



  removetache(tache, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteTache(tache._id).subscribe((data) => {
          this.tache.splice(index, 1);
        }
      )    
    }
  }

  public openPDF(): void {
  let DATA: any = document.getElementById('tache-list-table');
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

