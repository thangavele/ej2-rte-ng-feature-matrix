import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.html',
  host: { class: 'e-content-panel' }
})
export class ReactiveFormComponent {
  public value: string;
  hero: any = { name: ''};

  heroForm: FormGroup;
  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
  }
  ngOnInit(): void {
      this.heroForm = new FormGroup({
          'name': new FormControl(null, [
              Validators.required,
          ])
      });
  }
  onDisable(){
    this.heroForm.get('name').disable();
  }
  onEnable(){
    this.heroForm.get('name').enable();
  }

}
