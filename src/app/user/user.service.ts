import { Injectable } from '@angular/core';
import {FirebaseListObservable, AngularFire, FirebaseAuthState, FirebaseObjectObservable} from "angularfire2";
import {User} from "./user.model";

@Injectable()
export class UserService {

  constructor(private af: AngularFire) { }

  registerUser(auth: FirebaseAuthState) {
    let user$: FirebaseObjectObservable<User> = this.af.database.object('/users/'+auth.uid);
    user$.subscribe(obj=>{

    });
  }
}
