import { Component, ViewChild } from '@angular/core';
import { Property } from '../../prop/main';
import { getRichTextEditorMethods, getRichTextEditorProps } from './richtexteditor-prop'

import { RichTextEditorComponent } from '@syncfusion/ej2-ng-richtexteditor'

@Component({
  selector: 'md-api',
  templateUrl: './api.html',
  host: { class: 'e-content-panel' }
})
export class MarkdownAPIComponent {
  @ViewChild("defaultRTE")
  public defaultRTE: RichTextEditorComponent;
  public tools: Object = {
    items: ['Bold', 'Italic', 'StrikeThrough', '|',
      'Formats', 'OrderedList', 'UnorderedList', '|',
      'CreateLink', 'Image', '|', 'Undo', 'Redo','FullScreen']
  };
  constructor() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      let PropSection: HTMLElement = document.querySelector('.prop') as HTMLElement;
      let PropTable: Property = new Property(this.defaultRTE, getRichTextEditorProps(this.defaultRTE), getRichTextEditorMethods(this.defaultRTE));
      PropTable.appendTo(PropSection);
    }, 200);
  }
}
