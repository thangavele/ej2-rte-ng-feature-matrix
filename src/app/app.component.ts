import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './main.html',
})
export class AppComponent {
  public featureList: Object = [
    { text: 'Default', id: '010', hash: 'default', category: 'HTML Editor' },
    { text: 'Two way bind', id: '021', hash: 'default-two-way', category: 'HTML Editor' },
    { text: 'Dynamic render', id: '031', hash: 'default-dynamic-render', category: 'HTML Editor' },
    { text: 'Value Template', id: '041', hash: 'default-rte-template', category: 'HTML Editor' },
    { text: 'Reactive', id: '051', hash: 'default-reactive-form', category: 'HTML Editor' },
    { text: 'Template', id: '052', hash: 'default-template-form', category: 'HTML Editor' },

    { text: 'Iframe', id: '012', hash: 'iframe-rte', category: 'Default'},
    { text: 'Markdown', id: '013', hash: 'md-default', category: 'Default'},

    { text: 'Iframe', id: '022', hash: 'two-way-iframe', category: 'Two Way Bind' },
    { text: 'Markdown', id: '023', hash: 'two-way-md', category: 'Two Way Bind' },

,
    { text: 'Markdown Reactive', id: '053', hash: 'md-reactive-form', category: 'Form' },
    { text: 'Markdown Template', id: '054', hash: 'md-template-form', category: 'Form' }

  ];

  public fields: Object = { groupBy: 'category', tooltip: 'text' };
  constructor(private router: Router) { }
  onSampleSelect(args: any) {
    this.router.navigate(['./' + args.data.hash]);
  }
}