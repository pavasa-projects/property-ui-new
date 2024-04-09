import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormComponent} from "../common/form/form.component";
import {LoginComponent} from "../login/login.component";
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-property',
  templateUrl: './post-property.component.html',
  styleUrls: ['./post-property.component.css']
})

//TODO - change this file
export class PostPropertyComponent extends FormComponent implements OnInit {

  @ViewChild('loginComponent') modal: LoginComponent;

  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router,  el: ElementRef) {
    super(store);
  }

  override initFormFields(): void {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern('[A-Za-z,.\' ]*')]]
    });
  }

  navigateNextPageOnSuccess(): void {
    this.router.navigateByUrl('/post-property-details');
    // Auth.currentAuthenticatedUser()
    //   .then((user: CognitoUser) => {
    //     this.router.navigateByUrl('/post-property-details');
    //   })
    //   .catch((err) => {
    //     this.modal.open();
    //   });
  }

}

