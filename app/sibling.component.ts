import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  template: `<h2>Parent</h2>
  <p>{{ messageFromChild }}</p>
  <child [message]="message" (messageFromChildEvent)="reciveMessage($event)" ></child>`
})
export class ParentComponent {
  message = 'Message from Parent';
  messageFromChild = ""

  reciveMessage($event) {
    this.messageFromChild = $event;
  }
}