
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rhlistuser',
  templateUrl: './rhlistuser.component.html',
  styleUrls: ['./rhlistuser.component.css']
})
export class RhlistuserComponent implements OnInit {
  

    POSTS: any;
    page: number = 1;
    count: number = 0;
    tableSize: number = 7;
    tableSizes: any = [3, 6, 9, 12];
  
  
  
    findformForm: FormGroup;
    submitted = false;
    
    user:any = [];
  
    userfind:any = [];
  
    userfinded:any = [];
    constructor(private apiService: AdminapiuserService,    private router: Router,public fb: FormBuilder,
      private ngZone: NgZone) { 
      this.readuser();
      this.mainForm();
    }
    ngOnInit() {}
  
    mainForm() {
      this.findformForm = this.fb.group({
        email: ['', [Validators.required]],
        role: ['', [Validators.required]],
        nom: ['', [Validators.required]],
        prenom: ['', [Validators.required]],
  
  
      });
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
  
  
  
    // Getter to access form control
    get myForm() {
      return this.findformForm.controls;
    }
  
  
    readuser(){
      this.apiService.getUsers().subscribe((data) => {
       this.user = data;
      })    
    }
    removeuser(user, index) {
      if(window.confirm('Are you sure?')) {
          this.apiService.deleteUser(user._id).subscribe((data) => {
            this.user.splice(index, 1);
          }
        )    
      }
    }
  
  
  
  
    onSubmitssssssss(){
  
    
      let creatorId = []
      for (let i in this.user) {
        if(this.findformForm.value.email==this.user[i].email)
        {
             this.userfind.push(this.user[i])
        }
        if(this.findformForm.value.role==this.user[i].role)
        {
             this.userfind.push(this.user[i])
        }
        if(this.findformForm.value.nom==this.user[i].nom)
        {
             this.userfind.push(this.user[i])
        }
        if(this.findformForm.value.prenom==this.user[i].prenom)
        {
             this.userfind.push(this.user[i])
        }
  
      }
      this.user =this.userfind;
  
  
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