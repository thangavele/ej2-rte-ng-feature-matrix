import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'iframe-template-form',
  templateUrl: './template-form.html',
  host: { class: 'e-content-panel' }
})
export class IframeTemplateFormComponent {
    public value: any = null;
    submitValue: any = '';
    public iframeSettings: Object = {
      enable: true
    }
    registerUser(form: NgForm) {
      this.submitValue = JSON.stringify(form.value);
    }
}
