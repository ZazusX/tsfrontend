import { Gallery } from "../interfaces/Gallery";

export class GalleryRender {
  constructor(private container: HTMLUListElement) {}
  render(images: Gallery) {
    Array(images.count).forEach((image, index) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const img = document.createElement("img");
      a.href = image.src + "big/img" + (new Array(3).join("0") + index + 1).substr(-3) + ".jpg";
      a.title = image.label;
      img.src = image.src + "mini/img" + (new Array(3).join("0") + index + 1).substr(-3) + ".jpg";
      img.alt = image.label;
      a.append(img);
      li.append(a);
      this.container.append(li);
    });
  }
}
