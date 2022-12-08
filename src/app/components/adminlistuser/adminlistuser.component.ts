





import { AdminapiuserService } from './../../service/adminapiuser.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-adminlistuser',
  templateUrl: './adminlistuser.component.html',
  styleUrls: ['./adminlistuser.component.css']
})
export class AdminlistuserComponent implements OnInit {
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


onSubmitss() {
  this.submitted = true;
  if (!this.findformForm.valid) {
    return false;
  } else {
    return this.apiService.createUser(this.findformForm.value).subscribe({
      complete: () => {
        console.log('absence successfully created!'),
          this.ngZone.run(() => this.router.navigateByUrl('/adminlistabsence'));
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}





}