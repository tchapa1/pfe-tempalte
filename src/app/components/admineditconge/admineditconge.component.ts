import { Conge } from './../../model/conge';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapicongeService } from './../../service/adminapiconge.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admineditconge',
  templateUrl: './admineditconge.component.html',
  styleUrls: ['./admineditconge.component.css']
})
export class AdmineditcongeComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  congeData: Conge;

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapicongeService,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getconge(id);

    // Initialize the editForm with empty values (you can remove this if not needed)
    this.editForm = this.fb.group({
      idemploye: [''],
      description: [''],
      datedebut: [''],
      datefin: [''],
      etat: [''],
      soldeconge: [''],
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getconge(id) {
    this.apiService.getConge(id).subscribe((data: Conge) => {
      this.congeData = data; // Store the retrieved congé data
      this.editForm.patchValue({
        idemploye: data.idemploye,
        description: data.description,
        datedebut: data.datedebut,
        datefin: data.datefin,
        etat: data.etat,
        soldeconge: data.soldeconge,
      });
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateConge(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistconge');
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

/*
import { Conge } from './../../model/conge';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapicongeService } from './../../service/adminapiconge.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-admineditconge',
  templateUrl: './admineditconge.component.html',
  styleUrls: ['./admineditconge.component.css']
})
export class AdmineditcongeComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  congeData: Conge[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapicongeService,
    private router: Router
  ) {}


  ngOnInit() {
    this.updateconge();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getconge(id);
    this.editForm = this.fb.group({
      idemploye: [''],
      description: [''],
      datedebut: [''],
      datefin: [''],
      etat: [''],
      soldeconge: [''],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getconge(id) {
    this.apiService.getConge(id).subscribe((data) => {
      this.editForm.setValue({
        idemploye: data['idemploye'],
        description: data['description'],
        datedebut: data['datedebut'],
        datefin: data['datefin'],
        etat: data['etat'],
        soldeconge: data['soldeconge'],
      });
    });
  }

  
  updateconge() {
    this.editForm = this.fb.group({
      idemploye: [''],
      description: [''],
      datedebut: [''],
      datefin: [''],
      etat: [''],
      soldeconge: [''],
    });
  }


  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateConge(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistconge');
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
*/