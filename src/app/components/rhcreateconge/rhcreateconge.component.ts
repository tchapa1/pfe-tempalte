


import { Router } from '@angular/router';
import { AdminapicongeService } from './../../service/adminapiconge.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapiuserService } from './../../service/adminapiuser.service';


@Component({
  selector: 'app-rhcreateconge',
  templateUrl: './rhcreateconge.component.html',
  styleUrls: ['./rhcreateconge.component.css']
})
export class RhcreatecongeComponent implements OnInit {

  user:any = [];

  submitted = false;
  congeForm: FormGroup;
  congeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapicongeService,
    private apiService1: AdminapiuserService

  ) {
    this.mainForm();
    this.readuser();

  }

  readuser(){
    this.apiService1.getUsers().subscribe((data) => {
     this.user = data;
    })    
  }


  ngOnInit() {}
  mainForm() {
    this.congeForm = this.fb.group({
      idemploye: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datedebut: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.congeForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.congeForm.valid) {
      return false;
    } else {
      return this.apiService.createConge(this.congeForm.value).subscribe({
        complete: () => {
          console.log('conge successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/rhlistconge'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}