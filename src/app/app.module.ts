import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import 'hammerjs';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import {CharacterListComponent} from './character/character-list.component';
import {CharacterService} from "./character/character.service";
import {NewCharacterDialog} from "./character/new-character-dialog";
import {UserService} from "./user/user.service";

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
    AppComponent,
    CharacterComponent,
    CharacterListComponent,
    NewCharacterDialog
  ],
  entryComponents: [NewCharacterDialog],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [
    CharacterService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
