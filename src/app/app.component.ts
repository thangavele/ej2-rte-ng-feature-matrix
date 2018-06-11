import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './main.html',
})
export class AppComponent {
  public featureList: Object = [
    { text: 'Default', id: '010', hash: 'default', category: 'HTML Editor' },
    { text: 'Two way bind', id: '011', hash: 'default-two-way', category: 'HTML Editor' },
    { text: 'Dynamic render', id: '012', hash: 'default-dynamic-render', category: 'HTML Editor' },
    { text: 'Value Template', id: '013', hash: 'default-rte-template', category: 'HTML Editor' },
    { text: 'Reactive', id: '014', hash: 'default-reactive-form', category: 'HTML Editor' },
    { text: 'Template', id: '015', hash: 'default-template-form', category: 'HTML Editor' },

    { text: 'Default', id: '021', hash: 'iframe-rte', category: 'Iframe Editor'},
    { text: 'Two way bind', id: '022', hash: 'two-way-iframe', category: 'Iframe Editor' },
   
    { text: 'Default', id: '034', hash: 'md-default', category: 'Markdown Editor'},
    { text: 'Reactive form', id: '031', hash: 'md-reactive-form', category: 'Markdown Editor' },
    { text: 'Template form', id: '032', hash: 'md-template-form', category: 'Markdown Editor' },
    { text: 'Two way bind', id: '033', hash: 'two-way-md', category: 'Markdown Editor' },
    
  ];

  public fields: Object = { groupBy: 'category', tooltip: 'text' };
  constructor(private router: Router) { }
  onSampleSelect(args: any) {
    this.router.navigate(['./' + args.data.hash]);
  }
}