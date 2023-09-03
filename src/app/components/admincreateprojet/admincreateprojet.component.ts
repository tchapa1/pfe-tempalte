


import { Router } from '@angular/router';
import { AdminapiprojetService } from './../../service/adminapiprojet.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapigroupeService } from 'src/app/service/adminapigroupe.service';



@Component({
  selector: 'app-admincreateprojet',
  templateUrl: './admincreateprojet.component.html',
  styleUrls: ['./admincreateprojet.component.css']
})
export class AdmincreateprojetComponent implements OnInit {

  
  submitted = false;
  projetForm: FormGroup;
  groupe: any = [];
 


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiprojetService,
    private apiService1: AdminapigroupeService
  ) {
    this.mainForm();
    this.readgroupe();
  }


  ngOnInit() {}

  
  mainForm() {
    this.projetForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: 'En cours',
      idgroupe: ['', [Validators.required]],
      nbheures: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.projetForm.controls;
  }

  readgroupe() {
    this.apiService1.getGroupes().subscribe((data) => {
      this.groupe = data;
    })
  }


  onSubmit() {
    this.submitted = true;
    if (!this.projetForm.valid) {
      return false;
    } else {
      return this.apiService.createProjet(this.projetForm.value).subscribe({
        complete: () => {
          console.log('projet successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistprojet'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }

  
}