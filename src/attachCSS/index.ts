const attachCSS = (sheet: HTMLStyleElement) => {
    const head = document.querySelector('head')!;
    head.appendChild(sheet);
};

export default attachCSS;