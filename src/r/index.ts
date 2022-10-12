export type HTMLTags = 'a' | 'abbr' | 'address' | 'area' | 'article' | 'asise' | 'audio' | 'b' | 'base' | 'bdi' | 'bdo' | 'blockquote' | 'body' | 'br' | 'button' | 'canvas' | 'caption' | 'city' | 'code' | 'col' | 'colgroup' | 'data' | 'datalist' | 'dd' | 'del' | 'details' | 'dfn' | 'dialog' | 'div' | 'dl' | 'em' | 'embed' | 'fieldset' | 'figcaption' | 'figure' | 'footer' | 'form' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'head' | 'header' | 'hr' | 'html' | 'i' | 'iframe' | 'img' | 'input' | 'ins' | 'kbd' | 'label' | 'legend' | 'li' | 'link' | 'main' | 'map' | 'mark' | 'meta' | 'meter' | 'nav' | 'noscript' | 'object' | 'ol' | 'optgroup' | 'option' | 'output' | 'p' | 'param' | 'picture' | 'pre' | 'progress' | 'q' | 'rp' | 'rt' | 'ruby' | 's' | 'samp' | 'script' | 'section' | 'select' | 'small'|  'source' | 'span' | 'strong' | 'style' | 'sub' | 'summary' | 'sup' | 'svg' | 'table' | 'tbody' | 'td' | 'template' | 'textarea' | 'tfoot' | 'th' | 'thead' | 'time' | 'title' | 'tr' | 'track' | 'u' | 'ul'| 'var' | 'video' | 'wbr' & string;

export interface RenderArgs {
    tag: HTMLTags,
    attributes?: { [key: string]: string },
    style?: Partial<CSSStyleDeclaration>,
    children?: HTMLElement[] | string,
    onClick?: (e: MouseEvent) => void
}


const r = (data: RenderArgs): HTMLElement => {
    const { tag, attributes, children, style, onClick } = data;

    if(attributes && attributes['style']) {
        throw "Use style property to define element styles";
    }

    const el = document.createElement(tag);

    // Setar os attributes
    if(attributes) {
        const attributesData = Object.entries(attributes);
        attributesData.forEach(attribute => {
            el.setAttribute(attribute[0], attribute[1]);
        });
    }

    // Setar o estilo
    if(style) {
        const styles = Object.entries(style);
        styles.forEach(([prop, value]) => {
            (el.style as any)[prop] = value;
        });
    }

    // Se os filhos forem array
    if(children && Array.isArray(children)) {
        children.forEach(child => {
            el.appendChild(child);
        });
    }
    // Verificar se é uma string tag
    else if(typeof children == 'string' && (/(<\w*)((\s\/>)|(.*<\/\w*>))/gm).test(children)){
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = children;
        Array.from(tempDiv.children).forEach(tempDivChild => {
            el.appendChild(tempDivChild);
        });
    }
    // Verificar se é string
    else if(typeof children == 'string') {
        el.innerHTML = children;
    }

    // Colocar os eventos
    if(onClick) {
        el.onclick = onClick;
    }

    return el;
};

export default r;