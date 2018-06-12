import { RichTextEditor } from '@syncfusion/ej2-ng-richtexteditor';
import { simple, complex } from '../../prop/prop-util';

export function getRichTextEditorMethods(rte: RichTextEditor): { [Key: string]: string | object }[] {
    let methods: { [Key: string]: string | object }[] = [];
    methods.push({
        name: 'addEventListener'
    });
    methods.push({
        name: 'appendTo',
        selector: {
            type: 'text'
        }
    });
    methods.push({
        name: 'dataBind'
    });
    methods.push({
        name: 'destroy'
    });
    methods.push({
        name: 'disableToolbarItem'
    });
    methods.push({
        name: 'enableToolbarItem'
    });
    methods.push({
        name: 'focusIn'
    });
    methods.push({
        name: 'focusOut'
    });
    methods.push({
        name: 'getContent'
    });
    methods.push({
        name: 'getHtml'
    });
    methods.push({
        name: 'getRange'
    });
    methods.push({
        name: 'getSelection'
    });
    methods.push({
        name: 'print'
    });
    methods.push({
        name: 'refresh'
    });
    methods.push({
        name: 'removeEventListener'
    });
    methods.push({
        name: 'removeToolbarItem'
    });
    methods.push({
        name: 'selectAll'
    });
    methods.push({
        name: 'selectRange'
    });
    methods.push({
        name: 'setContent',
        element: {
            type: 'text'
        }
    });
    methods.push({
        name: 'showFullScreen'
    });
    methods.push({
        name: 'showSourceCode'
    });
    methods.push({
        name: 'Inject'
    });
    return methods;
}

export function getRichTextEditorProps(rte: RichTextEditor): (simple | complex)[] {
    let props: (simple | complex)[] = [];
    props.push({
        prop: {
            'backgroundColor': {
                default: 'text',
                mode: 'text',
                columns: 'text',
                modeSwitcher: 'bool',
                colorCode: 'text'
            }
        }
    });
    props.push({ prop: 'cssClass', type: 'text' });
    props.push({ prop: 'editorMode', type: 'text' });
    props.push({ prop: 'enableHtmlEncode', type: 'bool' });
    props.push({ prop: 'enablePersistence', type: 'bool' });
    props.push({ prop: 'enableRtl', type: 'bool' });
    props.push({ prop: 'enableTabKey', type: 'bool' });
    props.push({ prop: 'enabled', type: 'bool' });
    props.push({ prop: 'floatingToolbarOffset', type: 'text' });
    props.push({
        prop: {
            'fontColor': {
                default: 'text',
                mode: 'text',
                columns: 'text',
                modeSwitcher: 'bool',
                colorCode: 'text'
            }
        }
    });
    props.push({
        prop: {
            'fontFamily': {
                default: 'text',
                width: 'text',
                items: 'text'
            }
        }
    });
    props.push({
        prop: {
            'fontSize': {
                default: 'text',
                width: 'text',
                items: 'text'
            }
        }
    });
    props.push({
        prop: {
            'format': {
                default: 'text',
                width: 'text',
                types: 'text'
            }
        }
    });
    props.push({
        prop: {
            'formatter': {
                formatTags: 'text',
                listTags: 'text',
                keyConfig: 'text',
                selectionTags: 'text'
            }
        }
    });
    props.push({
        prop: 'height', type: 'text'
    });
    props.push({
        prop: 'htmlAttributes', type: 'text'
    });
    props.push({
        prop: {
            'iframeSettings': {
                enable: 'bool',
                attributes: 'text',
                resources: 'text'
            }
        }
    });
    props.push({
        prop: {
            'inlineMode': {
                enable: 'bool',
                onSelection: 'bool'
            }
        }
    });
    props.push({
        prop: {
            'insertImageSettings': {
                allowedTypes: 'text',
                display: 'text',
                width: 'text',
                height: 'text',
                saveUrl: 'text',
                path: 'text'
            }
        }
    });
    props.push({
        prop: 'keyConfig', type: 'text'
    });
    props.push({
        prop: 'locale', type: 'text'
    });
    props.push({
        prop: 'maxLength', type: 'text'
    });
    props.push({
        prop: 'placeholder', type: 'text'
    });
    props.push({
        prop: {
            'quickToolbarSettings': {
                link: 'text',
                image: 'text',
                text: 'text',
                enable: 'bool'
            }
        }
    });
    props.push({
        prop: 'readonly', type: 'bool'
    });
    props.push({
        prop: 'showCharCount', type: 'bool'
    });
    props.push({
        prop: {
            'toolbarSettings': {
                enable: 'bool',
                items: 'text',
                type: 'text'
            }
        }
    });
    props.push({
        prop: 'undoRedoSteps', type: 'text'
    });
    props.push({
        prop: 'undoRedoTimer', type: 'text'
    });
    props.push({
        prop: 'value', type: 'text'
    });
    props.push({
        prop: 'valueTemplate', type: 'text'
    });
    props.push({
        prop: 'width', type: 'text'
    });
    return props;
}


