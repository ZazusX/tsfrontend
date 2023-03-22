import { Gallery } from "../interfaces/Gallery";
export declare class GalleryRender {
    private container;
    constructor(container: HTMLUListElement);
    render(images: Gallery): void;
}
