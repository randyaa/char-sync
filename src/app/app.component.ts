import { Component } from '@angular/core';

import {AngularFire, FirebaseListObservable, AuthMethods} from 'angularfire2';
import {FirebaseOperation} from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  characters$: FirebaseListObservable<Character[]>;

  hpUp(character:Character) {
    let workableCharacter = Object.assign({},character);
    workableCharacter.hp += 1;
    this.characters$.update(workableCharacter.$key,{hp:workableCharacter.hp});
  }

  hpDown(character:Character) {
    let workableCharacter = Object.assign({},character);
    workableCharacter.hp -= 1;
    this.characters$.update(workableCharacter.$key,{hp:workableCharacter.hp});
  }

  reset(character:Character) {
    let workableCharacter = Object.assign({},character);
    workableCharacter.hp = workableCharacter.maxHp;
    this.characters$.update(workableCharacter.$key,{hp:workableCharacter.hp});
  }

  constructor(private af: AngularFire) {
    af.auth.subscribe((auth) => {
      console.log(auth);
      this.characters$ = af.database.list('/characters');
    });
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}


export interface Character {
  $key?: string;
  name: string;
  alignment: string;
  class: string;
  hp: number;
  maxHp: number;
  race: string;
}
