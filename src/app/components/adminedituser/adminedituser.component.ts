




import { AuthData } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { AdminapiuserService } from './../../service/adminapiuser.service';



@Component({
  selector: 'app-adminedituser',
  templateUrl: './adminedituser.component.html',
  styleUrls: ['./adminedituser.component.css']
})
export class AdminedituserComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  userData: AuthData[];
  userProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiuserService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateuser();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getuser(id);
    this.editForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getuser(id) {
    this.apiService.getUser(id).subscribe((data) => {
      this.editForm.setValue({
        email: data['email'],
        password: data['password'],
        role: data['role'],

      });
    });
  }
  updateuser() {
    this.editForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateUser(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/adminlistuser');
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