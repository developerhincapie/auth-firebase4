import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AccountProvider {

  constructor(
    private storage: Storage,
    private afAuth: AngularFireAuth,
    public http: HttpClient) { }

  newLogin(credentials) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(
        credentials.Email,
        credentials.Password
      ).then(user => {
        this.storage.set('user_yuxi', JSON.stringify(user));
        resolve(user);
      }, error => {
        reject(error);
      });
    });
  }

  newAccount(credentials) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(
        credentials.Email,
        credentials.passwords.Password
      ).then(user => {
        this.storage.set('user_yuxi', JSON.stringify(user));
        resolve(user);
      }, error => {
        reject(error);
      });
    });
  }

  loggout() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signOut().then(() => {
        this.storage.remove('user_yuxi');
        resolve(true);
      });
    });
  }

}
