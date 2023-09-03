import { Projet } from './../../model/projet';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiprojetService } from './../../service/adminapiprojet.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapigroupeService } from 'src/app/service/adminapigroupe.service';


@Component({
  selector: 'app-admineditprojet',
  templateUrl: './admineditprojet.component.html',
  styleUrls: ['./admineditprojet.component.css']
})
export class AdmineditprojetComponent implements OnInit {

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
    this.updateprojet();
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
      nom: [''],
      description: [''],
      datecreation: [''],
      datefin: [''],
      etat: [''],
      idgroupe: [''],
      nbheures: [''],

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


  updateprojet() {
    this.projetForm = this.fb.group({
      nom: [''],
      description: [''],
      datecreation: [''],
      datefin: [''],
      etat: [''],
      idgroupe: [''],
      nbheures: [''],
    });
  }

  
  onSubmit() {
    this.submitted = true;
    if (!this.projetForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateProjet(id, this.projetForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistprojet');
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