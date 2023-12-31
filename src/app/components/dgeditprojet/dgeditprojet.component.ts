


import { Projet } from './../../model/projet';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiprojetService } from './../../service/adminapiprojet.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dgeditprojet',
  templateUrl: './dgeditprojet.component.html',
  styleUrls: ['./dgeditprojet.component.css']
})
export class DgeditprojetComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  projetData: Projet[];
  projetProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiprojetService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateprojet();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getprojet(id);
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      idemploye: ['', [Validators.required]],
      nbheures: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getprojet(id) {
    this.apiService.getProjet(id).subscribe((data) => {
      this.editForm.setValue({
        nom: data['nom'],
        description: data['description'],
        datecreation: data['datecreation'],
        etat: data['etat'],
        idemploye: data['idemploye'],
        nbheures: data['nbheures'],
      });
    });
  }
  updateprojet() {
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      idemploye: ['', [Validators.required]],
      nbheures: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateProjet(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/dglistprojet');
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