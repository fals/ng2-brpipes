"use strict";
var core_1 = require('@angular/core');
// 72006-226
var CepPipe = (function () {
    function CepPipe() {
    }
    CepPipe.prototype.transform = function (value) {
        if (value != null && value.length === 8) {
            return value.substr(0, 5) + '-' + value.substring(5, 8);
        }
    };
    CepPipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'cep'
                },] },
    ];
    /** @nocollapse */
    CepPipe.ctorParameters = function () { return []; };
    return CepPipe;
}());
exports.CepPipe = CepPipe;
//# sourceMappingURL=cep.pipe.js.map