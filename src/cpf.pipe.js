"use strict";
var core_1 = require('@angular/core');
// 019.642.561-19
var CpfPipe = (function () {
    function CpfPipe() {
    }
    CpfPipe.prototype.transform = function (value) {
        if (value && value.length === 11) {
            return value.substr(0, 3) + "." + value.substr(3, 3) + "." + value.substr(6, 3) + "-" + value.substr(9, 2);
        }
        return value;
    };
    CpfPipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'cpf'
                },] },
    ];
    /** @nocollapse */
    CpfPipe.ctorParameters = [];
    return CpfPipe;
}());
exports.CpfPipe = CpfPipe;
//# sourceMappingURL=cpf.pipe.js.map