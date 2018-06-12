import { NgModule } from '@angular/core';
import { IframeComponent } from './iframe/iframe.component';
import { TwoWayIframeComponent } from './two-way-iframe/two-way-iframe.component';
import { IframeTemplateFormComponent } from './template-form/template-form.component';
import { IframeReactiveFormComponent } from './reactive-form/reactive-form.component';
import { IframeEevntsComponent } from './events/events.component';
import { IframeAPIComponent } from './api/api.component';

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
        IframeComponent,
        TwoWayIframeComponent,
        IframeTemplateFormComponent,
        IframeReactiveFormComponent,
        IframeEevntsComponent,
        IframeAPIComponent
    ],


    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class IframeEditorModule {
}
