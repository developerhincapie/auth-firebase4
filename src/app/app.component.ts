import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any;

  constructor(
    platform: Platform,
    private storage: Storage,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen) {

    platform.ready().then(() => {
      setTimeout(() => {
        this.statusBar.backgroundColorByHexString("#4f1949");
      }, 1000);
      this.listenAuth();
    });
  }

  private listenAuth() {
    this.storage.get('user_yuxi')
      .then((response) => {
        this.splashScreen.hide();
        if (response) {
          this.nav.setRoot('HomePage');
        } else {
          this.nav.setRoot('LoginPage');
        }
      }).catch(error => this.nav.setRoot('LoginPage'));
  }
}
