


import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapitacheService } from './../../service/adminapitache.service';
import { AdminapiprojetService } from './../../service/adminapiprojet.service';
import { Avancementtache } from './../../model/avancementtache';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiavancementtacheService } from './../../service/adminapiavancementtache.service';



@Component({
  selector: 'app-admineditavancementtache',
  templateUrl: './admineditavancementtache.component.html',
  styleUrls: ['./admineditavancementtache.component.css']
})
export class AdmineditavancementtacheComponent implements OnInit {


  tache:any = [];
  projet:any = [];
  submitted = false;
  editForm: FormGroup;
  avancementtacheProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  avancementtacheData: Avancementtache[];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiavancementtacheService,
    private apiService1: AdminapitacheService,
    private apiService2: AdminapiprojetService,
    private actRoute: ActivatedRoute,
  ) {
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
    


  ngOnInit() {
    this.updateavancementtache();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getavancementtache(id);
    this.editForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idtache: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
    });
  }



  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }


  getavancementtache(id) {
    this.apiService.getAvancementtache(id).subscribe((data) => {
      this.editForm.setValue({
        titre: data['titre'],
        description: data['description'],
        idtache: data['idtache'],
        datecreation: data['datecreation'],

      });
    });
  }


  updateavancementtache() {
    this.editForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idtache: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
    });
  }


  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateAvancementtache(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistavancementtache');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}
