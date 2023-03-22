"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryRender = void 0;
var GalleryRender = /** @class */ (function () {
    function GalleryRender(container) {
        this.container = container;
    }
    GalleryRender.prototype.render = function (images) {
        var _this = this;
        Array(images.count).forEach(function (image, index) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            var img = document.createElement("img");
            a.href = image.src + "big/img" + (new Array(3).join("0") + index + 1).substr(-3) + ".jpg";
            a.title = image.label;
            img.src = image.src + "mini/img" + (new Array(3).join("0") + index + 1).substr(-3) + ".jpg";
            img.alt = image.label;
            a.append(img);
            li.append(a);
            _this.container.append(li);
        });
    };
    return GalleryRender;
}());
exports.GalleryRender = GalleryRender;
//# sourceMappingURL=GalleryRender.js.map