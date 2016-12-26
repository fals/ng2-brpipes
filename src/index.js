"use strict";
var cep_pipe_1 = require('./cep.pipe');
var core_1 = require('@angular/core');
var Ng2BRPipesModule = (function () {
    function Ng2BRPipesModule() {
    }
    Ng2BRPipesModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        cep_pipe_1.CepPipe
                    ],
                    exports: [
                        cep_pipe_1.CepPipe
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2BRPipesModule.ctorParameters = function () { return []; };
    return Ng2BRPipesModule;
}());
exports.Ng2BRPipesModule = Ng2BRPipesModule;
//# sourceMappingURL=index.js.map