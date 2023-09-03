import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { AdminapigroupeService } from './../../service/adminapigroupe.service';
import { ApiaffectationgroupeService } from './../../service/apiaffectationgroupe.service';

@Component({
  selector: 'app-createaffectationgroupe',
  templateUrl: './createaffectationgroupe.component.html',
  styleUrls: ['./createaffectationgroupe.component.css']
})
export class CreateaffectationgroupeComponent implements OnInit {

  user:any = [];
  submitted = false;
  createForm: FormGroup;
  

  projetForm: FormGroup;

  groupe:any = [];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService1: AdminapiuserService,
    private apiService2: ApiaffectationgroupeService,
    private apiservice3: AdminapigroupeService,
  ) {
    this.mainForm();
    
  }


  
  readuser(){
    this.apiService1.getUsers().subscribe((data) => {
     this.user = data;
    })    
  }
  ngOnInit() {
    this.apiService1.getUsers().subscribe((data) => {
      this.user = data;
     })

     this.apiservice3.getGroupes().subscribe((data) => {
      this.groupe = data;
     })



  }
  mainForm() {
    this.createForm = this.fb.group({
      idemploye: ['', [Validators.required]],
      idgroupe: ['', [Validators.required]],


    });
  }

  // Getter to access form control
  get myForm() {
    return this.createForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return false;
    } else {
      return this.apiService2.createaffectationgroupe(this.createForm.value).subscribe({
        complete: () => {
          console.log('create successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/listaffectationgroupe'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}