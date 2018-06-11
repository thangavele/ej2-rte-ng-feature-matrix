import { Component } from '@angular/core';

@Component({
  selector: 'default',
  templateUrl: './default.html',
  host:{class:'e-content-panel'}
})
export class DefaultComponent  { name = 'Default RTE'; }
