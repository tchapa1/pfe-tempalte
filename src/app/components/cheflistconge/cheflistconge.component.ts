




import { Component, OnInit } from '@angular/core';
import { AdminapicongeService } from './../../service/adminapiconge.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-cheflistconge',
  templateUrl: './cheflistconge.component.html',
  styleUrls: ['./cheflistconge.component.css']
})
export class CheflistcongeComponent implements OnInit {
  

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];


  
  conge:any = [];
  constructor(private apiService: AdminapicongeService) { 
    this.readconge();
  }
  ngOnInit() {}
  readconge(){
    this.apiService.getConges().subscribe((data) => {
     this.conge = data;
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



  removeconge(conge, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteConge(conge._id).subscribe((data) => {
          this.conge.splice(index, 1);
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