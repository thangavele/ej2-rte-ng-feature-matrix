import { NgModule } from '@angular/core';
import { IframeComponent } from './iframe/iframe.component';
import { TwoWayIframeComponent } from './two-way-iframe/two-way-iframe.component';
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
    ],


    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class IframeEditorModule {
}
