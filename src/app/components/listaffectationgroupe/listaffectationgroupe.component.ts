
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiaffectationgroupeService } from './../../service/apiaffectationgroupe.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { AdminapigroupeService } from './../../service/adminapigroupe.service';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-listaffectationgroupe',
  templateUrl: './listaffectationgroupe.component.html',
  styleUrls: ['./listaffectationgroupe.component.css']
})

export class ListaffectationgroupeComponent implements OnInit, AfterViewInit {

  affectationgroupe: any = [];
  groupe: any = [];
  user: any = [];
  affectationsGrouped: any[] = [];




  constructor(
    private apiService: ApiaffectationgroupeService,
    private apiService2: AdminapigroupeService,
    private apiService3: AdminapiuserService,
    private router: Router,
  ) {
    this.readaffectationgroupe();
    this.readgroupe();
    this.readuser();
  }


  ngOnInit() {

  }



  ngAfterViewInit() {
    $(document).ready(function () {
      $('#affectationgroupe-list-table').DataTable({
        searching: false, // Activer la recherche
        lengthMenu: [5, 10, 50, 100], // Nombre d'éléments par page
        pageLength: 5, // Nombre d'éléments affichés par défaut par page
        // Autres options de configuration de DataTables, le cas échéant
        columns: [
          { orderable: false }, // Colonne 0 (Nom Groupe)
          { orderable: false }, // Colonne 1 (Utilisateurs)
          { orderable: false } // Colonne 2 (Actions)
        ]
      });
      $('#affectationgroupe-list-table1USER').DataTable({
        searching: false, // Activer la recherche
        lengthMenu: [15, 50, 100], // Nombre d'éléments par page
        pageLength: 15, // Nombre d'éléments affichés par défaut par page
        columns: [
          { orderable: false }, // Colonne 0 (Nom Groupe)
          { orderable: false }, // Colonne 1 (Utilisateurs)
          { orderable: false } // Colonne 2 (Actions)
        ]
      });
    });
  }


  readgroupe() {
    this.apiService2.getGroupes().subscribe((data) => {
      this.groupe = data;
    })
  }

  readuser() {
    this.apiService3.getUsers().subscribe((data) => {
      this.user = data;
    })
  }



  readaffectationgroupe() {
    this.apiService.getaffectationgroupes().subscribe((data) => {
      this.affectationgroupe = data;
      this.groupAffectations(); // Appel pour regrouper les affectations
    });
  }


  groupAffectations() {
    // Grouper les affectations par ID de groupe
    const groupedAffectations = this.affectationgroupe.reduce((acc, affectation) => {
      const groupId = affectation.idgroupe;

      if (!acc[groupId]) {
        acc[groupId] = [];
      }
      acc[groupId].push(affectation.idemploye); // Stocker les IDs d'utilisateurs
      return acc;
    }, {});

    // Convertir le groupe d'affectations en un tableau d'objets
    this.affectationsGrouped = Object.keys(groupedAffectations).map((groupId) => {
      return {
        idgroupe: groupId,
        idemployes: groupedAffectations[groupId]
      };
    });
  }


  getUserNameById(userId: string): string {
    const user = this.user.find(u => u._id === userId);
    return user ? `${user.nom} ${user.prenom}` : 'Utilisateur non trouvé';
  }


  getGroupNameById(groupId: string): string {
    const groupe = this.groupe.find(g => g._id === groupId);
    return groupe ? groupe.nom : 'Groupe non trouvé';
  }



  removeAffectationsByGroup(groupId: string) {
    if (window.confirm('Are you sure you want to delete all affectations for this group?')) {
      this.apiService.deleteAllAffectationsByGroupId(groupId).subscribe(
        () => {
          // Successfully deleted, update your data here if needed
          this.readaffectationgroupe();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  removeaffectationgroupe1USER(groupeId: string) {
    if (window.confirm('Are you sure?')) {
      // Trouver l'index de l'utilisateur dans le tableau affectationgroupe
      const index = this.affectationgroupe.findIndex((affectationgroupeItem) => affectationgroupeItem._id === groupeId);
      if (index !== -1) {
        // Supprimer l'utilisateur de la base de données en utilisant l'ID de l'utilisateur
        this.apiService.deleteaffectationgroupe(groupeId).subscribe(
          () => {
            // Utiliser la méthode splice pour supprimer l'utilisateur du tableau
            this.affectationgroupe.splice(index, 1);
            // Rediriger vers la page adminlistgroupe après la suppression
            this.router.navigateByUrl('/listaffectationgroupe');
          },
          (error) => {
            // Gérer les erreurs ici, si nécessaire
            console.log(error);
          }
        );
      }
    }
  }


  removeaffectationgroupe3(userId: string, groupId: string) {
    if (window.confirm('Are you sure?')) {
      // Trouver l'index de l'affectation de groupe dans le tableau affectationgroupe
      const index = this.affectationgroupe.findIndex((affectation) => affectation.idemploye === userId && affectation.idgroupe === groupId);
      if (index !== -1) {
        // Supprimer l'affectation de groupe de la base de données en utilisant son ID
        this.apiService.deleteaffectationgroupe(this.affectationgroupe[index]._id).subscribe(
          () => {
            // Utiliser la méthode splice pour supprimer l'affectation de groupe du tableau
            this.affectationgroupe.splice(index, 1);
            this.readaffectationgroupe();
            
          },
          (error) => {
            // Gérer les erreurs ici, si nécessaire
            console.log(error);
          }
        );
      }
    }
  }

  /* //kifech tafichi awel 7arf melesm wla9ab
  getUserNameInitialsById(userId: string): string {
    const user = this.user.find(user => user._id === userId); // Utilisez _id ou l'attribut approprié pour l'ID d'utilisateur
    if (user) {
      const firstNameInitial = user.nom.charAt(0); // Remplacez 'nom' par l'attribut approprié pour le nom d'utilisateur
      const lastNameInitial = user.prenom.charAt(0); // Remplacez 'prenom' par l'attribut approprié pour le prénom d'utilisateur
      return `${firstNameInitial}${lastNameInitial}`;
    }
    return '';
  }
    */

  public openPDF(): void {
    let DATA: any = document.getElementById('affectationgroupe-list-table');
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
import { AfterViewInit, Component, OnInit, NgZone } from '@angular/core';
import { ApiaffectationgroupeService } from './../../service/apiaffectationgroupe.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { AdminapigroupeService } from './../../service/adminapigroupe.service';
import { AdminapiuserService } from './../../service/adminapiuser.service';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-listaffectationgroupe',
  templateUrl: './listaffectationgroupe.component.html',
  styleUrls: ['./listaffectationgroupe.component.css']
})

export class ListaffectationgroupeComponent implements OnInit, AfterViewInit {

  affectationgroupe: any = [];
  groupe: any = [];
  user: any = [];
  affectationsGrouped: any[] = [];




  constructor(
    private apiService: ApiaffectationgroupeService,
    private apiService2: AdminapigroupeService,
    private apiService3: AdminapiuserService,
    private router: Router,
  ) {
    this.readaffectationgroupe();
    this.readgroupe();
    this.readuser();
  }


  ngOnInit() {

  }



  ngAfterViewInit() {
    $(document).ready(function () {
      $('#affectationgroupe-list-table').DataTable({
        searching: false, // Activer la recherche
        lengthMenu: [5, 10, 50, 100], // Nombre d'éléments par page
        pageLength: 5, // Nombre d'éléments affichés par défaut par page
        // Autres options de configuration de DataTables, le cas échéant
        columns: [
          { orderable: false }, // Colonne 0 (Nom Groupe)
          { orderable: false }, // Colonne 1 (Utilisateurs)
          { orderable: false } // Colonne 2 (Actions)
        ]
      });
      $('#affectationgroupe-list-table1USER').DataTable({
        searching: false, // Activer la recherche
        lengthMenu: [15, 50, 100], // Nombre d'éléments par page
        pageLength: 15 // Nombre d'éléments affichés par défaut par page
        // Autres options de configuration de DataTables, le cas échéant
      });
    });
  }


  readgroupe() {
    this.apiService2.getGroupes().subscribe((data) => {
      this.groupe = data;
    })
  }

  readuser() {
    this.apiService3.getUsers().subscribe((data) => {
      this.user = data;
    })
  }



  readaffectationgroupe() {
    this.apiService.getaffectationgroupes().subscribe((data) => {
      this.affectationgroupe = data;
      this.groupAffectations(); // Appel pour regrouper les affectations
    });
  }


  groupAffectations() {
    // Grouper les affectations par ID de groupe
    const groupedAffectations = this.affectationgroupe.reduce((acc, affectation) => {
      const groupId = affectation.idgroupe;

      if (!acc[groupId]) {
        acc[groupId] = [];
      }
      acc[groupId].push(affectation.idemploye); // Stocker les IDs d'utilisateurs
      return acc;
    }, {});

    // Convertir le groupe d'affectations en un tableau d'objets
    this.affectationsGrouped = Object.keys(groupedAffectations).map((groupId) => {
      return {
        idgroupe: groupId,
        idemployes: groupedAffectations[groupId]
      };
    });
  }


  getUserNameById(userId: string): string {
    const user = this.user.find(u => u._id === userId);
    return user ? `${user.nom} ${user.prenom}` : 'Utilisateur non trouvé';
  }


  getGroupNameById(groupId: string): string {
    const groupe = this.groupe.find(g => g._id === groupId);
    return groupe ? groupe.nom : 'Groupe non trouvé';
  }



  removeAffectationsByGroup(groupId: string) {
    if (window.confirm('Are you sure you want to delete all affectations for this group?')) {
      this.apiService.deleteAllAffectationsByGroupId(groupId).subscribe(
        () => {
          // Successfully deleted, update your data here if needed
          this.readaffectationgroupe();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  removeaffectationgroupe1USER(groupeId: string) {
    if (window.confirm('Are you sure?')) {
      // Trouver l'index de l'utilisateur dans le tableau affectationgroupe
      const index = this.affectationgroupe.findIndex((affectationgroupeItem) => affectationgroupeItem._id === groupeId);
      if (index !== -1) {
        // Supprimer l'utilisateur de la base de données en utilisant l'ID de l'utilisateur
        this.apiService.deleteaffectationgroupe(groupeId).subscribe(
          () => {
            // Utiliser la méthode splice pour supprimer l'utilisateur du tableau
            this.affectationgroupe.splice(index, 1);
            // Rediriger vers la page adminlistgroupe après la suppression
            this.router.navigateByUrl('/listaffectationgroupe');
          },
          (error) => {
            // Gérer les erreurs ici, si nécessaire
            console.log(error);
          }
        );
      }
    }
  }


  removeaffectationgroupe3(userId: string, groupId: string) {
    if (window.confirm('Are you sure?')) {
      // Trouver l'index de l'affectation de groupe dans le tableau affectationgroupe
      const index = this.affectationgroupe.findIndex((affectation) => affectation.idemploye === userId && affectation.idgroupe === groupId);
      if (index !== -1) {
        // Supprimer l'affectation de groupe de la base de données en utilisant son ID
        this.apiService.deleteaffectationgroupe(this.affectationgroupe[index]._id).subscribe(
          () => {
            // Utiliser la méthode splice pour supprimer l'affectation de groupe du tableau
            this.affectationgroupe.splice(index, 1);
          },
          (error) => {
            // Gérer les erreurs ici, si nécessaire
            console.log(error);
          }
        );
      }
    }
  }

  /* //kifech tafichi awel 7arf melesm wla9ab
  getUserNameInitialsById(userId: string): string {
    const user = this.user.find(user => user._id === userId); // Utilisez _id ou l'attribut approprié pour l'ID d'utilisateur
    if (user) {
      const firstNameInitial = user.nom.charAt(0); // Remplacez 'nom' par l'attribut approprié pour le nom d'utilisateur
      const lastNameInitial = user.prenom.charAt(0); // Remplacez 'prenom' par l'attribut approprié pour le prénom d'utilisateur
      return `${firstNameInitial}${lastNameInitial}`;
    }
    return '';
  }
    */
/*

  public openPDF(): void {
    let DATA: any = document.getElementById('affectationgroupe-list-table');
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

*/