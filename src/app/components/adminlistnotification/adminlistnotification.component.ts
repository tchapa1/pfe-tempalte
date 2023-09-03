


import { Component, OnInit } from '@angular/core';
import { AdminapinotificationService } from './../../service/adminapinotification.service';


import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

declare var $: any;

@Component({
  selector: 'app-adminlistnotification',
  templateUrl: './adminlistnotification.component.html',
  styleUrls: ['./adminlistnotification.component.css']
})
export class AdminlistnotificationComponent implements OnInit {
  

  ngOnInit() {}
  readnotif(){
    this.apiService.getNotifications().subscribe((data) => {
     this.notif = data;
    })    
  }

  notif:any = [];
  constructor(private apiService: AdminapinotificationService) { 
    this.readnotif();
  }

  ngAfterViewInit() {
    $(document).ready(function() {
      // Initialisation de DataTables avec la fonctionnalité de recherche et de pagination
      $('#notif-list-table').DataTable({
        searching: true, // Activer la recherche
        lengthMenu: [10, 50, 100], // Nombre d'éléments par page
        pageLength: 10 // Nombre d'éléments affichés par défaut par page
        // Autres options de configuration de DataTables, le cas échéant
      });
    });
  }


  public openPDF(): void {
  let DATA: any = document.getElementById('notif-list-table');
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