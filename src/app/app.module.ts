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


import { RichTextEditorModule } from '@syncfusion/ej2-ng-richtexteditor';

import { HtmlEditorModule } from './html-editor/html-editor.module';

import { IframeEditorModule } from './iframe-editor/iframe-editor.module';
import { MarkdownEditorModule } from './markdown-editor/markdown-editor.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),

    HtmlEditorModule,
    IframeEditorModule,
    MarkdownEditorModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    ListViewComponent
  ],
  bootstrap: [AppComponent],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
