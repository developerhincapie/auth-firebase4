import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account.service';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profileRoot = 'ProfilePage';
  postsRoot = 'PostsPage';


  constructor(
    public _accountProvider: AccountProvider,
    public navCtrl: NavController) { }

  /**FUNCTION TO DEPLOY THE APP */
  sendLoggout() {
    this._accountProvider.loggout()
      .then((response) => {
        this.navCtrl.setRoot('LoginPage');
      });
  }
}
