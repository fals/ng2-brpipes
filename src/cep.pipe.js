"use strict";
var core_1 = require('@angular/core');
// 72006-226
var CepPipe = (function () {
    function CepPipe() {
    }
    CepPipe.prototype.transform = function (value) {
        if (value && value.length === 8) {
            return value.substr(0, 5) + "-" + value.substr(5, 3);
        }
        return value;
    };
    CepPipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'cep'
                },] },
    ];
    /** @nocollapse */
    CepPipe.ctorParameters = [];
    return CepPipe;
}());
exports.CepPipe = CepPipe;
//# sourceMappingURL=cep.pipe.js.map