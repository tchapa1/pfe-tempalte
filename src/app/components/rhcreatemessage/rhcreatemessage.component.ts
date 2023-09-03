import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AdminapimessageService } from './../../service/adminapimessage.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-rhcreatemessage',
  templateUrl: './rhcreatemessage.component.html',
  styleUrls: ['./rhcreatemessage.component.css']
})
export class RhcreatemessageComponent implements OnInit {


  
  submitted = false;
  messageForm: FormGroup;
  messageProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapimessageService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.messageForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      idenvoie: ['', [Validators.required]],
      idreception: ['', [Validators.required]],
      datecreation: ['', [Validators.required]],
      etat: ['', [Validators.required]],

    });
  }

  // Getter to access form control
  get myForm() {
    return this.messageForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.messageForm.valid) {
      return false;
    } else {
      return this.apiService.createMessage(this.messageForm.value).subscribe({
        complete: () => {
          console.log('message successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/rhlistmessage'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}