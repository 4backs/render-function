import generateCSS from "./generateCSS";
import attachCSS from "./attachCSS";

import r, { HTMLTags, RenderArgs } from "./r";

if (typeof window !== 'undefined') {
    (window as any).r = r;
    (window as any).attachCSS = attachCSS;
    (window as any).generateCSS = generateCSS;
}
export { generateCSS, attachCSS, r, HTMLTags, RenderArgs };