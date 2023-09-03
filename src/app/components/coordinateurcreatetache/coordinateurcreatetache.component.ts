


import { Router } from '@angular/router';
import { AdminapitacheService } from './../../service/adminapitache.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-coordinateurcreatetache',
  templateUrl: './coordinateurcreatetache.component.html',
  styleUrls: ['./coordinateurcreatetache.component.css']
})
export class CoordinateurcreatetacheComponent implements OnInit {

  
  submitted = false;
  tacheForm: FormGroup;
  tacheProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapitacheService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.tacheForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      idprojet: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      idemploye: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.tacheForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.tacheForm.valid) {
      return false;
    } else {
      return this.apiService.createTache(this.tacheForm.value).subscribe({
        complete: () => {
          console.log('tache successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/coordinateurlisttache'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}