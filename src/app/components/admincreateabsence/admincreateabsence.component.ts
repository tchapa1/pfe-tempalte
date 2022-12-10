


import { Router } from '@angular/router';
import { AdminapiabsenceService } from './../../service/adminapiabsence.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AdminapiuserService } from './../../service/adminapiuser.service';



@Component({
  selector: 'app-admincreateabsence',
  templateUrl: './admincreateabsence.component.html',
  styleUrls: ['./admincreateabsence.component.css']
})
export class AdmincreateabsenceComponent implements OnInit {

  user:any = [];
  submitted = false;
  absenceForm: FormGroup;
  absenceProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  projetForm: FormGroup;


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiabsenceService,
    private apiService1: AdminapiuserService
  ) {
    this.mainForm();
    
  }


  
  readuser(){
    this.apiService1.getUsers().subscribe((data) => {
     this.user = data;
    })    
  }
  ngOnInit() {
    this.apiService1.getUsers().subscribe((data) => {
      this.user = data;
     })
  }
  mainForm() {
    this.absenceForm = this.fb.group({
      idemploye: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datedebut: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.absenceForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.absenceForm.valid) {
      return false;
    } else {
      return this.apiService.createAbsence(this.absenceForm.value).subscribe({
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