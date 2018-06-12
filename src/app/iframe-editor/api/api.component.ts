import { Component, ViewChild } from '@angular/core';
import { Property } from '../../prop/main';
import { getRichTextEditorMethods, getRichTextEditorProps } from './richtexteditor-prop'

import { RichTextEditorComponent } from '@syncfusion/ej2-ng-richtexteditor'

@Component({
  selector: 'iframe-api',
  templateUrl: './api.html',
  host: { class: 'e-content-panel' }
})
export class IframeAPIComponent {
  @ViewChild("defaultRTE")
  public defaultRTE: RichTextEditorComponent;
  public iframeSettings: Object = {
    enable: true
  };
  public tools: Object = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
      'Outdent', 'Indent', '|',
      'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
      'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
  };
  constructor() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      let PropSection: HTMLElement = document.querySelector('.prop') as HTMLElement;
      let PropTable: Property = new Property(this.defaultRTE, getRichTextEditorProps(this.defaultRTE), getRichTextEditorMethods(this.defaultRTE));
      PropTable.appendTo(PropSection);
    }, 10);
  }
}
