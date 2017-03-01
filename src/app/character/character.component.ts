import {Component, OnInit, Input} from '@angular/core';
import {Character} from "./character.model";
import {FormControl} from "@angular/forms";
import {CharacterService} from "./character.service";

@Component({
  selector: 'cs-character',
  templateUrl: './character.component.html',
})
export class CharacterComponent implements OnInit {
  @Input() character: Character;
  initiativeInputControl = new FormControl();

  hpUp(character:Character) {
    let workableCharacter = Object.assign({},character);
    workableCharacter.hp += 1;
    this.characterService.update(workableCharacter.$key,{hp:workableCharacter.hp});
  }

  hpDown(character:Character) {
    let workableCharacter = Object.assign({},character);
    workableCharacter.hp -= 1;
    this.characterService.update(workableCharacter.$key,{hp:workableCharacter.hp});
  }

  reset(character:Character) {
    let workableCharacter = Object.assign({},character);
    workableCharacter.hp = workableCharacter.maxHp;
    this.characterService.update(workableCharacter.$key,{hp:workableCharacter.hp});
  }

  setInitiative(newValue:number) {
    let workableCharacter = Object.assign({},this.character);
    let newInit = newValue;
    //make sure it's stored in negative form so sorting works properly
    newInit = newInit>0?-1*newInit:newInit;
    this.characterService.update(workableCharacter.$key,{initiative:newInit});
  }

  constructor(private characterService:CharacterService) { }

  ngOnInit() {
    this.initiativeInputControl.valueChanges.debounceTime(1000).subscribe(newValue=> this.setInitiative(newValue));
  }

}
