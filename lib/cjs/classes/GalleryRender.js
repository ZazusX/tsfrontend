"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryRender = void 0;
var GalleryRender = /** @class */ (function () {
    function GalleryRender(container) {
        this.container = container;
    }
    GalleryRender.prototype.render = function (images) {
        var _this = this;
        images.forEach(function (image) {
            var li = document.createElement("li");
            var img = document.createElement("img");
            img.src = image.src;
            img.alt = image.label;
            li.append(img);
            _this.container.append(li);
        });
    };
    return GalleryRender;
}());
exports.GalleryRender = GalleryRender;
//# sourceMappingURL=GalleryRender.js.map