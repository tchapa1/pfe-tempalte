



import { Groupe } from './../../model/groupe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapigroupeService } from './../../service/adminapigroupe.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ApiaffectationgroupeService } from './../../service/apiaffectationgroupe.service';

@Component({
  selector: 'app-admindetailgroupe',
  templateUrl: './admindetailgroupe.component.html',
  styleUrls: ['./admindetailgroupe.component.css']
})
export class AdmindetailgroupeComponent implements OnInit {

  affectationgroupe:any = [];
  submitted = false;
  detailForm: FormGroup;
  groupeData: Groupe[];
  groupeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapigroupeService,
    private apiService1: ApiaffectationgroupeService,
    private router: Router
  ) {}
  ngOnInit() {

    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getgroupe(id);
    this.getlisteemployeeeee(id);
    this.detailForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      etat: ['', [Validators.required]],
    });
  }


  getlisteemployeeeee(id){
    this.apiService1.getaffectationgroupessssssss(id).subscribe((data) => {
     this.affectationgroupe = data;
    })    
  }



  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.detailForm.controls;
  }
  getgroupe(id) {
    this.apiService.getGroupe(id).subscribe((data) => {
      this.detailForm.setValue({
        nom: data['nom'],
        description: data['description'],
        datecreation: data['datecreation'],
        etat: data['etat'],
      });
    });
  }


}