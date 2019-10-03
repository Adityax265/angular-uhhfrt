import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <h3>Child Component with {{childProp}}</h3>
    <button (click)="fire()">Talk to parent</button>
  `
})
export class ChildComponent implements OnChanges {
  @Input() childProp;
  @Output() toParent = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('in child changes with: ', changes);
  }

  fire() {
    this.toParent.emit('Hi Parent');
  }
}
