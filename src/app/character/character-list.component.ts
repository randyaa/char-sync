import { Component, OnInit, Input } from '@angular/core';
import {Character} from "./character.model";
import {MdDialog, MdDialogRef} from "@angular/material";
import {NewCharacterDialog} from "./new-character-dialog";
import {CharacterService} from "./character.service";

@Component({
  selector: 'cs-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent implements OnInit {
  @Input() characters:Character[];

  constructor(public dialog: MdDialog, private characterService:CharacterService) { }

  ngOnInit() {
  }

  newCharacter() {
    let dialogRef = this.dialog.open(NewCharacterDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.characterService.save(result);
    });
  }

}

