import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiaffectationgroupeService } from './../../service/apiaffectationgroupe.service';
import { AdminapiuserService } from 'src/app/service/adminapiuser.service';
import { AdminapigroupeService } from 'src/app/service/adminapigroupe.service';

@Component({
  selector: 'app-editaffectationgroupe',
  templateUrl: './editaffectationgroupe.component.html',
  styleUrls: ['./editaffectationgroupe.component.css']
})
export class EditaffectationgroupeComponent implements OnInit {
  user: any; 
  groupe:  any; 
  affectationId: any;
  affectationData: any;
  editForm: FormGroup;
  submitted = false;

  constructor(
    private apiService: ApiaffectationgroupeService,
    private apiService1: AdminapiuserService,
    private apiservice2: AdminapigroupeService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.affectationId = params.get('id');
      this.loadAffectationData();
    });

    this.updateForm();
    this.loadUsers();
    this.loadGroupes();
  }

  loadUsers() {
    this.apiService1.getUsers().subscribe(data => {
      this.user = data;
    });
  }

  loadGroupes() {
    this.apiservice2.getGroupes().subscribe(data => {
      this.groupe = data;
    });
  }

  loadAffectationData() {
    this.apiService.getaffectationgroupe(this.affectationId).subscribe(data => {
      this.affectationData = data;
      this.editForm.patchValue({
        idgroupe: this.affectationData.idgroupe,
        idemploye: this.affectationData.idemploye
      });
    });
  }

  updateForm() {
    this.editForm = this.fb.group({
      idemploye: ['', Validators.required],
      idgroupe: ['', Validators.required],
    });
  }

  updateAffectation() {
    this.apiService.updateaffectationgroupe(this.affectationId, this.editForm.value).subscribe(() => {
      // Faites quelque chose après la mise à jour (par exemple, rediriger vers une autre page)
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.apiService.updateaffectationgroupe(this.affectationId, this.editForm.value).subscribe({
        next: () => {
          console.log('Affectation successfully updated!');
          this.router.navigateByUrl('/listaffectationgroupe');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
