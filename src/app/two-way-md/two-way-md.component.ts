import { Component } from '@angular/core';

@Component({
  selector: 'two-way-md',
  templateUrl: './two-way-md.html',
  host: { class: 'e-content-panel' }
})
export class TwoWayMdComponent {
  public rteValue: string = null;
  public tools: object = {
    items: ['Bold', 'Italic', 'StrikeThrough', '|',
      'Formats', 'OrderedList', 'UnorderedList', '|',
      'CreateLink', 'Image', '|', 'Undo', 'Redo']
  };
}
