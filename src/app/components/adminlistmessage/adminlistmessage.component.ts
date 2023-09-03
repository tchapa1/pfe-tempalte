import { AfterViewInit, Component, OnInit, NgZone } from '@angular/core';
import { AdminapimessageService } from './../../service/adminapimessage.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { AdminapiuserService } from 'src/app/service/adminapiuser.service';

declare var $: any;


@Component({
  selector: 'app-adminlistmessage',
  templateUrl: './adminlistmessage.component.html',
  styleUrls: ['./adminlistmessage.component.css']
})

export class AdminlistmessageComponent implements OnInit , AfterViewInit {

  message:any = [];
  user: any = [];

  
  constructor(
    private apiService: AdminapimessageService,
    private router: Router,
    private apiService2: AdminapiuserService
    )
     { 
    this.readmessage();
    this.readuser();
  }


  ngOnInit() {}

  readuser() {
    this.apiService2.getUsers().subscribe((data) => {
      this.user = data;
    })
  }


  readmessage(){
    this.apiService.getMessages().subscribe((data) => {
     this.message = data;
    })    
  }

  ngAfterViewInit() {
    $(document).ready(function() {
      // Initialisation de DataTables avec la fonctionnalité de recherche et de pagination
      $('#message-list-table').DataTable({
        searching: true, // Activer la recherche
        lengthMenu: [5, 10, 50, 100], // Nombre d'éléments par page
        pageLength: 5 // Nombre d'éléments affichés par défaut par page
        // Autres options de configuration de DataTables, le cas échéant
      });
    });
  }


  removemessage(messageId: string) {
    if (window.confirm('Are you sure?')) {
      // Trouver l'index de l'utilisateur dans le tableau message
      const index = this.message.findIndex((messageItem) => messageItem._id === messageId);
      if (index !== -1) {
        // Supprimer l'utilisateur de la base de données en utilisant l'ID de l'utilisateur
        this.apiService.deleteMessage(messageId).subscribe(
          () => {
            // Utiliser la méthode splice pour supprimer l'utilisateur du tableau
            this.message.splice(index, 1);
            // Rediriger vers la page adminlistmessage après la suppression
            this.router.navigateByUrl('/adminlistmessage');
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
    let DATA: any = document.getElementById('message-list-table');
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
import { AdminapimessageService } from './../../service/adminapimessage.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-adminlistmessage',
  templateUrl: './adminlistmessage.component.html',
  styleUrls: ['./adminlistmessage.component.css']
})
export class AdminlistmessageComponent implements OnInit {
  

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];


  
  message:any = [];
  constructor(private apiService: AdminapimessageService) { 
    this.readmessage();
  }
  ngOnInit() {}
  readmessage(){
    this.apiService.getMessages().subscribe((data) => {
     this.message = data;
    })    
  }
  

  onTableDataChange(event: any) {
    this.page = event;
    this.readmessage();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.readmessage();
  }



  removemessage(message, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteMessage(message._id).subscribe((data) => {
          this.message.splice(index, 1);
        }
      )    
    }
  }

  public openPDF(): void {
  let DATA: any = document.getElementById('message-list-table');
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