import * as Util from './prop-util';
import { RichTextEditorProperty } from './richtexteditor-prop-utils';
import { RichTextEditorMethods } from './richtexteditor-methods';
import { simple, complex, ButtonOptions, DDLOptions, rowOptions, InputOptions } from './prop-util';
import { RichTextEditor } from '@syncfusion/ej2-ng-richtexteditor';
import { createElement } from '@syncfusion/ej2-base';

export class Property {
    private rte: RichTextEditor;
    private properties: (simple | complex)[];
    private methods: { [Key: string]: string | object }[];
    constructor(rte: RichTextEditor , prop?: (simple | complex)[], methods?: { [Key: string]: string | object }[]) {
        this.rte = rte;
        this.properties = prop;
        this.methods = methods;
    }
    public appendTo(selector: HTMLElement) {
        if (this.properties) {
            selector.appendChild(this.generateTable());
        }
        if (this.methods) {
            selector.appendChild(this.generateMethods());
        }
    }
    public generateTable(): HTMLElement {
        let table = createElement('div', { innerHTML: '<div class=highlight>Properties:</div>' });
        let rteProp = new RichTextEditorProperty(this.rte, this.properties);
        table.appendChild(rteProp.render());
        return table;
    }

    public generateMethods(): HTMLElement {
        let rteMethods = new RichTextEditorMethods(this.rte, this.methods);
        return rteMethods.render()
    }
}





