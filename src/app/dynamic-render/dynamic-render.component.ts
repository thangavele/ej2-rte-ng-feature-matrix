import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { AddRteControlComponent } from './add-dynamic.component';
import { RichTextEditorComponent } from '@syncfusion/ej2-ng-richtexteditor';

@Component({
  selector: 'dynamic-render',
  templateUrl: './dynamic-render.html',
  entryComponents: [AddRteControlComponent],
  host: { class: 'e-content-panel e-full-container' }
})
export class DynamicRenderComponent {

  @ViewChild('rte')
  public rteObj: RichTextEditorComponent;

  constructor(private componentResolver: ComponentFactoryResolver, protected viewContainerRef: ViewContainerRef, ) {
  }
  ngAfterViewInit() {
    let componentFactory = this.componentResolver.resolveComponentFactory(AddRteControlComponent);
    const ref = this.viewContainerRef.createComponent(componentFactory);
    this.rteObj.valueTemplate = ref.instance.valueTemplate;
  }

}
