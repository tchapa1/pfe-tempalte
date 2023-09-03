import { Router } from '@angular/router';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-admincreateuser',
  templateUrl: './admincreateuser.component.html',
  styleUrls: ['./admincreateuser.component.css']
})
export class AdmincreateuserComponent implements OnInit {

  selectedImage: File = null;
  imageSrc: string | ArrayBuffer | null = null;

  user: any = [];
  submitted = false;
  userForm: FormGroup;
  userProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiuserService,
  ) {
    this.mainForm();
  }

  ngOnInit() {
    this.apiService.getUsers().subscribe((data) => {
      this.user = data;
      this.initUserForm(); // Initialiser le formulaire et l'image par défaut
    });
  }

    // Getter to access form control
    get myForm() {
      return this.userForm.controls;
    }

  mainForm() {
    this.userForm = this.fb.group({
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

  initUserForm() {
    this.userForm.reset(); // Réinitialiser le formulaire
    this.userForm.patchValue({
      nom: '',
      prenom: '',
      matricule: '',
      email: '',
      departement: '',
      role: '', 
      pays: '', 
      status: '', 
      password: '',
    });
    this.imageSrc = '/../../assets/images/avatars/01.png'; // Image statique par défaut
    
  }

  // ...

  onSubmit() {
    this.submitted = true; // Définir submitted à true avant la validation
    if (this.userForm.invalid) {
      return;
    }
    const formData = new FormData();
    for (const key in this.userForm.value) {
      if (key === 'imagePath') {
        formData.append(key, this.selectedImage, this.selectedImage.name);
      } else {
        formData.append(key, this.userForm.value[key]);
      }
    }
    this.apiService.createUser(formData).subscribe(
      (response) => {
        console.log('Utilisateur créé avec succès:', response);
        this.initUserForm(); // Réinitialiser le formulaire et l'image après la soumission
        this.selectedImage = null;
        this.ngZone.run(() => this.router.navigateByUrl('/adminlistuser'));
      },
      (error) => {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
      }
    );
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



/*

import { Router } from '@angular/router';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { Component, OnInit, NgZone, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';





@Component({
  selector: 'app-admincreateuser',
  templateUrl: './admincreateuser.component.html',
  styleUrls: ['./admincreateuser.component.css']
})
export class AdmincreateuserComponent implements OnInit {

  selectedImage: File = null;
  
  imageSrc: string | ArrayBuffer | null = null;

 

  user: any = [];
  submitted = false;
  userForm: FormGroup;
  userProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];



  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiuserService,
    private apiService1: AdminapiuserService
  ) {
    this.mainForm();

  }

  readuser() {
    this.apiService1.getUsers().subscribe((data) => {
      this.user = data;
    })
  }
  ngOnInit() {
    this.apiService1.getUsers().subscribe((data) => {
      this.user = data;
      this.userForm = this.fb.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        matricule: ['', [Validators.required]],
        email: ['', [Validators.required]],
        departement: ['', [Validators.required]],
        role: ['', [Validators.required]],
        pays: ['', [Validators.required]],
        status: ['', [Validators.required]],
        password: ['', [Validators.required]],
        imagePath: ['']
      });
      this.imageSrc = '/../../assets/images/avatars/01.png';

    })
  }
  mainForm() {
    this.userForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      matricule: ['', [Validators.required]],
      email: ['', [Validators.required]],
      departement: ['', [Validators.required]],
      role: ['', [Validators.required]],
      pays: ['', [Validators.required]],
      status: ['', [Validators.required]],
      password: ['', [Validators.required]],
      imagePath: [''],

    });

  }

  // Getter to access form control
  get myForm() {
    return this.userForm.controls;
  }



  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    const formData = new FormData();
    for (const key in this.userForm.value) {
      if (key === 'imagePath') {
        formData.append(key, this.selectedImage, this.selectedImage.name);
      } else {
        formData.append(key, this.userForm.value[key]);
      }
    }
    this.apiService.createUser(formData).subscribe(
      (response) => {
        console.log('Utilisateur créé avec succès:', response);
        this.userForm.reset();
        this.selectedImage = null;
        this.ngZone.run(() => this.router.navigateByUrl('/adminlistuser'));
      },
      (error) => {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
      }
    );
  }





  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
    this.previewImage(this.selectedImage); // Ajoutez cette ligne pour mettre à jour l'aperçu de l'image
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.userForm.patchValue({ imagePath: file }); // Mettre à jour la valeur du champ imagePath dans le formulaire
      this.previewImage(file);
    }
  }


  // Afficher l'aperçu de l'image sélectionnée
  previewImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc = e.target.result;
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      // Afficher l'image statique lorsque le fichier n'est pas sélectionné
      this.imageSrc = '/../../assets/images/avatars/01.png';
    }
  }


}
*/