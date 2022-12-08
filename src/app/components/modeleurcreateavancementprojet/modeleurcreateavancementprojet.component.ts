



import { Router } from '@angular/router';
import { AdminapiavancementprojetService } from './../../service/adminapiavancementprojet.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



import { AdminapiprojetService } from './../../service/adminapiprojet.service';

@Component({
  selector: 'app-modeleurcreateavancementprojet',
  templateUrl: './modeleurcreateavancementprojet.component.html',
  styleUrls: ['./modeleurcreateavancementprojet.component.css']
})
export class ModeleurcreateavancementprojetComponent implements OnInit {

  user:any = [];
  submitted = false;
  avancementprojetForm: FormGroup;
  avancementprojetProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiavancementprojetService,
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
    this.avancementprojetForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idprojet: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.avancementprojetForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.avancementprojetForm.valid) {
      return false;
    } else {
      return this.apiService.createAvancementprojet(this.avancementprojetForm.value).subscribe({
        complete: () => {
          console.log('avancementprojet successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistavancementprojet'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}