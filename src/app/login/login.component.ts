import {Component, Input, ViewChild} from '@angular/core';
import {FormWithoutStoreComponent} from "../common/form-without-store/form-without-store.component";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// TODO - change this
export class LoginComponent extends FormWithoutStoreComponent {
  static TOTAL_NO_OF_INTERVALS = 10;

  @ViewChild('content') contentEle: any;
  @Input('redirectTo') redirectTo: string;

  showOTPPage = false;
  showLoginPage = true;

  isUserLoggedIn = true;

  closeResult = '';



  showCounter = true;

  constructor( private fb: FormBuilder, private router: Router) {
    super();

  }

  override initFormFields(): void {
    this.showOTPPage = false;
    this.showLoginPage = true;
    // this.count = LoginComponent.TOTAL_NO_OF_INTERVALS;

    this.form = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('[6-9][0-9]{9}')]],
      otp: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
    });

    // to check user is logged in or not

  }

  navigateNextPageOnSuccess(): void {
  }

  open(): void {

  }

  private getDismissReason(reason: any): void {

  }


  getOTP(): void {

  }

  resendOTP(): boolean {
    this.getOTP();
    return false;
  }

  makeCounter(): void {
    // this.count = LoginComponent.TOTAL_NO_OF_INTERVALS;
    this.showCounter = true;



    /* timer(0, 1000).pipe(
       take(this.count),
       map(() => --this.count)
     ).subscribe(() => {
       if (this.count === 0) {
         this.showCounter = false;
       }
     });*/
    /*this.counter$.subscribe((counter) => {
      this.counter = counter;
      if (this.counter === 0) {

      }
    });*/


  }

  async signUpAndSignIn(): Promise<void> {

    console.log('sign in start');

  }


  async signIn(): Promise<void> {
    // this.loggedInUser = false;
  }

  closeModal(): void {
    this.showLoginPage = true;
    this.showOTPPage = false;
    // this.modalReference.close();
    // if (this.countDown) {
    //   this.countDown.unsubscribe();
    // }
  }

  // TODO : show error msg for invalid otp
  async verifyOTP(): Promise<void> {

  }


  signOut(): void {


  }
}

