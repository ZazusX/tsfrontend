"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryRender = void 0;
var GalleryRender = /** @class */ (function () {
    function GalleryRender(container) {
        this.container = container;
    }
    GalleryRender.prototype.render = function (images) {
        var _this = this;
        var arr = Array.apply(null, Array(images.count));
        arr.forEach(function (el, index) {
            var nr = index + 1;
            var li = document.createElement("li");
            var a = document.createElement("a");
            var img = document.createElement("img");
            a.href = images.src + "big/img" + (new Array(3).join("0") + nr).substr(-3) + ".jpg";
            a.title = images.label;
            img.src = images.src + "mini/img" + (new Array(3).join("0") + nr).substr(-3) + ".jpg";
            img.alt = images.label;
            a.append(img);
            li.append(a);
            _this.container.append(li);
        });
    };
    return GalleryRender;
}());
exports.GalleryRender = GalleryRender;
//# sourceMappingURL=GalleryRender.js.map