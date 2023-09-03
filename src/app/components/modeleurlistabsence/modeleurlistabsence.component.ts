


import { Component, OnInit } from '@angular/core';
import { AdminapiabsenceService } from './../../service/adminapiabsence.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-modeleurlistabsence',
  templateUrl: './modeleurlistabsence.component.html',
  styleUrls: ['./modeleurlistabsence.component.css']
})
export class ModeleurlistabsenceComponent implements OnInit {
  
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];



  
  absence:any = [];
  constructor(private apiService: AdminapiabsenceService) { 
    this.readabsence();
  }
  ngOnInit() {}
  readabsence(){
    this.apiService.getAbsences().subscribe((data) => {
     this.absence = data;
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