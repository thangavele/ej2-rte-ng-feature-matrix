import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'iframe-reactive-form',
  templateUrl: './reactive-form.html',
  host: { class: 'e-content-panel' }
})
export class IframeReactiveFormComponent {
  public value: string;
  hero: any = { name: '' };
  submitValue: any = '';
  heroForm: FormGroup;
  public iframeSettings: Object = {
    enable: true
  }
  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
  }
  ngOnInit(): void {
    this.heroForm = new FormGroup({
      'name': new FormControl(null, [
        Validators.required,
      ])
    });
  }
  onDisable() {
    this.heroForm.get('name').disable();
  }
  onEnable() {
    this.heroForm.get('name').enable();
  }
  registerUser(form: NgForm) {
    this.submitValue = JSON.stringify(form.value);
  }

}
