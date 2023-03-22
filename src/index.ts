import { GalleryRender } from "./classes/GalleryRender";
import { Gallery } from "./interfaces/Gallery";

const app = document.getElementById("app") as HTMLSelectElement;
const ul = document.querySelector("ul");
const Penthouse: Gallery = { count: 14, src: "https://elise.boldis.info/images/big/", label: "Penthouse" };
const list = new GalleryRender(ul);

list.render(Penthouse);
