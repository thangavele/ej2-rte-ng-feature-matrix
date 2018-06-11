import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'default-template-form',
  templateUrl: './template-form.html',
  host: { class: 'e-content-panel' }
})
export class TemplateFormComponent {
    public value: any = null;
    submitValue: any = '';
    registerUser(form: NgForm) {
      this.submitValue = JSON.stringify(form.value);
    }
}
