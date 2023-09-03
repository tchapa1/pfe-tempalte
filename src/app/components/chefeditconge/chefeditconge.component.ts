

import { Conge } from './../../model/conge';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapicongeService } from './../../service/adminapiconge.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-chefeditconge',
  templateUrl: './chefeditconge.component.html',
  styleUrls: ['./chefeditconge.component.css']
})
export class ChefeditcongeComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  congeData: Conge[];
  congeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
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
      idemploye: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datedebut: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      soldeconge: ['', [Validators.required]],
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
      idemploye: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datedebut: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      soldeconge: ['', [Validators.required]],
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
            this.router.navigateByUrl('/cheflistconge');
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