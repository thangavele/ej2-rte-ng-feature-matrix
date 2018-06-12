import { Component } from '@angular/core';
import { ActionBeginEventArgs, ActionCompleteEventArgs } from '@syncfusion/ej2-ng-richtexteditor';
@Component({
  selector: 'default-events',
  templateUrl: './events.html',
  host: { class: 'e-content-panel' }
})
export class DefaultEevntsComponent {
  public tools: Object = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
      'Outdent', 'Indent', '|',
      'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
      'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
  };
     //Display event log
     appendElement(html: string): void {
      let span: HTMLElement = document.createElement('span');
      span.innerHTML = html;
      let log: HTMLElement = document.getElementById('EventLog');
      log.insertBefore(span, log.firstChild);
  }
  //Handler for created event trace
  onCreate(): void {
    this.appendElement('RichTextEditor <b>create</b> event called<hr>');
  }
  //Handler for changed event trace
  onChange(): void {
    this.appendElement('RidhTextEditor <b>change</b> event called<hr>');
  }
  begin(args: ActionBeginEventArgs): void {
    this.appendElement('<b>' + args.requestType + '</b> action is called<hr>');
  }
  complete(args: ActionCompleteEventArgs): void {
    this.appendElement('<b>' + args.requestType + '</b> action is completed<hr>');
  }
  focus(): void {
    this.appendElement('RichTextEditor <b>focus</b> event called<hr>');
  }
  blur(): void {
    this.appendElement('RichTextEditor <b>blur</b> event called<hr>');
  }
  toolbarClick(): void {
    this.appendElement('RidhTextEditor <b>toolbar click</b> event called<hr>');
  }

  onClear(): void {
    document.getElementById('EventLog').innerHTML = '';
  }
}
