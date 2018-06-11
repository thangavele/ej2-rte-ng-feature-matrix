import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule} from '@angular/forms';

import { DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns';

import { ButtonComponent } from '@syncfusion/ej2-ng-buttons';

import { SidebarComponent } from '@syncfusion/ej2-ng-navigations';
import { ListViewComponent } from '@syncfusion/ej2-ng-lists';
import { RichTextEditorAllModule } from '@syncfusion/ej2-ng-richtexteditor';

import { RichTextEditorModule } from '@syncfusion/ej2-ng-richtexteditor';

import { DefaultComponent } from './default/default.component';
import { IframeComponent } from './iframe/iframe.component';

import { TwoWayComponent } from './two-way/two-way.component';
import { TwoWayMdComponent } from './two-way-md/two-way-md.component';
import { TwoWayIframeComponent } from './two-way-iframe/two-way-iframe.component';

import { AddRteControlComponent } from './dynamic-render/add-dynamic.component';
import { DynamicRenderComponent } from './dynamic-render/dynamic-render.component';
import { RteTemplateComponent } from './rte-template/rte-template.component';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MarkdownReactiveFormComponent } from './md-reactive-form/md-reactive-form.component';
import { MarkdownTemplateFormComponent } from './md-template-form/md-template-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';


import { MdDefaultComponent } from './md-default/md-default.component';

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    RichTextEditorAllModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ButtonComponent,
    DropDownListComponent,
    SidebarComponent,
    ListViewComponent,

    MarkdownTemplateFormComponent,
    MarkdownReactiveFormComponent,
    TwoWayMdComponent,
    MdDefaultComponent,
    TemplateFormComponent,
    RteTemplateComponent,
    ReactiveFormComponent,
    DefaultComponent,
    IframeComponent,
    TwoWayComponent,
    TwoWayIframeComponent,
    AddRteControlComponent,
    DynamicRenderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
