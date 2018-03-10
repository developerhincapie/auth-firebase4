import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AccountProvider } from '../../providers/account/account.service';

@IonicPage()
@Component({
  selector: 'page-register-users',
  templateUrl: 'register-users.html',
})
export class RegisterUsersPage {

  myFormRegister: FormGroup;

  constructor(
    public _accountProvider: AccountProvider,
    public fb: FormBuilder,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController) {
    this.loadForm();
  }

  ionViewDidLoad() { }
  /*METHOD OR FUNCTION TO CALL THE ACCOUNT SERVICE WITH THE NEW ACCOUNT FUNCTION, TO CREATE A NEW USER*/
  sendRegister() {
    const loadingPopup = this.loadingCtrl.create({
      dismissOnPageChange: true
    });
    loadingPopup.present();
    this._accountProvider.newAccount(this.myFormRegister.value)
      .then(response => {
        this.alertShow("Message", "Successful account creation.")
          .then(() => this.navCtrl.push('HomePage'));
      }).catch(error => {
        loadingPopup.dismiss();
        this.alertShow("Message", "The user or password entered is incorrect.");
      });
  }

  /**METHOD TO SHOW AN ALERT */
  alertShow(title, mss) {
    const alert = this.alertCtrl.create({
      title: title,
      message: mss,
      buttons: ["OK"]
    })
    return alert.present();
  }

  /**FUNCTION TO VALIDATE THAT THE PASSWORDS ARE EQUAL*/
  passwordMatcher(c: AbstractControl) {
    return c.get('Password').value === c.get('confirmPassword').value
      ? null : { 'nomatch': true };
  }

  /* PRIVATE FUNCTION TO LOAD THE FORM*/
  private loadForm() {
    return this.myFormRegister = this.fb.group({
      'Email': ['', [Validators.required, Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      passwords: this.fb.group({
        Password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, { validator: this.passwordMatcher })
    });
  }

}
