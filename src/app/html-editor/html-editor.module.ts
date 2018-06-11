import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DefaultComponent } from './default/default.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { AddRteControlComponent } from './dynamic-render/add-dynamic.component';
import { DynamicRenderComponent } from './dynamic-render/dynamic-render.component';
import { RteTemplateComponent } from './rte-template/rte-template.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DefaultEevntsComponent } from './events/events.component';
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
        TemplateFormComponent,
        RteTemplateComponent,
        ReactiveFormComponent,
        DefaultComponent,
        TwoWayComponent,
        AddRteControlComponent,
        DynamicRenderComponent,
        DefaultEevntsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HtmlEditorModule {
}