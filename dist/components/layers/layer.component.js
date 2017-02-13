"use strict";
var core_1 = require('@angular/core');
var map_component_1 = require('../map.component');
var LayerComponent = (function () {
    function LayerComponent(host) {
        this.host = host;
        this.componentType = 'layer';
    }
    LayerComponent.prototype.ngOnInit = function () {
        this.host.instance.addLayer(this.instance);
    };
    LayerComponent.prototype.ngOnDestroy = function () {
        this.host.instance.removeLayer(this.instance);
    };
    LayerComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-layer, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    /** @nocollapse */
    LayerComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    LayerComponent.propDecorators = {
        'opacity': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'extent': [{ type: core_1.Input },],
        'zIndex': [{ type: core_1.Input },],
        'minResolution': [{ type: core_1.Input },],
        'maxResolution': [{ type: core_1.Input },],
    };
    return LayerComponent;
}());
exports.LayerComponent = LayerComponent;
//# sourceMappingURL=layer.component.js.map