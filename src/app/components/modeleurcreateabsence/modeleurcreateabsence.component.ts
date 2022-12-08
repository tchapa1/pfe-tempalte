


import { Router } from '@angular/router';
import { AdminapiabsenceService } from './../../service/adminapiabsence.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-modeleurcreateabsence',
  templateUrl: './modeleurcreateabsence.component.html',
  styleUrls: ['./modeleurcreateabsence.component.css']
})
export class ModeleurcreateabsenceComponent implements OnInit {

  
  submitted = false;
  absenceForm: FormGroup;
  absenceProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiabsenceService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
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
            this.ngZone.run(() => this.router.navigateByUrl('/modeleurlistabsence'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}