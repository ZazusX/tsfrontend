export class GalleryImage {
  id: number;
  src: string;
  label: string;

  constructor(id: number, src: string, label: string) {
    this.id = id;
    this.src = src;
    this.label = label;
  }
}
