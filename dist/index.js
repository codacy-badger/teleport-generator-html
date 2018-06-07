"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var teleport_lib_js_1 = require("teleport-lib-js");
var component_1 = require("./generators/component");
var project_1 = require("./generators/project");
var TeleportGeneratorHtml = /** @class */ (function (_super) {
    __extends(TeleportGeneratorHtml, _super);
    function TeleportGeneratorHtml() {
        var _this = _super.call(this, 'html-generator', 'html') || this;
        _this.componentGenerator = new component_1.default(_this);
        _this.projectGenerator = new project_1.default(_this, _this.componentGenerator);
        return _this;
    }
    TeleportGeneratorHtml.prototype.generateComponent = function (component, options) {
        return this.componentGenerator.generate(component, options);
    };
    TeleportGeneratorHtml.prototype.generateProject = function (component, options) {
        return this.projectGenerator.generate(component, options);
    };
    return TeleportGeneratorHtml;
}(teleport_lib_js_1.Generator));
exports.default = TeleportGeneratorHtml;
//# sourceMappingURL=index.js.map