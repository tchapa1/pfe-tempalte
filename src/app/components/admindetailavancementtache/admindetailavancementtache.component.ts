


import { Avancementtache } from './../../model/avancementtache';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiavancementtacheService } from './../../service/adminapiavancementtache.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-admindetailavancementtache',
  templateUrl: './admindetailavancementtache.component.html',
  styleUrls: ['./admindetailavancementtache.component.css']
})
export class AdmindetailavancementtacheComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  avancementtacheData: Avancementtache[];
  avancementtacheProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiavancementtacheService,
    private router: Router
  ) {}
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