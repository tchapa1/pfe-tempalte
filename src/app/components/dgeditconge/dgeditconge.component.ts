



import { Groupe } from './../../model/groupe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapigroupeService } from './../../service/adminapigroupe.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dgeditconge',
  templateUrl: './dgeditconge.component.html',
  styleUrls: ['./dgeditconge.component.css']
})
export class DgeditcongeComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  groupeData: Groupe[];
  groupeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapigroupeService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updategroupe();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getgroupe(id);
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      soldeconge: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getgroupe(id) {
    this.apiService.getGroupe(id).subscribe((data) => {
      this.editForm.setValue({
        nom: data['nom'],
        description: data['description'],
        datecreation: data['datecreation'],
        etat: data['etat'],
        soldeconge: data['soldeconge'],
      });
    });
  }
  updategroupe() {
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
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
        this.apiService.updateGroupe(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/dglistgroupe');
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