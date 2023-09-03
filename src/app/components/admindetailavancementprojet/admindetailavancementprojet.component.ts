




import { Avancementprojet } from './../../model/avancementprojet';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiavancementprojetService } from './../../service/adminapiavancementprojet.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapiprojetService } from './../../service/adminapiprojet.service';
@Component({
  selector: 'app-admindetailavancementprojet',
  templateUrl: './admindetailavancementprojet.component.html',
  styleUrls: ['./admindetailavancementprojet.component.css']
})
export class AdmindetailavancementprojetComponent implements OnInit {

  submitted = false;
  detailForm: FormGroup;
  avancementprojetData: Avancementprojet[];

  projet:any = [];
  
  avancementprojetProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiavancementprojetService,
    private apiService2: AdminapiprojetService,
    private router: Router
  ) {}
  ngOnInit() {
  
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getavancementprojet(id);
    this.projet = this.apiService2.getProjet(id);
    this.detailForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idprojet: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.detailForm.controls;
  }
  getavancementprojet(id) {
    this.apiService.getAvancementprojet(id).subscribe((data) => {
      this.detailForm.setValue({
        titre: data['titre'],
        description: data['description'],
        idprojet: data['idprojet'],
        datecreation: data['datecreation'],
      });
    });
  }

}