

import { Router } from '@angular/router';
import { AdminapiavancementtacheService } from './../../service/adminapiavancementtache.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dgcreateavancementtache',
  templateUrl: './dgcreateavancementtache.component.html',
  styleUrls: ['./dgcreateavancementtache.component.css']
})
export class DgcreateavancementtacheComponent implements OnInit {

  
  submitted = false;
  avancementtacheForm: FormGroup;
  avancementtacheProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiavancementtacheService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.avancementtacheForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idtache: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.avancementtacheForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.avancementtacheForm.valid) {
      return false;
    } else {
      return this.apiService.createAvancementtache(this.avancementtacheForm.value).subscribe({
        complete: () => {
          console.log('avancementtache successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/dglistavancementtache'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}