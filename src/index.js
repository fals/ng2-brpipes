"use strict";
var telefone_pipe_1 = require('./telefone.pipe');
var cpf_pipe_1 = require('./cpf.pipe');
var cnpj_pipe_1 = require('./cnpj.pipe');
var cep_pipe_1 = require('./cep.pipe');
var core_1 = require('@angular/core');
var Ng2BRPipesModule = (function () {
    function Ng2BRPipesModule() {
    }
    Ng2BRPipesModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        cep_pipe_1.CepPipe,
                        cnpj_pipe_1.CnpjPipe,
                        cpf_pipe_1.CpfPipe,
                        telefone_pipe_1.TelefonePipe
                    ],
                    exports: [
                        cep_pipe_1.CepPipe,
                        cnpj_pipe_1.CnpjPipe,
                        cpf_pipe_1.CpfPipe,
                        telefone_pipe_1.TelefonePipe
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2BRPipesModule.ctorParameters = [];
    return Ng2BRPipesModule;
}());
exports.Ng2BRPipesModule = Ng2BRPipesModule;
//# sourceMappingURL=index.js.map