



import { Router } from '@angular/router';
import { AdminapiprojetService } from './../../service/adminapiprojet.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-modeleurcreatepost',
  templateUrl: './modeleurcreatepost.component.html',
  styleUrls: ['./modeleurcreatepost.component.css']
})
export class ModeleurcreatepostComponent implements OnInit {

  
  submitted = false;
  projetForm: FormGroup;
  projetProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiprojetService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.projetForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      etat: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.projetForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.projetForm.valid) {
      return false;
    } else {
      return this.apiService.createProjet(this.projetForm.value).subscribe({
        complete: () => {
          console.log('projet successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/modeleurlistprojet'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}