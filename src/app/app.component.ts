import { Component } from '@angular/core';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {Character} from "./character/character.model";
import {CharacterService} from "./character/character.service";
import {UserService} from "./user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  characters$: FirebaseListObservable<Character[]>;

  constructor(private af: AngularFire,
              private characterService:CharacterService,
              private userService:UserService,
  ) {
    af.auth.subscribe((auth) => {
      this.characterService.setAuth(auth);
      console.log(auth);
      //see https://github.com/angular/angularfire2/blob/561e7b71f50454c8e1572e9d61b586f00850dbdd/docs/4-querying-lists.md for options
      this.characters$ = this.characterService.getCharacters();
    });
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}
