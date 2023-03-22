"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GalleryRender_1 = require("./classes/GalleryRender");
var app = document.getElementById("app");
var ul = document.querySelector("ul");
var Penthouse = { count: 14, src: "https://elise.boldis.info/images/big/", label: "Penthouse" };
var list = new GalleryRender_1.GalleryRender(ul);
list.render(Penthouse);
//# sourceMappingURL=index.js.map