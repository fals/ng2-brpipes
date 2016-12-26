"use strict";
var core_1 = require('@angular/core');
// 99.999.999/9999-99
var CnpjPipe = (function () {
    function CnpjPipe() {
    }
    CnpjPipe.prototype.transform = function (value) {
        if (value && value.length === 14) {
            return value.substr(0, 2) + "." + value.substr(2, 3) + "." + value.substr(5, 3) + "/" + value.substr(8, 4) + "-" + value.substr(12, 2);
        }
        return value;
    };
    CnpjPipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'cnpj'
                },] },
    ];
    /** @nocollapse */
    CnpjPipe.ctorParameters = [];
    return CnpjPipe;
}());
exports.CnpjPipe = CnpjPipe;
//# sourceMappingURL=cnpj.pipe.js.map