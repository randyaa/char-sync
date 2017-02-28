import { Component } from '@angular/core';

import {AngularFire, FirebaseListObservable, AuthMethods} from 'angularfire2';
import {FirebaseOperation} from "angularfire2/database";

import {Character} from "./character/character.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  characters$: FirebaseListObservable<Character[]>;

  constructor(private af: AngularFire) {
    af.auth.subscribe((auth) => {
      console.log(auth);
      //see https://github.com/angular/angularfire2/blob/561e7b71f50454c8e1572e9d61b586f00850dbdd/docs/4-querying-lists.md for options
      this.characters$ = af.database.list('/characters', {
        query:{
          orderByChild:'initiative',
          // limitToLast:5
        }
      });
    });
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}
