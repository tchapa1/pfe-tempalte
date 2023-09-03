



import { Router } from '@angular/router';
import { AdminapitacheService } from './../../service/adminapitache.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapiprojetService } from './../../service/adminapiprojet.service';

@Component({
  selector: 'app-modeleurcreatetache',
  templateUrl: './modeleurcreatetache.component.html',
  styleUrls: ['./modeleurcreatetache.component.css']
})
export class ModeleurcreatetacheComponent implements OnInit {

  user:any = [];

  submitted = false;
  tacheForm: FormGroup;
  tacheProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapitacheService,
    private apiService1: AdminapiprojetService

  ) {
    this.mainForm();
    this.readprojet();
  }

  readprojet(){
    this.apiService1.getProjets().subscribe((data) => {
     this.user = data;
    })    
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
            this.ngZone.run(() => this.router.navigateByUrl('/modeleurlisttache'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}