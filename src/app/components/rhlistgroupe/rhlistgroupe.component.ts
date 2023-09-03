import { Component, OnInit } from '@angular/core';
import { AdminapigroupeService } from './../../service/adminapigroupe.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-rhlistgroupe',
  templateUrl: './rhlistgroupe.component.html',
  styleUrls: ['./rhlistgroupe.component.css']
})
export class RhlistgroupeComponent implements OnInit {
 

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