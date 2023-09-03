


import { AdminapiuserService } from './../../service/adminapiuser.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cheflistuser',
  templateUrl: './cheflistuser.component.html',
  styleUrls: ['./cheflistuser.component.css']
})
export class CheflistuserComponent implements OnInit {
  


  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];




  findformForm: FormGroup;
  submitted = false;
  
  user:any = [];
  constructor(private apiService: AdminapiuserService,    private router: Router,
    private ngZone: NgZone) { 
    this.readuser();
  }
  ngOnInit() {}
  readuser(){
    this.apiService.getUsers().subscribe((data) => {
     this.user = data;
    })    
  }
  


  onTableDataChange(event: any) {
    this.page = event;
    this.readuser();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.readuser();
  }

  removeuser(user, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteUser(user._id).subscribe((data) => {
          this.user.splice(index, 1);
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