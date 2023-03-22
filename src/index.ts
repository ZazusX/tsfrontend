import { GalleryRender } from "./classes/GalleryRender";
import { Gallery } from "./interfaces/Gallery";

const app = document.getElementById("app") as HTMLSelectElement;
const ul = document.querySelector("ul");
const Bedroom: Gallery = { count: 6, src: "https://elise.boldis.info/images/bedroom/", label: "Bedroom" };
const Penthouse: Gallery = { count: 14, src: "https://elise.boldis.info/images/big/", label: "Penthouse" };
const Commertial: Gallery = { count: 5, src: "https://elise.boldis.info/images/commercial/", label: "Commertial" };
const House: Gallery = { count: 3, src: "https://elise.boldis.info/images/house/", label: "House" };
const Village: Gallery = { count: 5, src: "https://elise.boldis.info/images/village/", label: "Village" };
const list = new GalleryRender(ul);

list.render(Bedroom);
list.render(Penthouse);
list.render(Commertial);
list.render(House);
list.render(Village);
