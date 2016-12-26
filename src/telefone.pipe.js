"use strict";
var core_1 = require('@angular/core');
// (31)9609-8689 ou (31)99609-8689
var TelefonePipe = (function () {
    function TelefonePipe() {
    }
    TelefonePipe.prototype.transform = function (value) {
        if (value && value.length === 10) {
            return "(" + value.substr(0, 2) + ")" + value.substr(2, 4) + "-" + value.substr(6, 4);
        }
        else if (value && value.length === 11) {
            return "(" + value.substr(0, 2) + ")" + value.substr(2, 5) + "-" + value.substr(7, 4);
        }
        else {
            return value;
        }
    };
    TelefonePipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'telefone'
                },] },
    ];
    /** @nocollapse */
    TelefonePipe.ctorParameters = [];
    return TelefonePipe;
}());
exports.TelefonePipe = TelefonePipe;
//# sourceMappingURL=telefone.pipe.js.map