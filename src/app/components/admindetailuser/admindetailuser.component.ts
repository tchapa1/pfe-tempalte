import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { AuthData } from './../../model/user';



@Component({
  selector: 'app-admindetailuser',
  templateUrl: './admindetailuser.component.html',
  styleUrls: ['./admindetailuser.component.css']
})
export class AdmindetailuserComponent implements OnInit {
  submitted = false;
  detailForm: FormGroup;
  imageSrc: string;
  userData: AuthData[];

  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiuserService
  ) {}

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.initForm();
    this.getUser(id);
  }

  initForm() {
    this.detailForm = this.fb.group({
      nom: [''],
      prenom: [''],
      matricule: [''],
      email: [''],
      departement: [''],
      role: [''],
      pays: [''],
      status: [''],
      password: [''],
      imagePath: [''],
    });
  }

  getUser(id) {
    this.apiService.getUser(id).subscribe((data) => {
      this.detailForm.setValue({
        nom: data['nom'],
        prenom: data['prenom'],
        departement: data['departement'],
        matricule: data['matricule'],
        email: data['email'],
        role: data['role'],
        status: data['status'],
        pays: data['pays'],
        password: data['password'],
        imagePath: data['imagePath'],
      });

      this.imageSrc = `http://localhost:4000/${data['imagePath']}`;
    });
  }

}



/*
import { AuthData } from './../../model/user';
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapiuserService } from './../../service/adminapiuser.service';

@Component({
  selector: 'app-admindetailuser',
  templateUrl: './admindetailuser.component.html',
  styleUrls: ['./admindetailuser.component.css']
})
export class AdmindetailuserComponent implements OnInit {

 
  
  submitted = false;
  detailForm: FormGroup;
  userData: AuthData[];
  userProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  imageSrc: string;

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiuserService,
    private router: Router
  ) {}


  ngOnInit() {
 
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getuser(id);
    this.detailForm = this.fb.group({
      nom: [''],
      prenom: [''],
      matricule: [''],
      email: [''],
      departement: [''],
      role: [''],
      pays: [''],
      status: [''],
      password: [''],
      imagePath: [''],
    });
  }

  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.detailForm.controls;
  }

  getuser(id) {
    this.apiService.getUser(id).subscribe((data) => {
      this.detailForm.setValue({
        nom: data['nom'],
        prenom: data['prenom'],
        departement: data['departement'],
        matricule: data['matricule'],
        email: data['email'],
        role: data['role'],
        status: data['status'],
        pays: data['pays'],
        password: data['password'],
        imagePath: data['imagePath'],
      });
  
      // Mettez à jour le chemin complet de l'image du serveur
      this.imageSrc = `http://localhost:4000/${data['imagePath']}`;
    });
  }



  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string; // Mettre à jour l'URL de la nouvelle image
      };
      reader.readAsDataURL(file);
    }
  }
}


*/