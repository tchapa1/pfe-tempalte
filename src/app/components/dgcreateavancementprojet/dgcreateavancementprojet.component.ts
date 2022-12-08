



import { Router } from '@angular/router';
import { AdminapiavancementprojetService } from './../../service/adminapiavancementprojet.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dgcreateavancementprojet',
  templateUrl: './dgcreateavancementprojet.component.html',
  styleUrls: ['./dgcreateavancementprojet.component.css']
})
export class DgcreateavancementprojetComponent implements OnInit {

  
  submitted = false;
  avancementprojetForm: FormGroup;
  avancementprojetProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiavancementprojetService
  ) {
    this.mainForm();
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
            this.ngZone.run(() => this.router.navigateByUrl('/dglistavancementprojet'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}