import { Component, ViewChild } from '@angular/core';
import { RichTextEditorComponent, ToolbarService } from '@syncfusion/ej2-ng-richtexteditor';
import { LinkService, ImageService, MarkdownEditorService } from '@syncfusion/ej2-ng-richtexteditor';
import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-base';
import * as Marked from 'marked';

@Component({
  selector: 'md-default',
  templateUrl: './md-default.html',
  host: { class: 'e-content-panel' }
})
export class MdDefaultComponent {
  @ViewChild('mdDefault')
  public rteObj: RichTextEditorComponent;
  public textArea: HTMLTextAreaElement;
  public mdsource: HTMLElement;
  public tools: object = {
    items: ['Bold', 'Italic', 'StrikeThrough', '|',
      'Formats', 'OrderedList', 'UnorderedList', '|',
      'CreateLink', 'Image', '|',
      {
        tooltipText: 'Preview',
        template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
          '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
      }, '|', 'Undo', 'Redo']
  };
  public onCreate(): void {
    this.textArea = this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement;
    this.textArea.addEventListener('keyup', (e: KeyboardEventArgs) => {
      this.markDownConversion();
    });
    this.mdsource = document.getElementById('preview-code');
    this.mdsource.addEventListener('click', (e: MouseEvent) => {
      this.fullPreview();
      if ((e.target as HTMLElement).parentElement.classList.contains('e-active')) {
        this.rteObj.disableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
          'UnorderedList', 'CreateLink', 'Image']);
      } else {
        this.rteObj.enableToolbarItem(['Bold', 'Italic', 'StrikeThrough', 'OrderedList',
          'UnorderedList', 'CreateLink', 'Image']);
      }
    });
  }
  public markDownConversion(): void {
    if (this.mdsource.classList.contains('e-active')) {
      let id: string = this.rteObj.getID() + 'html-view';
      let htmlPreview: Element = this.rteObj.element.querySelector('#' + id);
      htmlPreview.innerHTML = Marked((this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
    }
  }
  public fullPreview(): void {
    let id: string = this.rteObj.getID() + 'html-preview';
    let htmlPreview: HTMLElement = this.rteObj.element.querySelector('#' + id) as HTMLElement;
    if (this.mdsource.classList.contains('e-active')) {
      this.mdsource.classList.remove('e-active');
      this.textArea.style.display = 'block';
      htmlPreview.style.display = 'none';
    } else {
      this.mdsource.classList.add('e-active');
      if (!htmlPreview) {
        htmlPreview = createElement('div', { className: 'e-content e-pre-source' });
        htmlPreview.id = id;
        this.textArea.parentNode.appendChild(htmlPreview);
      }
      this.textArea.style.display = 'none';
      htmlPreview.style.display = 'block';
      htmlPreview.innerHTML = Marked((this.rteObj.contentModule.getEditPanel() as HTMLTextAreaElement).value);
    }
  }
}
