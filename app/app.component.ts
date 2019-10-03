import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <child [childProp]="parentProp" (toParent)="fromChild($event)"></child>
  `
})
export class AppComponent implements OnChanges {
  parentProp = 'Angular 5';

  ngOnChanges(c: SimpleChanges) {
    console.log('Parent changes: This doesnt happen often ', c);
  }

  fromChild(val) {
    console.log('Parent: receive from child, ', val);
    this.parentProp = 'changed at ' + Date.now();
  }
}
