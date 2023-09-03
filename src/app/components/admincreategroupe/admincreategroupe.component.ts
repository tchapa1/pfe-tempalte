



import { Router } from '@angular/router';
import { AdminapigroupeService } from './../../service/adminapigroupe.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-admincreategroupe',
  templateUrl: './admincreategroupe.component.html',
  styleUrls: ['./admincreategroupe.component.css']
})
export class AdmincreategroupeComponent implements OnInit {

  
  submitted = false;
  groupeForm: FormGroup;
  public d: Date = new Date(); 


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapigroupeService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.groupeForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      etat: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.groupeForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.groupeForm.valid) {
      return false;
    } else {
      return this.apiService.createGroupe(this.groupeForm.value).subscribe({
        complete: () => {
          console.log('groupe successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistgroupe'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}