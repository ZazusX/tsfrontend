import { GalleryRender } from "./classes/GalleryRender";
import { Gallery } from "./interfaces/Gallery";

const app = document.getElementById("app") as HTMLSelectElement;
const ul = document.querySelector("ul");
const Penthouse: Gallery = [
  { id: 1, src: "https://elise.boldis.info/images/big/big/img001.jpg", label: "Penthouse 01" },
  { id: 2, src: "https://elise.boldis.info/images/big/big/img002.jpg", label: "Penthouse 02" },
  { id: 3, src: "https://elise.boldis.info/images/big/big/img003.jpg", label: "Penthouse 03" },
  { id: 4, src: "https://elise.boldis.info/images/big/big/img004.jpg", label: "Penthouse 04" },
  { id: 5, src: "https://elise.boldis.info/images/big/big/img005.jpg", label: "Penthouse 05" },
  { id: 6, src: "https://elise.boldis.info/images/big/big/img006.jpg", label: "Penthouse 06" },
];

const list = new GalleryRender(ul);

list.render(Penthouse);
