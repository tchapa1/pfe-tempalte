import { Component, OnInit } from '@angular/core';
import { AdminapiprojetService } from './../../service/adminapiprojet.service';
import { AdminapigroupeService } from 'src/app/service/adminapigroupe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from './../../model/projet';

@Component({
  selector: 'app-admindetailprojet',
  templateUrl: './admindetailprojet.component.html',
  styleUrls: ['./admindetailprojet.component.css']
})
export class AdmindetailprojetComponent implements OnInit {

  submitted = false;
  projetForm: FormGroup;
  projetData: Projet[];
  groupe: any = [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private apiService: AdminapiprojetService,
    private apiService1: AdminapigroupeService
  ) {
    this.mainForm();
    this.readgroupe();
  }

  readgroupe() {
    this.apiService1.getGroupes().subscribe((data) => {
      this.groupe = data;
    })
  }

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getprojet(id);
    this.projetForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      idgroupe: ['', [Validators.required]],
      nbheures: ['', [Validators.required]],
    });
  }

  // Getter to access form control
  get myForm() {
    return this.projetForm.controls;
  }

  mainForm() {
    this.projetForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      idgroupe: ['', [Validators.required]],
      nbheures: ['', [Validators.required]],
    });
  }

  getprojet(id) {
    this.apiService.getProjet(id).subscribe((data) => {
      this.projetForm.setValue({
        nom: data['nom'],
        description: data['description'],
        datecreation: data['datecreation'],
        datefin: data['datecreation'],
        etat: data['etat'],
        idgroupe: data['idgroupe'],
        nbheures: data['nbheures'],
      });
    });
  }
 

  groupeNom(id: any): string {
    const groupe = this.groupe.find((g) => g._id === id);
    return groupe ? groupe.nom : '';
  }




}











/*

import { Projet } from './../../model/projet';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiprojetService } from './../../service/adminapiprojet.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapigroupeService } from 'src/app/service/adminapigroupe.service';


@Component({
  selector: 'app-admindetailprojet',
  templateUrl: './admindetailprojet.component.html',
  styleUrls: ['./admindetailprojet.component.css']
})
export class AdmindetailprojetComponent implements OnInit {

  submitted = false;
  projetForm: FormGroup;
  projetData: Projet[];
  groupe: any = [];


  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private apiService: AdminapiprojetService,
    private apiService1: AdminapigroupeService
  ) {
    this.mainForm();
    this.readgroupe();
  }

  
  readgroupe() {
    this.apiService1.getGroupes().subscribe((data) => {
      this.groupe = data;
    })
  }


  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getprojet(id);
    this.projetForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      idgroupe: ['', [Validators.required]],
      nbheures: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.projetForm.controls;
  }

  mainForm() {
    this.projetForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      idgroupe: ['', [Validators.required]],
      nbheures: ['', [Validators.required]],

    });
  }


  getprojet(id) {
    this.apiService.getProjet(id).subscribe((data) => {
      this.projetForm.setValue({
        nom: data['nom'],
        description: data['description'],
        datecreation: data['datecreation'],
        datefin: data['datecreation'],
        etat: data['etat'],
        idgroupe: data['idgroupe'],
        nbheures: data['nbheures'],
      });
    });
  }
}
*/
