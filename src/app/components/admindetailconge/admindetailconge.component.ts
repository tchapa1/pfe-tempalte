


import { Conge } from './../../model/conge';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapicongeService } from './../../service/adminapiconge.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-admindetailconge',
  templateUrl: './admindetailconge.component.html',
  styleUrls: ['./admindetailconge.component.css']
})
export class AdmindetailcongeComponent implements OnInit {

  submitted = false;
  detailForm: FormGroup;
  congeData: Conge[];
  congeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapicongeService,
    private router: Router
  ) {}
  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getconge(id);
    this.detailForm = this.fb.group({
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
    return this.detailForm.controls;
  }
  getconge(id) {
    this.apiService.getConge(id).subscribe((data) => {
      this.detailForm.setValue({
        idemploye: data['idemploye'],
        description: data['description'],
        datedebut: data['datedebut'],
        datefin: data['datefin'],
        etat: data['etat'],
        soldeconge: data['soldeconge'],
      });
    });
  }

}