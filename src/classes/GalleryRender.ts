import { Gallery } from "../interfaces/Gallery";
import { Image } from "../interfaces/Image";

export class GalleryRender {
  constructor(private container: HTMLUListElement) {}
  render(images: Gallery) {
    images.forEach((image) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.label;
      li.append(img);
      this.container.append(li);
    });
  }
}
