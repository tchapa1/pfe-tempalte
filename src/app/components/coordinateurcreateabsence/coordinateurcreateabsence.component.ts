


import { Router } from '@angular/router';
import { AdminapiabsenceService } from './../../service/adminapiabsence.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapiuserService } from './../../service/adminapiuser.service';

@Component({
  selector: 'app-coordinateurcreateabsence',
  templateUrl: './coordinateurcreateabsence.component.html',
  styleUrls: ['./coordinateurcreateabsence.component.css']
})
export class CoordinateurcreateabsenceComponent implements OnInit {
  user:any = [];
  
  submitted = false;
  absenceForm: FormGroup;
  absenceProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiabsenceService,
    private apiService1: AdminapiuserService
  ) {
    this.mainForm();
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
      datefin: "",
      etat: "en cours",
      heuredepart: ['', [Validators.required]],
      heureretour: ['', [Validators.required]],

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
            this.ngZone.run(() => this.router.navigateByUrl('/coordinateurlistabsence'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}