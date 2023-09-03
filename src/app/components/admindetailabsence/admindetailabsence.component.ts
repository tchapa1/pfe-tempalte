

import { Absence } from './../../model/absence';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiabsenceService } from './../../service/adminapiabsence.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admindetailabsence',
  templateUrl: './admindetailabsence.component.html',
  styleUrls: ['./admindetailabsence.component.css']
})
export class AdmindetailabsenceComponent implements OnInit {

  submitted = false;
  detailForm: FormGroup;
  absenceData: Absence[];
  absenceProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiabsenceService,
    private router: Router
  ) {}
  ngOnInit() {
    
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getabsence(id);
    this.detailForm = this.fb.group({
      idemploye: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datedebut: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.detailForm.controls;
  }
  getabsence(id) {
    this.apiService.getAbsence(id).subscribe((data) => {
      this.detailForm.setValue({
        idemploye: data['idemploye'],
        description: data['description'],
        datedebut: data['datedebut'],
        datefin: data['datefin'],
        etat: data['etat'],
      });
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.detailForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateAbsence(id, this.detailForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistabsence');
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
