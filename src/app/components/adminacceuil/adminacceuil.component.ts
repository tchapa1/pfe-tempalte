import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-adminacceuil',
  templateUrl: './adminacceuil.component.html',
  styleUrls: ['./adminacceuil.component.css']
})
export class AdminacceuilComponent implements OnInit {
  user: any = [];
  sidebarColorSelector$: Observable<string>;
  sidebarMenuStyleSelector$: Observable<string>;
  sidebarTypeSelector$: Observable<string[]>;
  isBanner: boolean; 

  // Ajout de la propriété sidebarTypeClasses
  sidebarTypeClasses: string[] = [];

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private apiService1: AdminapiuserService
  ) {}

  mainForm() {}

  ngOnInit() {
    // Suppression de la souscription à sidebarTypeSelector$
    // Utilisation de la propriété sidebarTypeClasses pour le stockage

    // ...
    
    // Ajout de la souscription à sidebarTypeSelector$ et mise à jour de sidebarTypeClasses
    this.sidebarTypeSelector$.subscribe(classes => {
      this.sidebarTypeClasses = classes; // Utilisez directement la valeur du tableau
    });

    // ...
    
    this.apiService1.getUsers().subscribe(data => {
      this.user = data;
    });
  }
}