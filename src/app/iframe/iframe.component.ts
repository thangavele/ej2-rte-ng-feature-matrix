import { Component } from '@angular/core';

@Component({
  selector: 'iframe-rte',
  templateUrl: './iframe.html',
  host: { class: 'e-content-panel' }
})
export class IframeComponent {
  public iframeSettings: Object = {
    enable: true
  }
}
