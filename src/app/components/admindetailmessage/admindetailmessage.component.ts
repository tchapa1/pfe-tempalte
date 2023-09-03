import { Message } from './../../model/message';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapimessageService } from './../../service/adminapimessage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-admindetailmessage',
  templateUrl: './admindetailmessage.component.html',
  styleUrls: ['./admindetailmessage.component.css']
})
export class AdmindetailmessageComponent implements OnInit {

  submitted = false;
  detailForm: FormGroup;
  messageData: Message[];
  messageProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapimessageService,
    private router: Router
  ) {}

  


  ngOnInit() {

    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getmessage(id);
    this.detailForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idenvoie: ['', [Validators.required]],
      idreception: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      etat: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown

  // Getter to access form control
  get myForm() {
    return this.detailForm.controls;
  }
  getmessage(id) {
    this.apiService.getMessage(id).subscribe((data) => {
      this.detailForm.setValue({
        titre: data['titre'],
        description: data['description'],
        idenvoie: data['idenvoie'],
        idreception: data['idreception'],
        datecreation: data['datecreation'],
        etat: data['etat'],
      });
    });
  }

}