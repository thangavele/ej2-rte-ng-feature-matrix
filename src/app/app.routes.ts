import { Routes } from '@angular/router';

import { DefaultComponent } from './html-editor/default/default.component';
import { TwoWayComponent } from './html-editor/two-way/two-way.component';
import { DynamicRenderComponent} from './html-editor/dynamic-render/dynamic-render.component';
import { ReactiveFormComponent } from './html-editor/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './html-editor/template-form/template-form.component';
import { RteTemplateComponent } from './html-editor/rte-template/rte-template.component';

import { IframeComponent } from './iframe-editor/iframe/iframe.component';
import { TwoWayIframeComponent } from './iframe-editor/two-way-iframe/two-way-iframe.component';

import { MarkdownReactiveFormComponent } from './markdown-editor/md-reactive-form/md-reactive-form.component';

import { MdDefaultComponent } from './markdown-editor/md-default/md-default.component';
import { TwoWayMdComponent } from './markdown-editor/two-way-md/two-way-md.component';
import { MarkdownTemplateFormComponent } from './markdown-editor/md-template-form/md-template-form.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'default', component: DefaultComponent },
  { path: 'default-two-way', component: TwoWayComponent },
  { path: 'default-dynamic-render', component: DynamicRenderComponent },
  { path: 'default-rte-template', component: RteTemplateComponent },
  { path: 'default-reactive-form', component: ReactiveFormComponent },
  { path: 'default-template-form', component: TemplateFormComponent },

  { path: 'iframe-rte', component: IframeComponent },
  { path: 'two-way-iframe', component: TwoWayIframeComponent },

  { path: 'two-way-md', component: TwoWayMdComponent },
  { path: 'md-reactive-form', component: MarkdownReactiveFormComponent },
  { path: 'md-template-form', component: MarkdownTemplateFormComponent },
  { path: 'md-default', component: MdDefaultComponent },
  
];