import { Component } from '@angular/core';

@Component({
  selector: 'two-way',
  templateUrl: './two-way.html',
  host: { class: 'e-content-panel' }
})
export class TwoWayComponent {
  public rteValue: string = null;
}
