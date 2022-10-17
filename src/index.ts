
import r, { HTMLTags, RenderArgs } from "./r";

if (typeof window !== 'undefined') {
    (window as any).r = r;
}
export { r, HTMLTags, RenderArgs };