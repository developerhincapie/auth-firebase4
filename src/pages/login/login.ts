import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountProvider } from '../../providers/account/account.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myFormLogin: FormGroup;

  constructor(
    public _accountProvider: AccountProvider,
    public fb: FormBuilder,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController) {
    this.loadForm();
  }

  ionViewDidLoad() { }
  
  /*METHOD OR FUNCTION TO CALL THE ACCOUNT SERVICE WITH THE NEW LOGIN FUNCTION, TO LOGIN A NEW USER*/
  sendLogin() {
    const loadingPopup = this.loadingCtrl.create({
      dismissOnPageChange: true
    });
    loadingPopup.present();
    this._accountProvider.newLogin(this.myFormLogin.value)
      .then(response => {
        loadingPopup.dismiss().then(() => {
          this.navCtrl.setRoot('HomePage');
        });
      }).catch(error => {
        loadingPopup.dismiss().then(() => {
          this.alertShow("Message", "The user or password entered is incorrect.");
        });
      });
  }

  /*WE GO TO THE PAGE TO CREATE USERS*/
  createAccount() {
    this.navCtrl.push('RegisterUsersPage');
  }

  /**METHOD TO SHOW AN ALERT */
  alertShow(title, mss) {
    const alert = this.alertCtrl.create({
      title: title,
      message: mss,
      buttons: ["OK"]
    })
    alert.present();
  }


  /* PRIVATE FUNCTION TO LOAD THE FORM*/
  private loadForm() {
    return this.myFormLogin = this.fb.group({
      'Email': ['', [Validators.required, Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      'Password': ['', [Validators.required]],
    });
  }

}
