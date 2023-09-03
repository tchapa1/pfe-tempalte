

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

  selectedImage: File = null;
  imageSrc: string | ArrayBuffer | null = null;

  editForm: FormGroup;
  userData: AuthData[];

  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiuserService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.initEditForm();
    this.fetchUserData(id);
  }

  initEditForm() {
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      matricule: ['', [Validators.required]],
      email: ['', [Validators.required]],
      departement: ['', [Validators.required]],
      role: ['', [Validators.required]],
      pays: ['', [Validators.required]],
      status: ['', [Validators.required]],
      password: ['', [Validators.required]],
      imagePath: ['', [Validators.required]],
    });
  }

  fetchUserData(id: string) {
    this.apiService.getUser(id).subscribe((data) => {
      this.editForm.patchValue(data);
      this.imageSrc = `http://localhost:4000/${data['imagePath']}`;
    });
  }

  onSubmit() {
    if (window.confirm('Êtes-vous sûr de vouloir mettre à jour ces informations?')) {
      const id = this.actRoute.snapshot.paramMap.get('id');
      const formData = new FormData();
      for (const key in this.editForm.value) {
        if (key === 'imagePath' && this.selectedImage) {
          formData.append(key, this.selectedImage, this.selectedImage.name);
        } else {
          formData.append(key, this.editForm.value[key]);
        }
      }
      this.apiService.updateUser(id, formData).subscribe(
        () => {
          this.router.navigateByUrl('/adminlistuser');
          console.log('Contenu mis à jour avec succès !');
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
    this.previewImage(this.selectedImage);
  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc = e.target.result;
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.imageSrc = '/../../assets/images/avatars/01.png';
    }
  }
}






/*
import { AuthData } from './../../model/user';
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapiuserService } from './../../service/adminapiuser.service';

@Component({
  selector: 'app-adminedituser',
  templateUrl: './adminedituser.component.html',
  styleUrls: ['./adminedituser.component.css']
})
export class AdminedituserComponent implements OnInit {
 
  selectedImage: File = null;
  imageSrc: string | ArrayBuffer | null = null;

  
  submitted = false;
  editForm: FormGroup;
  userData: AuthData[];

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
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      matricule: ['', [Validators.required]],
      email: ['', [Validators.required]],
      departement: ['', [Validators.required]],
      role: ['', [Validators.required]],
      pays: ['', [Validators.required]],
      status: ['', [Validators.required]],
      password: ['', [Validators.required]],
      imagePath: ['', [Validators.required]],

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
        nom: data['nom'],
        prenom: data['prenom'],
        matricule: data['matricule'],
        email: data['email'],
        departement: data['departement'],
        role: data['role'],
        pays: data['pays'],
        status: data['status'],
        password: data['password'],
        imagePath: data['imagePath'],
      });
  
      this.imageSrc = `http://localhost:4000/${data['imagePath']}`;
    });
  }

  updateuser() {
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      matricule: ['', [Validators.required]],
      email: ['', [Validators.required]],
      departement: ['', [Validators.required]],
      role: ['', [Validators.required]],
      pays: ['', [Validators.required]],
      status: ['', [Validators.required]],
      password: ['', [Validators.required]],
      imagePath: ['', [Validators.required]],

    });
  }

/*

onSubmit() {
  if (this.editForm.invalid) {
    return;
  }
  if (window.confirm('Êtes-vous sûr de vouloir mettre à jour ces informations?')) {
  const id = this.actRoute.snapshot.paramMap.get('id');
  const formData = new FormData();
  for (const key in this.editForm.value) {
    if (key === 'imagePath') {
      formData.append(key, this.selectedImage, this.selectedImage.name);
    } else {
      formData.append(key, this.editForm.value[key]);
    }
  }
  this.apiService.updateUser(id, formData).subscribe(
    () => {
      this.router.navigateByUrl('/adminlistuser');
      console.log('Contenu mis à jour avec succès !');
    },
    (error) => {
      console.error(error);
    }
  );
  }
}
*/
/*
onSubmit() {
  if (window.confirm('Êtes-vous sûr de vouloir mettre à jour ces informations?')) {
    const id = this.actRoute.snapshot.paramMap.get('id');
    const formData = new FormData();
    for (const key in this.editForm.value) {
      if (key === 'imagePath' && this.selectedImage) {
        formData.append(key, this.selectedImage, this.selectedImage.name);
      } else {
        formData.append(key, this.editForm.value[key]);
      }
    }
    this.apiService.updateUser(id, formData).subscribe(
      () => {
        this.router.navigateByUrl('/adminlistuser');
        console.log('Contenu mis à jour avec succès !');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
    this.previewImage(this.selectedImage);
  }

  // Afficher l'aperçu de l'image sélectionnée ou l'image statique
  previewImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc = e.target.result;
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.imageSrc = '/../../assets/images/avatars/01.png'; // Afficher l'image statique
    }
  }
}


*/
