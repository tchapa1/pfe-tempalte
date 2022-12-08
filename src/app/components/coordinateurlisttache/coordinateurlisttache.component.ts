

import { Component, OnInit } from '@angular/core';
import { AdminapitacheService } from './../../service/adminapitache.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-coordinateurlisttache',
  templateUrl: './coordinateurlisttache.component.html',
  styleUrls: ['./coordinateurlisttache.component.css']
})
export class CoordinateurlisttacheComponent implements OnInit {

  
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
  removetache(tache, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteTache(tache._id).subscribe((data) => {
          this.tache.splice(index, 1);
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