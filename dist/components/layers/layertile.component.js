"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var map_component_1 = require('../map.component');
var layer_component_1 = require('./layer.component');
var LayerTileComponent = (function (_super) {
    __extends(LayerTileComponent, _super);
    function LayerTileComponent(map) {
        _super.call(this, map);
    }
    LayerTileComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.layer.Tile instance with:', this);
        this.instance = new openlayers_1.layer.Tile(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerTileComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-layer-tile',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    LayerTileComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    LayerTileComponent.propDecorators = {
        'preload': [{ type: core_1.Input },],
        'useInterimTilesOnError': [{ type: core_1.Input },],
    };
    return LayerTileComponent;
}(layer_component_1.LayerComponent));
exports.LayerTileComponent = LayerTileComponent;
//# sourceMappingURL=layertile.component.js.map