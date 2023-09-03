import { Component, OnInit } from '@angular/core';
import { AdminapimessageService } from './../../service/adminapimessage.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-rhlistmessage',
  templateUrl: './rhlistmessage.component.html',
  styleUrls: ['./rhlistmessage.component.css']
})
export class RhlistmessageComponent implements OnInit {


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