import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import 'hammerjs';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: `AIzaSyAleFS_HYgMIW49o2DQykDGddB4N1zLLZI`,
  authDomain: 'char-sync.firebaseapp.com',
  databaseURL: 'https://char-sync.firebaseio.com/',
  // storageBucket: '<your-storage-bucket>',
  messagingSenderId: 'char-sync'
};
const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
