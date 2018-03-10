import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage';

/**Import of angular fire for connection with firebase */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AccountProvider } from '../providers/account/account.service';
import { ApiServicerovider } from '../providers/service-call/api-service';

export const firebaseConfig = {
  apiKey: "AIzaSyBL1O0IcuaRINxUafsg1qZQ2MicQD3bekg",
  authDomain: "yuxidevelopmobile.firebaseapp.com",
  databaseURL: "https://yuxidevelopmobile.firebaseio.com",
  projectId: "yuxidevelopmobile",
  storageBucket: "yuxidevelopmobile.appspot.com",
  messagingSenderId: "761807160944"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AccountProvider,
    Camera,
    ApiServicerovider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
