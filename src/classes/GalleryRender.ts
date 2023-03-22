import { Gallery } from "../interfaces/Gallery";

export class GalleryRender {
  constructor(private container: HTMLUListElement) {}
  render(images: Gallery) {
    var arr = Array.apply(null, Array(images.count));
    arr.forEach((el: null, index: number) => {
      var nr = index + 1;
      const li = document.createElement("li");
      const a = document.createElement("a");
      const img = document.createElement("img");
      a.href = images.src + "big/img" + (new Array(3).join("0") + nr).substr(-3) + ".jpg";
      a.title = images.label;
      img.src = images.src + "mini/img" + (new Array(3).join("0") + nr).substr(-3) + ".jpg";
      img.alt = images.label;
      a.append(img);
      li.append(a);
      this.container.append(li);
    });
  }
}
