import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthProvider } from '../providers/auth';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';



export const firebaseConfig = {
    apiKey: "AIzaSyDcQJHpnDRi9F5HMOfs3IIt4z8_Rli71N0",
    authDomain: "edhachat-8c3ea.firebaseapp.com",
    databaseURL: "https://edhachat-8c3ea.firebaseio.com",
    projectId: "edhachat-8c3ea",
    storageBucket: "edhachat-8c3ea.appspot.com",
    messagingSenderId: "1093781304411"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SplashScreen,
    StatusBar, 
    AuthProvider
  ]
})
export class AppModule {}
