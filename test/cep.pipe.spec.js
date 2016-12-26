"use strict";
var cnpj_pipe_1 = require('../src/cnpj.pipe');
describe('CnpjPipe', function () {
    var pipe = new cnpj_pipe_1.CnpjPipe();
    it('transforms "43146822000198" to "43.146.822/0001-98"', function () {
        expect(pipe.transform('43146822000198')).toBe('43.146.822/0001-98');
    });
});
//# sourceMappingURL=cep.pipe.spec.js.map