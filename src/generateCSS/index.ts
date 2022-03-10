interface StylesheetClasses {
    selector: string;
    props: Partial<CSSStyleDeclaration>
}

const toKebabCase = (w: string) => w.replace(/((?<=[a-z\d])[A-Z]|(?<=[A-Z\d])[A-Z](?=[a-z]))/g, '-$1').toLowerCase();

const generateCSS = (styleSheet: StylesheetClasses[], options: { minify: boolean, customWindow?: Window } = { minify: true }) => {
   
    const domDocument = options.customWindow?.document || document;
    
    // =========== Classes ==========
    const sheet = domDocument.createElement('style');

    const classes = styleSheet.reduce<string>((acc, { selector, props }) => {
        const mappedProps = Object.entries(props).map(([key,value]) => `${toKebabCase(key)}: ${value};`);
        const data = options.minify 
            ? `${selector}{${mappedProps.join('')}}` 
            : `${selector} {\n\t${mappedProps.join('\n\t')}\n}\n`;

        acc += data;
        return acc;
    }, '');

    sheet.innerHTML = classes;
    return sheet
};

export default generateCSS;