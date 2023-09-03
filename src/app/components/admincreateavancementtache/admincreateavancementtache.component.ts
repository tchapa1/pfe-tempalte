

import { Router } from '@angular/router';
import { AdminapiavancementtacheService } from './../../service/adminapiavancementtache.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapitacheService } from './../../service/adminapitache.service';
import { AdminapiprojetService } from './../../service/adminapiprojet.service';


@Component({
  selector: 'app-admincreateavancementtache',
  templateUrl: './admincreateavancementtache.component.html',
  styleUrls: ['./admincreateavancementtache.component.css']
})
export class AdmincreateavancementtacheComponent implements OnInit {

  tache:any = [];
  projet:any = [];
  submitted = false;
  avancementtacheForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiavancementtacheService,
    private apiService1: AdminapitacheService,
    private apiService2: AdminapiprojetService,
  ) {
    this.mainForm();
    this.readprojet();
    this.readprojetsssss();
  }





readprojet(){
this.apiService1.getTaches().subscribe((data) => {
 this.tache = data;
})    
}



readprojetsssss(){
  this.apiService2.getProjets().subscribe((data) => {
   this.projet = data;
  })    
  }
  
  

  ngOnInit() {}
  mainForm() {
    this.avancementtacheForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idtache: ['', [Validators.required]],
      idprojet: ['', [Validators.required]],
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
            this.ngZone.run(() => this.router.navigateByUrl('/adminlistavancementtache'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}