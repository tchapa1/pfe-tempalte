





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


onSubmitss(form: NgForm) {
  this.submitted = true;
  if (!this.findformForm.valid) {
    return false;
  } else {
    const email = form.value.email;
    const role = form.value.role;

      this.apiService.finduser(email,role).subscribe((data) => {
        this.user = data;
       }) 


  }
}





}