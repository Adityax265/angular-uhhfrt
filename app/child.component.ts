import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  template: `<h2>Child</h2>
  <p>{{message}}</p>
  <button (click)="sendToParent()" class="button">Send Message</button>`
})
export class ChildComponent {
  @Input("message") message: string;
  messageFromChild: string = 'Hello From Child';

  @Output('messageFromChildEvent') messageFromChildEvent = new EventEmitter<string>();

  sendToParent() {
    this.messageFromChildEvent.emit(this.messageFromChild);
  }
}