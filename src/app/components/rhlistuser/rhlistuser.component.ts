





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

  absenceForm: FormGroup;
  
  findformForm: FormGroup;
  submitted = false;
  
  user:any = [];
  constructor(private apiService: AdminapiuserService,    private router: Router,
    private ngZone: NgZone,
     private apiService1: AdminapiuserService,
    public fb: FormBuilder,
    
    ) { 
      this.mainForm();
    this.readuser();
  }

  
  mainForm() {
    this.absenceForm = this.fb.group({
      email: ['', [Validators.required]],
      role: ['', [Validators.required]],

    });
  }



  ngOnInit() {}
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

  // Getter to access form control
  get myForm() {
    return this.absenceForm.controls;
  }

  onSubmitssss() {


        this.apiService.finduser(this.absenceForm.value).subscribe((data) => {
          this.user = data;

        })  
  }






}