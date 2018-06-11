import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.html',
  host: { class: 'e-content-panel' }
})
export class TemplateFormComponent {
    public value: any = null;
}
