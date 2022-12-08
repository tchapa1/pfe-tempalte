



import { Router } from '@angular/router';
import { AdminapiavancementtacheService } from './../../service/adminapiavancementtache.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AdminapitacheService } from './../../service/adminapitache.service';



@Component({
  selector: 'app-modeleurcreateavancementtache',
  templateUrl: './modeleurcreateavancementtache.component.html',
  styleUrls: ['./modeleurcreateavancementtache.component.css']
})
export class ModeleurcreateavancementtacheComponent implements OnInit {

  user:any = [];
  submitted = false;
  avancementtacheForm: FormGroup;
  avancementtacheProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiavancementtacheService,
    private apiService1: AdminapitacheService,
  ) {
    this.mainForm();
    this.readprojet();
  }





readprojet(){
this.apiService1.getTaches().subscribe((data) => {
 this.user = data;
})    
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
            this.ngZone.run(() => this.router.navigateByUrl('/modeleurlistavancementtache'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}