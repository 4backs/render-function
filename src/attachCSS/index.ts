const attachCSS = (sheet: HTMLStyleElement, options?: { customWindow:  Window }) => {
    const domDocument = options?.customWindow.document || document;

    const head = domDocument.querySelector('head')!;
    head.appendChild(sheet);
};

export default attachCSS;