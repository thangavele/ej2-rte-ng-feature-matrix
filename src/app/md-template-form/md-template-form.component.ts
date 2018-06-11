import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'md-template-form',
  templateUrl: './md-template-form.html',
  host: { class: 'e-content-panel' }
})
export class MarkdownTemplateFormComponent {
    public value: any = null;
    submitValue: any = '';
    public tools: Object = {
      items: ['Bold', 'Italic', 'StrikeThrough', '|',
        'Formats', 'OrderedList', 'UnorderedList', '|',
        'CreateLink', 'Image', '|', 'Undo', 'Redo']
    };
    registerUser(form: NgForm) {
      this.submitValue = JSON.stringify(form.value);
    }
}
