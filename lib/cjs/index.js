"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GalleryRender_1 = require("./classes/GalleryRender");
var app = document.getElementById("app");
var ul = document.querySelector("ul");
var Penthouse = [
    { id: 1, src: "https://elise.boldis.info/images/big/big/img001.jpg", label: "Penthouse 01" },
    { id: 2, src: "https://elise.boldis.info/images/big/big/img002.jpg", label: "Penthouse 02" },
    { id: 3, src: "https://elise.boldis.info/images/big/big/img003.jpg", label: "Penthouse 03" },
    { id: 4, src: "https://elise.boldis.info/images/big/big/img004.jpg", label: "Penthouse 04" },
    { id: 5, src: "https://elise.boldis.info/images/big/big/img005.jpg", label: "Penthouse 05" },
    { id: 6, src: "https://elise.boldis.info/images/big/big/img006.jpg", label: "Penthouse 06" },
];
var list = new GalleryRender_1.GalleryRender(ul);
list.render(Penthouse);
//# sourceMappingURL=index.js.map