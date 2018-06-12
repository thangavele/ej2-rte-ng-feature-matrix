

export class HTMLEditorPorperty {

    public api: any = [
        {
            prop: 'backgroundColor',
            type: 'object',
            default: {
                columns: 5,
                colorCode: { 'Custom': ['#ffff00', '#00ff00', '#00ffff', '#ff00ff', '#0000ff', '#ff0000', '#000080', '#008080', '#008000', '#800080', '#800000', '#808000', '#c0c0c0', '#000000', ''] }
            }
        },
        {
            prop: 'cssClass',
            type: 'string',
            default: null
        },
        {
            prop: 'editorMode',
            type: 'enum',
            default: 'HTML',
            option: ['HTML', 'Markdown']
        },
        {
            prop: 'enableHtmlEncode',
            type: 'boolean',
            default: false,
        },
        {
            prop: 'enablePersistence',
            type: 'boolean',
            default: false,
        },
        {
            prop: 'enableRtl',
            type: 'boolean',
            default: false,
        },
        {
            prop: 'enableTabKey',
            type: 'boolean',
            default: false,
        },
        {
            prop: 'enabled',
            type: 'boolean',
            default: true,
        },
        {
            prop: 'floatingToolbarOffset',
            type: 'number',
            default: 0,
        },
        {
            prop: 'fontColor',
            type: 'object',
            default: {
                columns: 10,
                colorCode: { 'Custom': ['', '#000000', '#e7e6e6', '#44546a', '#4472c4', '#ed7d31', '#a5a5a5', '#ffc000', '#5b9bd5', '#70ad47', '#f2f2f2', '#808080', '#cfcdcd', '#d5dce4', '#d9e2f3', '#fbe4d5', '#ededed', '#fff2cc', '#deeaf6', '#e2efd9', '#d9d9d9', '#595959', '#aeaaaa', '#acb9ca', '#b4c6e7', '#f7caac', '#dbdbdb', '#ffe599', '#bdd6ee', '#c5e0b3', '#bfbfbf', '#404040', '#747070', '#8496b0', '#8eaadb', '#f4b083', '#c9c9c9', '#ffd966', '#9cc2e5', '#a8d08d', '#a6a6a6', '#262626', '#3b3838', '#323e4f', '#2f5496', '#c45911', '#7b7b7b', '#bf8f00', '#2e74b5', '#538135', '#7f7f7f', '#0d0d0d', '#161616', '#212934', '#1f3763', '#823b0b', '#525252', '#7f5f00', '#1f4d78', '#375623'] }
            },
        },
        {
            prop: 'fontColor',
            type: 'object',
            default: {
                columns: 10,
                colorCode: { 'Custom': ['', '#000000', '#e7e6e6', '#44546a', '#4472c4', '#ed7d31', '#a5a5a5', '#ffc000', '#5b9bd5', '#70ad47', '#f2f2f2', '#808080', '#cfcdcd', '#d5dce4', '#d9e2f3', '#fbe4d5', '#ededed', '#fff2cc', '#deeaf6', '#e2efd9', '#d9d9d9', '#595959', '#aeaaaa', '#acb9ca', '#b4c6e7', '#f7caac', '#dbdbdb', '#ffe599', '#bdd6ee', '#c5e0b3', '#bfbfbf', '#404040', '#747070', '#8496b0', '#8eaadb', '#f4b083', '#c9c9c9', '#ffd966', '#9cc2e5', '#a8d08d', '#a6a6a6', '#262626', '#3b3838', '#323e4f', '#2f5496', '#c45911', '#7b7b7b', '#bf8f00', '#2e74b5', '#538135', '#7f7f7f', '#0d0d0d', '#161616', '#212934', '#1f3763', '#823b0b', '#525252', '#7f5f00', '#1f4d78', '#375623'] }
            },
        },
        {
            prop: 'fontFamily',
            type: 'object',
            default: {
                default: 'Segoe UI',
                width: '65px',
                items: [{ text: 'Segoe UI', value: 'Segoe UI' }, { text: 'Arial', value: 'Arial,Helvetica,sans-serif' }, { text: 'Courier New', value: 'Courier New,Courier,monospace' }, { text: 'Georgia', value: 'Georgia,serif' }, { text: 'Impact', value: 'Impact,Charcoal,sans-serif' }, { text: 'Lucida Console', value: 'Lucida Console,Monaco,monospace' }, { text: 'Tahoma', value: 'Tahoma,Geneva,sans-serif' }, { text: 'Times New Roman', value: 'Times New Roman,Times,serif' }, { text: 'Trebuchet MS', value: 'Trebuchet MS,Helvetica,sans-serif' }, { text: 'Verdana', value: 'Verdana,Geneva,sans-serif' }]
            }
        },
        {
            prop: 'fontSize',
            type: 'object',
            default: {
                default: '10', width: '35px',
                items: [{ text: '8', value: '8pt' }, { text: '10', value: '10pt' }, { text: '12', value: '12pt' }, { text: '14', value: '14pt' }, { text: '18', value: '18pt' }, { text: '24', value: '24pt' }, { text: '36', value: '36pt' }]
            }
        },
        {
            prop: 'format',
            type: 'object',
            default: {
                default: 'Paragraph', width: '65px',
                types: [{ text: 'Paragraph' }, { text: 'Code' }, { text: 'Quotation' }, { text: 'Heading 1' }, { text: 'Heading 2' }, { text: 'Heading 3' }, { text: 'Heading 4' }, { text: 'Heading 5' }, { text: 'Heading 6' }]
            }
        },
        {
            prop: 'formatter',
            type: 'class',
            default: null
        },
        {
            prop: 'height',
            type: 'string|number',
            default: 'auto'
        },
        {
            prop: 'htmlAttributes',
            type: 'object',
            default: {}
        },
        {
            prop: 'iframeSettings',
            type: 'object',
            default: {
                enable: false,
                attributes: null,
                resources: { styles: [], scripts: [] }
            }
        },
        {
            prop: 'inlineMode',
            type: 'object',
            default: { enable: false, onSelection: true }
        },
        {
            prop: 'insertImageSettings',
            type: 'object',
            default: {
                allowedTypes: ['.jpeg', '.jpg', '.png'],
                display: 'inline',
                width: 'auto',
                height: 'auto',
                saveUrl: null, path: null,
            }
        },
        {
            prop: 'keyConfig',
            type: 'object',
            default: null
        },
        {
            prop: 'locale',
            type: 'string',
            default: undefined
        },
        {
            prop: 'maxLength ',
            type: 'number',
            default: -1
        },
        {
            prop: 'placeholder ',
            type: 'string',
            default: null
        },
        {
            prop: 'quickToolbarSettings  ',
            type: 'object',
            default: {
                enable: true,
                actionOnScroll: 'hide',
                link: ['Open', 'Edit', 'UnLink'],
                image: ['Replace', 'Align', 'Caption', 'Remove', '-', 'InsertLink', 'Display', 'AltText', 'Dimension'], text: ['Cut', 'Copy', 'Paste']
            }
        },
        {
            prop: 'readonly',
            type: 'boolean',
            default: false
        },
        {
            prop: 'showCharCount',
            type: 'boolean',
            default: false
        },
        {
            prop: 'toolbarSettings',
            type: 'object',
            default: {
                enable: true,
                enableFloating: true,
                type: 'Expand',
                items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']
            }
        },
        {
            prop: 'undoRedoSteps',
            type: 'number',
            default: 30
        },
        {
            prop: 'undoRedoTimer',
            type: 'number',
            default: 300
        },
        {
            prop: 'value',
            type: 'string',
            default: null
        },
        {
            prop: 'valueTemplate',
            type: 'string',
            default: null
        },
        {
            prop: 'width',
            type: 'string|number',
            default: '100%'
        },
        {
            prop: 'disableToolbarItem',
            type: 'method',
            return: 'void'
        },
        {
            prop: 'enableToolbarItem',
            type: 'method',
            return: 'void'
        },
        {
            prop: 'focusIn',
            type: 'method',
            return: 'void'
        },
        {
            prop: 'focusOut',
            type: 'method',
            return: 'void'
        },
        {
            prop: 'getContent',
            type: 'method',
            return: 'Element'
        },
        {
            prop: 'getHtml',
            type: 'method',
            return: 'string'
        },
        {
            prop: 'getRange',
            type: 'method',
            return: 'Range'
        },
        {
            prop: 'getSelection',
            type: 'method',
            return: 'string'
        },
        {
            prop: 'print',
            type: 'method',
            return: 'void'
        },
        {
            prop: 'refresh',
            type: 'method',
            return: 'void'
        },
        {
            prop: 'removeToolbarItem',
            type: 'method',
            return: 'void'
        },
        {
            prop: 'selectAll',
            type: 'method',
            return: 'void'
        },
    ];

    constructor(options: Object) {
      
    }
}