


import { AdminapiuserService } from './../../service/adminapiuser.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AfterViewInit, Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { switchMap } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-adminlistuser',
  templateUrl: './adminlistuser.component.html',
  styleUrls: ['./adminlistuser.component.css']
})
export class AdminlistuserComponent implements OnInit , AfterViewInit{

  user:any = [];
  userfind:any = [];
  userfinded:any = [];
  

  findformForm: FormGroup;
  submitted = false;


  
  constructor(
    private apiService: AdminapiuserService,
    private router: Router,
    public fb: FormBuilder,
    private ngZone: NgZone
    )
   { 
    this.readuser();
    this.mainForm();
  }


  ngOnInit() {}


  ngAfterViewInit() {
    $(document).ready(function() {
      // Initialisation de DataTables avec la fonctionnalité de recherche et de pagination
      $('#user-list-table').DataTable({
        searching: true, // Activer la recherche
        lengthMenu: [5, 10, 50, 100], // Nombre d'éléments par page
        pageLength: 5 // Nombre d'éléments affichés par défaut par page
        // Autres options de configuration de DataTables, le cas échéant
      });
    });
  }


  mainForm() {
    this.findformForm = this.fb.group({
      email: ['', [Validators.required]],
    });
  }


  // Getter to access form control
  get myForm() {
    return this.findformForm.controls;
  }


  readuser() {
    this.apiService.getUsers().subscribe((data) => {
      if (data) {
        this.user = Object.values(data).map(user => ({
          ...user,
          imageSrc: `http://localhost:4000/${user.imagePath}`
        }));
      }
    });
  }


  removeuser(userId: string) {
    if (window.confirm('Are you sure?')) {
      // Trouver l'index de l'utilisateur dans le tableau user
      const index = this.user.findIndex((user) => user._id === userId);
      if (index !== -1) {
        // Supprimer l'utilisateur de la base de données en utilisant l'ID de l'utilisateur
        this.apiService.deleteUser(userId).subscribe(
          () => {
            // Utiliser la méthode splice pour supprimer l'utilisateur du tableau
            this.user.splice(index, 1);
            // Rediriger vers la page adminlistuser après la suppression
            this.router.navigateByUrl('/adminlistuser');
          },
          (error) => {
            // Gérer les erreurs ici, si nécessaire
            console.log(error);
          }
        );
      }
    }
  }

  

  public openPDF(): void {
    let DATA: any = document.getElementById('user-list-table');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }



}

/*
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AfterViewInit, Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


declare var $: any;

@Component({
  selector: 'app-adminlistuser',
  templateUrl: './adminlistuser.component.html',
  styleUrls: ['./adminlistuser.component.css']
})
export class AdminlistuserComponent implements OnInit, AfterViewInit {

  user: any = [];
  userfind: any = [];
  userfinded: any = [];
  imageSrc: string;


  findformForm: FormGroup;
  submitted = false;


  constructor(
    private apiService: AdminapiuserService,
    private router: Router,
    public fb: FormBuilder,
    private ngZone: NgZone
  ) {
    this.readuser();
    this.mainForm();
  }


  ngOnInit() { this.readuser(); }


  ngAfterViewInit() {
    $(document).ready(function () {
      // Initialisation de DataTables avec la fonctionnalité de recherche et de pagination
      $('#user-list-table').DataTable({
        searching: true, // Activer la recherche
        lengthMenu: [5, 10, 50, 100], // Nombre d'éléments par page
        pageLength: 5 // Nombre d'éléments affichés par défaut par page
        // Autres options de configuration de DataTables, le cas échéant
      });
    });
  }


  mainForm() {
    this.findformForm = this.fb.group({
      email: ['', [Validators.required]],
    });
  }

  get myForm() {
    return this.findformForm.controls;
  }


  readuser() {
    this.apiService.getUsers().subscribe((data) => {
      if (data) {
        this.user = Object.values(data).map(user => ({
          ...user,
          imageSrc: `http://localhost:4000/${user.imagePath}`
        }));
      }
    });
  }

  removeuser(userId: string) {
    if (window.confirm('Are you sure?')) {
      // Trouver l'index de l'utilisateur dans le tableau user
      const index = this.user.findIndex((user) => user._id === userId);
      if (index !== -1) {
        // Supprimer l'utilisateur de la base de données en utilisant l'ID de l'utilisateur
        this.apiService.deleteUser(userId).subscribe(
          () => {
            // Utiliser la méthode splice pour supprimer l'utilisateur du tableau
            this.user.splice(index, 1);
            // Rediriger vers la page adminlistuser après la suppression
            this.router.navigateByUrl('/adminlistuser');
          },
          (error) => {
            // Gérer les erreurs ici, si nécessaire
            console.log(error);
          }
        );
      }
    }
  }




  disableUser(user: any) {
    // Code pour désactiver l'utilisateur ici
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('user-list-table');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

  /*
    removeuser(user, index) {
      if(window.confirm('Are you sure?')) {
          this.apiService.deleteUser(user._id).subscribe((data) => {
            this.user.splice(index, 1);
          }
        )    
      }
    }
  
    onSubmitssssssss(){
      let creatorId = []
      for (let i in this.user) {
        if(this.findformForm.value.email==this.user[i].email)
        {
             this.userfind.push(this.user[i])
        }
        if(this.findformForm.value.email==this.user[i].role)
        {
             this.userfind.push(this.user[i])
        }
        if(this.findformForm.value.email==this.user[i].nom)
        {
             this.userfind.push(this.user[i])
        }
        if(this.findformForm.value.email==this.user[i].prenom)
        {
             this.userfind.push(this.user[i])
        }
        if(this.findformForm.value.departement==this.user[i].prenom)
        {
             this.userfind.push(this.user[i])
        }
        if(this.findformForm.value.matricule==this.user[i].prenom)
        {
             this.userfind.push(this.user[i])
        }
      }
      this.user =this.userfind;
    }
  */

  /*
  onSubmitssssssss() {
    let creatorId = [];
    for (let i in this.user) {
      if (this.findformForm.value.email == this.user[i].email) {
        this.userfind.push(this.user[i]);
      }
      // Autres conditions pour la recherche ici...
  
    }
    this.user = this.userfind;
  }
  */

/*

}

*/