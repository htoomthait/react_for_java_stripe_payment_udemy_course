"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(_theX, _theY, _radius) {
        super(_theX, _theY);
        this._theX = _theX;
        this._theY = _theY;
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    getInfo() {
        return super.getInfo() + `, radius=${this.radius}`;
    }
}
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map