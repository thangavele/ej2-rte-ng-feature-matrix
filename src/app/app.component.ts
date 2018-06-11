import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './main.html',
})
export class AppComponent {
  public featureList: Object = [
    { text: 'Default', id: '010', hash: 'default', category: 'Default' },
    { text: 'Iframe', id: '012', hash: 'iframe-rte', category: 'Default'},
    { text: 'Markdown', id: '013', hash: 'md-default', category: 'Default'},

    { text: 'Default', id: '021', hash: 'two-way', category: 'Two Way Bind' },
    { text: 'Iframe', id: '022', hash: 'two-way-iframe', category: 'Two Way Bind' },
    { text: 'Markdown', id: '023', hash: 'two-way-md', category: 'Two Way Bind' },

    { text: 'Default', id: '05', hash: 'dynamic-render', category: 'Dynamic Render' },

    { text: 'Value Template', id: '06', hash: 'rte-template', category: 'Template' },

    { text: 'Reactive form', id: '07', hash: 'reactive-form', category: 'Form' },
    { text: 'Template form', id: '08', hash: 'template-form', category: 'Form' },

  ];

  public fields: Object = { groupBy: 'category', tooltip: 'text' };
  constructor(private router: Router) { }
  onSampleSelect(args: any) {
    this.router.navigate(['./' + args.data.hash]);
  }
}