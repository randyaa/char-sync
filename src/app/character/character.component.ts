import {Component, OnInit, Input} from '@angular/core';
import {Character} from "./character.model";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'cs-character',
  templateUrl: './character.component.html',
})
export class CharacterComponent implements OnInit {
  @Input() characters: FirebaseListObservable<Character[]>;
  @Input() character: Character;
  initiativeIn: number;

  hpUp(character:Character) {
    let workableCharacter = Object.assign({},character);
    workableCharacter.hp += 1;
    this.characters.update(workableCharacter.$key,{hp:workableCharacter.hp});
  }

  hpDown(character:Character) {
    let workableCharacter = Object.assign({},character);
    workableCharacter.hp -= 1;
    this.characters.update(workableCharacter.$key,{hp:workableCharacter.hp});
  }

  reset(character:Character) {
    let workableCharacter = Object.assign({},character);
    workableCharacter.hp = workableCharacter.maxHp;
    this.characters.update(workableCharacter.$key,{hp:workableCharacter.hp});
  }

  setInitiative(newValue) {
    let workableCharacter = Object.assign({},this.character);
    // TODO we changed the actual character since we're bound... fix this

    let newInit = newValue;
    //make sure it's stored in negative form so sorting works properly
    newInit = newInit>0?-1*newInit:newInit;
    this.characters.update(workableCharacter.$key,{initiative:newInit});
  }

  constructor() { }

  ngOnInit() {
  }

}
