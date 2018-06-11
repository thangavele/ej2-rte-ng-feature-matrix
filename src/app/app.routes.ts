import { Routes } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { IframeComponent } from './iframe/iframe.component';

import { TwoWayComponent } from './two-way/two-way.component';
import { TwoWayIframeComponent } from './two-way-iframe/two-way-iframe.component';
import { DynamicRenderComponent} from './dynamic-render/dynamic-render.component';

import { RteTemplateComponent } from './rte-template/rte-template.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { MdDefaultComponent } from './md-default/md-default.component';
import { TwoWayMdComponent } from './two-way-md/two-way-md.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'default', component: DefaultComponent },
  { path: 'iframe-rte', component: IframeComponent },

  { path: 'two-way', component: TwoWayComponent },
  { path: 'two-way-md', component: TwoWayMdComponent },
  { path: 'two-way-iframe', component: TwoWayIframeComponent },

  { path: 'dynamic-render', component: DynamicRenderComponent },
  { path: 'rte-template', component: RteTemplateComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'md-default', component: MdDefaultComponent },
  
];