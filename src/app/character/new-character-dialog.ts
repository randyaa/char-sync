import {Component, OnInit} from "@angular/core";
import {MdDialogRef} from "@angular/material";

import {Character} from "./character.model";

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './new-character-dialog.html',
})
export class NewCharacterDialog implements OnInit {
  private newCharacter:Character;

  constructor(public dialogRef: MdDialogRef<NewCharacterDialog>) {}

  ngOnInit(): void {
    this.newCharacter= <Character>{};
  }

}
