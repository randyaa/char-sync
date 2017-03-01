import { Injectable } from '@angular/core';
import {Character} from "./character.model";
import {FirebaseListObservable, AngularFire, FirebaseAuthState} from "angularfire2";

@Injectable()
export class CharacterService {
  private characters$: FirebaseListObservable<Character[]>;
  private auth: FirebaseAuthState;

  constructor(private af: AngularFire) { }

  getCharacters() {
    if (!this.characters$) {
      this.characters$ = this.af.database.list('/characters', {
        query: {
          orderByChild: 'initiative',
          // limitToLast:5
        }
      });
    }
    return this.characters$;
  }

  update($key: string, updates:any) {
    this.characters$.update($key,updates);
  }

  save(newCharacter: Character) {
    newCharacter.owner = this.auth.uid;
    this.characters$.push(newCharacter);
  }

  setAuth(auth: FirebaseAuthState) {
    this.auth = auth;
  }
}
