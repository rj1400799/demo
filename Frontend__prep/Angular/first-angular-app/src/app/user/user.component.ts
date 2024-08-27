import {
  Component,
  Input,
  computed,
  signal,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
// add type keyword before it, more clear
import { type User } from './user.model';
import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from "../shared/card/card.component";
import { SharedModule } from '../shared/shared.module';


/**
 * Using interface
 * 
 * interface User {
 * 
 * }
 */

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  @Input({required: true}) selected!: boolean; 
  // custom event to emit data
  // this returned obj from this evenemitter class will help us
  // in emitting custom value
  // select --> our own custom event
  @Output() select = new EventEmitter<string>();

  onSelectedUser() {
    this.select.emit(this.user.id);
  }

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // With signals, ts becomes strict

  // Input-signal (signal based input)
  // also assign initial value to it
  // if req, can't assign initial value
  // this avatar is a normal value (not a signal) outside this comp,
  // and can be assigned here as a input signal
  // Only diff between these two ways, that we don't need to convince ts,
  // that we will get this variable/attribute using (!)
  // These are just read-only
  // avatar = input.required<string>();
  // name = input.required<string>();

  // signal based output
  // you don't have to explictly create an event emitter
  // under the hoods, it will be creating
  // select = output<string>();

  // Updating state using signals
  // selectedUser = signal(DUMMY_USERS[0]);
  // Subscribed, therefore only computed when this signal obj changed and not when anything change in this class
  // (ex: any signal) or app
  // imagePath = computed(() => 'assets/users/' + this.avatar())

  // Normal when using Zone.js
  // on --> meant to be executed on events
}
