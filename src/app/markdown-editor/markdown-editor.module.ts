import { NgModule } from '@angular/core';

import { TwoWayMdComponent } from './two-way-md/two-way-md.component';
import { MarkdownReactiveFormComponent } from './md-reactive-form/md-reactive-form.component';
import { MarkdownTemplateFormComponent } from './md-template-form/md-template-form.component';
import { MarkdownEevntsComponent } from './events/events.component';
import { MarkdownAPIComponent } from './api/api.component';

import { MdDefaultComponent } from './md-default/md-default.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RichTextEditorAllModule } from '@syncfusion/ej2-ng-richtexteditor';
import { DropDownListAllModule } from '@syncfusion/ej2-ng-dropdowns';
import { ButtonAllModule } from '@syncfusion/ej2-ng-buttons';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,
    RichTextEditorAllModule,
    DropDownListAllModule,
    ButtonAllModule],
  exports: [
    RichTextEditorAllModule,
    DropDownListAllModule,
    ButtonAllModule
  ],
  declarations: [
    MarkdownTemplateFormComponent,
    MarkdownReactiveFormComponent,
    MarkdownEevntsComponent,
    TwoWayMdComponent,
    MdDefaultComponent,
    MarkdownAPIComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarkdownEditorModule {
}