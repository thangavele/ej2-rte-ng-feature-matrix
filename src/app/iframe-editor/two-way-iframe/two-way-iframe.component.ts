import { Component } from '@angular/core';

@Component({
  selector: 'two-way-iframe',
  templateUrl: './two-way-iframe.html',
  host: { class: 'e-content-panel' }
})
export class TwoWayIframeComponent {
  public rteValue: string = null;
  public iframeSettings: Object = {
    enable: true
  };
}
